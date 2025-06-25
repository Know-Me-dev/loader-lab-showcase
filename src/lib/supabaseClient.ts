import { createClient } from '@supabase/supabase-js';

// TODO: Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://qthdtwpzfzmbwykjzlbq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aGR0d3B6ZnptYnd5a2p6bGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTg3NTgsImV4cCI6MjA2NTU3NDc1OH0.93DqZcHnYjRZ9BFtsHukkVZHmUSaXDLS-nBoS-k6McA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
