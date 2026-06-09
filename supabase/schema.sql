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
  mistake_log   jsonb default '[]',
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

-- Curriculum Links
create table if not exists public.curriculum_links (
  id           uuid primary key default uuid_generate_v4(),
  language     text not null,
  course_type  text not null default 'general',
  level        text not null,
  unit_ref     text not null,
  unit_title   text,
  progressme_url text,
  created_at   timestamptz default now(),
  unique(language, course_type, level, unit_ref)
);
