-- Bible Quest launch schema additions.
-- Run this against the Supabase project (SQL editor or `supabase db push`).

-- ============================================================================
-- subscribers: authoritative subscription status, synced by the Stripe webhook.
-- ============================================================================
create table if not exists public.subscribers (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text,
  stripe_customer_id text,
  stripe_subscription_id text,
  status text not null default 'inactive',
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;

-- Users may read their own subscription row. Writes happen only via the
-- service-role key in the Stripe webhook (which bypasses RLS), so no
-- insert/update policy is granted to regular users.
drop policy if exists "Users can read own subscription" on public.subscribers;
create policy "Users can read own subscription"
  on public.subscribers
  for select
  using (auth.uid() = user_id);

-- ============================================================================
-- user_achievements: persisted unlock events (with timestamps) for the
-- gamification layer, so unlocks can be celebrated once and sorted by date.
-- ============================================================================
create table if not exists public.user_achievements (
  user_id uuid not null references auth.users (id) on delete cascade,
  achievement_id text not null,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

alter table public.user_achievements enable row level security;

drop policy if exists "Users can read own achievements" on public.user_achievements;
create policy "Users can read own achievements"
  on public.user_achievements
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own achievements" on public.user_achievements;
create policy "Users can insert own achievements"
  on public.user_achievements
  for insert
  with check (auth.uid() = user_id);
