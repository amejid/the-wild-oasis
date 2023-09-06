import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jheuxfotpvlglasltofl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZXV4Zm90cHZsZ2xhc2x0b2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5ODk4NzAsImV4cCI6MjAwOTU2NTg3MH0.WgsAdOJ-T5rvXrA8k7UrDLk9F9sDOAA8xCJtqTgzLdY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
