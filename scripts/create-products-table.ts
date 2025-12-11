import { createClient } from '@supabase/supabase-js';

// Using service role key for admin operations
const supabaseAdmin = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiOWY0OTViNDMtNzU1NC00MzRiLWExMzktYWRjZDQ5YTgyZDYwIiwianRpIjoiODEyNjY4ZjMtZWMyOC00MDIyLTgxYzAtMjIwYWMwZDIyYTI2IiwiaWF0IjoxNzY1NDE1NDYwLCJleHAiOjE3NjU0MTgxNjB9.s4gz9hdEB7rQfgj3qWv_OifUR9AnlO2xCSrzy948tAc'
      }
    }
  }
);

const createTableSQL = `
-- Create products table
create table if not exists public.products (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,
  name text not null,
  price numeric(10, 2) not null,
  image_url text not null,
  description text,
  category text default 'clothing',
  in_stock boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add foreign key constraints
alter table public.products
  drop constraint if exists fk_tenant,
  add constraint fk_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.products
  drop constraint if exists fk_project,
  add constraint fk_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS
alter table public.products enable row level security;

-- Drop existing policies if any
drop policy if exists "anon_select_products" on public.products;
drop policy if exists "auth_select_products" on public.products;
drop policy if exists "auth_insert_products" on public.products;
drop policy if exists "auth_update_products" on public.products;
drop policy if exists "auth_delete_products" on public.products;

-- Create RLS policies
create policy "anon_select_products"
  on public.products for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_products"
  on public.products for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_products"
  on public.products for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_products"
  on public.products for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_products"
  on public.products for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Add indexes
create index if not exists idx_products_tenant_project
  on public.products(tenantid, projectid);
create index if not exists idx_products_category
  on public.products(category);
create index if not exists idx_products_in_stock
  on public.products(in_stock);
`;

async function createProductsTable() {
  console.log('Creating products table...\n');

  // Execute SQL using Supabase RPC
  const { data, error } = await supabaseAdmin.rpc('exec_sql', {
    sql: createTableSQL
  });

  if (error) {
    console.log('❌ Error creating table:', error.message);
    console.log('Will try alternative method...');

    // Alternative: Try creating through REST API
    const response = await fetch('https://hfndfmtxhqvubnfiwzlz.supabase.co/rest/v1/rpc/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiOWY0OTViNDMtNzU1NC00MzRiLWExMzktYWRjZDQ5YTgyZDYwIiwianRpIjoiODEyNjY4ZjMtZWMyOC00MDIyLTgxYzAtMjIwYWMwZDIyYTI2IiwiaWF0IjoxNzY1NDE1NDYwLCJleHAiOjE3NjU0MTgxNjB9.s4gz9hdEB7rQfgj3qWv_OifUR9AnlO2xCSrzy948tAc'
      },
      body: JSON.stringify({ query: createTableSQL })
    });

    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('Result:', JSON.stringify(result, null, 2));
  } else {
    console.log('✅ Table created successfully');
    console.log('Data:', data);
  }
}

createProductsTable();
