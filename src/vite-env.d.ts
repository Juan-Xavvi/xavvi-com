
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  /** Launchpad Supabase project — public creator roster only */
  readonly VITE_LAUNCHPAD_SUPABASE_URL?: string;
  readonly VITE_LAUNCHPAD_SUPABASE_ANON_KEY?: string;
}
