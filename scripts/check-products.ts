import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
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

async function checkProducts() {
  console.log('=== Checking for Products Table ===\n');

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .limit(5);

  if (error) {
    console.log('❌ Products table does not exist or is not accessible');
    console.log('Error:', error.message);
    return false;
  } else {
    console.log('✅ Products table exists');
    const count = products ? products.length : 0;
    console.log(`Found ${count} products`);
    if (products && products.length > 0) {
      console.log('\nSample product structure:');
      console.log(JSON.stringify(products[0], null, 2));
    }
    return true;
  }
}

checkProducts();
