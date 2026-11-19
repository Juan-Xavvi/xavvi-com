import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Read-only client for the LAUNCHPAD Supabase project — used only for the public
// creator roster (rpc 'public_creator_roster'). It uses Launchpad's public anon key,
// and auth is fully disabled so it never reads, writes or refreshes a session and
// cannot interfere with this site's own client (src/lib/supabase.ts).
const launchpadUrl = import.meta.env.VITE_LAUNCHPAD_SUPABASE_URL
const launchpadAnonKey = import.meta.env.VITE_LAUNCHPAD_SUPABASE_ANON_KEY

// Null when the env vars are missing: the roster then renders nothing instead of
// createClient() throwing and breaking the page.
export const launchpadSupabase: SupabaseClient | null =
  launchpadUrl && launchpadAnonKey
    ? createClient(launchpadUrl, launchpadAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
          // Separate storage key so it can never share the site client's auth slot.
          storageKey: 'sb-launchpad-roster',
        },
      })
    : null
