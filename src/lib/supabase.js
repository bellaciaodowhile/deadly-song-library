import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://mkjddexvbwxttkwiuahy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ramRkZXh2Ynd4dHRrd2l1YWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MzA4MDQsImV4cCI6MjA2MDEwNjgwNH0.4d5j2AKDfWBF4kK0aZ8JRK2yXJ9yfzyy6ibLk_zp680',
);