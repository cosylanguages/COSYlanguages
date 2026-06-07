-- COSYlanguages Supabase schema
-- Run once in the Supabase SQL editor

create extension if not exists "uuid-ossp";

create table public.teachers (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  languages text[] default '{}',
  created_at timestamptz default now()
);

create table public.students (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  access_code text unique not null,
  language text not null,
  level text not null,
  course_type text not null default 'general',
  teacher_id uuid references public.teachers(id),
  progressme_id text,
  created_at timestamptz default now()
);

create table public.progress (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references public.students(id) on delete cascade,
  total_points int default 0,
  streak_days int default 0,
  last_active date,
  units_completed int default 0,
  current_unit text,
  updated_at timestamptz default now()
);

create table public.sessions (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references public.students(id) on delete cascade,
  teacher_id uuid references public.teachers(id),
  scheduled_at timestamptz not null,
  status text default 'scheduled',
  lesson_notes text,
  mistake_log jsonb default '[]',
  created_at timestamptz default now()
);

create table public.homework (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references public.students(id) on delete cascade,
  session_id uuid references public.sessions(id),
  unit_ref text,
  task_description text not null,
  status text default 'pending',
  due_date date,
  created_at timestamptz default now()
);

create table public.vocab_notebook (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references public.students(id) on delete cascade,
  word text not null,
  language text not null,
  definition text,
  saved_at timestamptz default now()
);

create table public.challenges (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  language text not null,
  duration_days int not null,
  starts_at timestamptz,
  daily_tasks jsonb default '[]',
  created_at timestamptz default now()
);

create table public.challenge_enrolments (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references public.students(id) on delete cascade,
  challenge_id uuid references public.challenges(id) on delete cascade,
  days_completed int default 0,
  completed boolean default false,
  enrolled_at timestamptz default now()
);

create table public.broadcasts (
  id uuid primary key default uuid_generate_v4(),
  message text not null,
  active boolean default true,
  created_at timestamptz default now()
);

-- Row-level security: students can only see their own rows
alter table public.progress enable row level security;
alter table public.homework enable row level security;
alter table public.vocab_notebook enable row level security;
alter table public.sessions enable row level security;
alter table public.challenge_enrolments enable row level security;

create policy "students see own progress"
  on public.progress for select
  using (student_id = auth.uid());

create policy "students see own homework"
  on public.homework for select
  using (student_id = auth.uid());

create policy "students see own vocab"
  on public.vocab_notebook for all
  using (student_id = auth.uid());
