// src/integrations/supabase/client.ts
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://hhazpkdvghiajzskjlel.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoYXpwa2R2Z2hpYWp6c2tqbGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMDY5NjcsImV4cCI6MjA3MTY4Mjk2N30.58BeN1OEl1yCC5cwf5wf8v4XwCBnSJBzgV6tAssxwCc";

// ✅ cukup 1 deklarasi saja
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
