-- Enable scheduling and HTTP from within Postgres
create extension if not exists pg_net;
create extension if not exists pg_cron;

-- Grant pg_cron usage to postgres role
grant usage on schema cron to postgres;
grant all privileges on all tables in schema cron to postgres;
