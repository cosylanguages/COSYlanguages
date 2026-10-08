-- =========================================================================
-- COSYlanguages Founder CRM Schema Definition
-- Supabase Project: iajkejcmoykubthlwfra
-- Executed in Supabase SQL Editor: https://supabase.com/dashboard/project/iajkejcmoykubthlwfra/sql/new
-- =========================================================================

-- 1. Contacts / Leads Table
CREATE TABLE IF NOT EXISTS crm_contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    telegram TEXT,
    source TEXT DEFAULT 'website_form', -- 'website_form', 'placement_quiz', 'whatsapp', 'telegram'
    target_language TEXT,               -- 'English', 'French', 'Russian', 'Italian', 'Greek', etc.
    status TEXT DEFAULT 'new_lead',     -- 'new_lead', 'contacted', 'trial_scheduled', 'active_student', 'churned'
    notes TEXT
);

-- 2. Student Deals & Enrolments Table
CREATE TABLE IF NOT EXISTS crm_deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    contact_id UUID REFERENCES crm_contacts(id) ON DELETE CASCADE,
    course_type TEXT,                  -- 'spoken', 'exam-prep', 'general', 'professional', 'relocation', 'travelling'
    value_eur NUMERIC DEFAULT 0,
    stage TEXT DEFAULT 'inquiry',       -- 'inquiry', 'proposal', 'active_subscription', 'completed'
    next_followup TIMESTAMPTZ,
    notes TEXT
);

-- 3. Interaction & Activity Log Table
CREATE TABLE IF NOT EXISTS crm_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    contact_id UUID REFERENCES crm_contacts(id) ON DELETE CASCADE,
    type TEXT NOT NULL,                -- 'message', 'call', 'trial_lesson', 'note', 'email'
    content TEXT NOT NULL
);

-- Indexing for performance
CREATE INDEX IF NOT EXISTS idx_crm_contacts_status ON crm_contacts(status);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_target_language ON crm_contacts(target_language);
CREATE INDEX IF NOT EXISTS idx_crm_deals_contact_id ON crm_deals(contact_id);
CREATE INDEX IF NOT EXISTS idx_crm_activities_contact_id ON crm_activities(contact_id);

-- Enable Row Level Security (RLS)
ALTER TABLE crm_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_activities ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Founder / Admin Full Read and Write Access
CREATE POLICY "Founder full access on crm_contacts"
ON crm_contacts FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role IN ('founder', 'admin', 'owner')
    )
);

CREATE POLICY "Founder full access on crm_deals"
ON crm_deals FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role IN ('founder', 'admin', 'owner')
    )
);

CREATE POLICY "Founder full access on crm_activities"
ON crm_activities FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role IN ('founder', 'admin', 'owner')
    )
);

-- RLS Policy: Public Lead Ingestion (e.g. from Website Contact Forms or Placement Quiz)
CREATE POLICY "Public lead ingestion on crm_contacts"
ON crm_contacts FOR INSERT
WITH CHECK (true);
