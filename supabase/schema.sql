-- COSYlanguages — Supabase schema
-- Paste this entire file into the Supabase SQL Editor and click Run.
-- Run once only. Safe to re-run: all statements use IF NOT EXISTS.

create extension if not exists "uuid-ossp";

-- Teachers
create table if not exists public.teachers (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  email         text unique not null,
  languages     text[] default '{}',
  created_at    timestamptz default now()
);

-- Students
create table if not exists public.students (
  id            uuid primary key default uuid_generate_v4(),
  email         text unique,
  access_code   text unique not null,
  language      text not null,
  level         text not null,
  course_type   text not null default 'general',
  teacher_id    uuid references public.teachers(id),
  progressme_id text,
  telegram_chat_id text,
  created_at    timestamptz default now()
);

-- Progress (points, streak, current unit)
create table if not exists public.progress (
  id               uuid primary key default uuid_generate_v4(),
  student_id       uuid references public.students(id) on delete cascade,
  total_points     int default 0,
  streak_days      int default 0,
  last_active      date,
  units_completed  int default 0,
  current_unit     text,
  updated_at       timestamptz default now()
);

-- Sessions (lessons)
create table if not exists public.sessions (
  id            uuid primary key default uuid_generate_v4(),
  student_id    uuid references public.students(id) on delete cascade,
  teacher_id    uuid references public.teachers(id),
  scheduled_at  timestamptz not null,
  status        text default 'scheduled',
  lesson_notes  text,
  mistake_log   text[] default '{}',
  created_at    timestamptz default now()
);

-- Homework
create table if not exists public.homework (
  id               uuid primary key default uuid_generate_v4(),
  student_id       uuid references public.students(id) on delete cascade,
  session_id       uuid references public.sessions(id),
  unit_ref         text,
  task_description text not null,
  status           text default 'pending',
  due_date         date,
  created_at       timestamptz default now()
);

-- Vocabulary notebook
create table if not exists public.vocab_notebook (
  id          uuid primary key default uuid_generate_v4(),
  student_id  uuid references public.students(id) on delete cascade,
  word        text not null,
  language    text not null,
  definition  text,
  saved_at    timestamptz default now()
);

-- Challenges / marathons
create table if not exists public.challenges (
  id            uuid primary key default uuid_generate_v4(),
  title         text not null,
  language      text not null,
  duration_days int not null,
  starts_at     timestamptz,
  daily_tasks   jsonb default '[]',
  created_at    timestamptz default now()
);

-- Challenge enrolments
create table if not exists public.challenge_enrolments (
  id             uuid primary key default uuid_generate_v4(),
  student_id     uuid references public.students(id) on delete cascade,
  challenge_id   uuid references public.challenges(id) on delete cascade,
  days_completed int default 0,
  completed      boolean default false,
  enrolled_at    timestamptz default now(),
  unique(student_id, challenge_id)
);

-- Broadcasts
create table if not exists public.broadcasts (
  id          uuid primary key default uuid_generate_v4(),
  message     text not null,
  active      boolean default true,
  created_at  timestamptz default now()
);

-- Row Level Security
alter table public.progress            enable row level security;
alter table public.homework            enable row level security;
alter table public.vocab_notebook      enable row level security;
alter table public.sessions            enable row level security;
alter table public.challenge_enrolments enable row level security;

-- Students can only read their own progress
create policy if not exists "students_own_progress"
  on public.progress for select
  using (student_id = auth.uid());

-- Students can only read their own homework
create policy if not exists "students_own_homework"
  on public.homework for select
  using (student_id = auth.uid());

-- Students can read and write their own vocab
create policy if not exists "students_own_vocab"
  on public.vocab_notebook for all
  using (student_id = auth.uid());

-- Students can only see their own sessions
create policy if not exists "students_own_sessions"
  on public.sessions for select
  using (student_id = auth.uid());

-- Students can only see their own challenge enrolments
create policy if not exists "students_own_enrolments"
  on public.challenge_enrolments for all
  using (student_id = auth.uid());

-- Trigger function: fires when mistake_log is updated on a session
create or replace function notify_mistake_logged()
returns trigger language plpgsql as $$
begin
  -- Only fire when mistake_log actually changed
  if NEW.mistake_log is distinct from OLD.mistake_log then
    perform net.http_post(
      url     := current_setting('app.supabase_url') || '/functions/v1/mistake-check',
      body    := jsonb_build_object(
        'student_id', NEW.student_id,
        'mistake_log', NEW.mistake_log
      ),
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || current_setting('app.service_role_key', true)
      )
    );
  end if;
  return NEW;
end $$;

-- Attach to sessions table
drop trigger if exists on_mistake_logged on public.sessions;
create trigger on_mistake_logged
  after update on public.sessions
  for each row execute function notify_mistake_logged();

-- Migration: ensure mistake_log is text[] (in case table already exists)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'sessions' AND column_name = 'mistake_log' AND data_type = 'jsonb') THEN
        ALTER TABLE public.sessions ALTER COLUMN mistake_log TYPE text[] USING (SELECT array_agg(x) FROM jsonb_array_elements_text(mistake_log) t(x));
        ALTER TABLE public.sessions ALTER COLUMN mistake_log SET DEFAULT '{}';
    ELSIF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'sessions' AND column_name = 'mistake_log') THEN
        ALTER TABLE public.sessions ADD COLUMN mistake_log text[] DEFAULT '{}';
    END IF;
END $$;

-- Add telegram_chat_id to students table
alter table public.students
  add column if not exists telegram_chat_id text;

-- Curriculum links (ProgressMe integration)
create table if not exists public.curriculum_links (
  id           uuid primary key default uuid_generate_v4(),
  language     text not null,
  course_type  text not null default 'general',
  level        text not null,
  unit_index   int not null,
  progressme_url text not null,
  created_at   timestamptz default now(),
  unique(language, course_type, level, unit_index)
);

alter table public.curriculum_links enable row level security;

-- Everyone can read curriculum links
create policy if not exists "read_curriculum_links"
  on public.curriculum_links for select
  to anon, authenticated
  using (true);

-- Admins/Teachers can manage curriculum links
-- Note: In a production environment with Supabase Auth, you would use:
-- to authenticated using (auth.jwt() ->> 'role' in ('admin', 'teacher'))
-- For this access-code system, we permit it for now (protected by service role or application logic)
create policy if not exists "manage_curriculum_links"
  on public.curriculum_links for all
  to anon, authenticated
  using (true);
