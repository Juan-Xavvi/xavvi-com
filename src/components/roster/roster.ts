// xavvi.com — the public creator roster (Launchpad migration 20260791).
//
// The data comes from ONE function on the shared Supabase project, called
// with the PUBLIC anon key: supabase.rpc('public_creator_roster'). No table
// is read. No secret is needed or used.
import { ref, type Ref } from 'vue';
import type { SupabaseClient } from '@supabase/supabase-js';

export type RosterPlatform =
  | 'x'
  | 'facebook'
  | 'linkedin'
  | 'twitch'
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'website';

/** One platform pill, biggest first. */
export interface RosterPill {
  platform: RosterPlatform;
  /** The count the creator submitted for this platform; null = none given. */
  followers: number | null;
  /** Their public profile on that platform; null = no link (plain pill). */
  url: string | null;
}

/** One row of public_creator_roster(). */
export interface RosterCreator {
  /** Stable public id (not the Launchpad user id). Use it as the v-for key. */
  public_id: string;
  display_name: string;
  /** Null until photos are published (the card then shows the initial). */
  photo_url: string | null;
  follower_total: number;
  platforms: RosterPill[];
}

/** Fetch the roster: at most 48 creators, followers desc (stable order). */
export async function fetchCreatorRoster(supabase: SupabaseClient): Promise<RosterCreator[]> {
  const { data, error } = await supabase.rpc('public_creator_roster');
  if (error) throw error;
  return (data ?? []) as RosterCreator[];
}

/** The same, as reactive state for a component. */
export function useCreatorRoster(supabase: SupabaseClient): {
  creators: Ref<RosterCreator[]>;
  loading: Ref<boolean>;
  error: Ref<Error | null>;
  reload: () => Promise<void>;
} {
  const creators = ref<RosterCreator[]>([]);
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const reload = async () => {
    loading.value = true;
    error.value = null;
    try {
      creators.value = await fetchCreatorRoster(supabase);
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
    } finally {
      loading.value = false;
    }
  };
  void reload();
  return { creators, loading, error, reload };
}

// ---- the card's rules, identical to Launchpad (apps/main/lib/creator-card.ts,
// apps/main/lib/portrait-photo.ts) ----------------------------------------

/** "18.6M" — compact, Western digits in every locale (Arabic included). */
export function compactCount(n: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: 1,
    numberingSystem: 'latn',
  }).format(n);
}

/** The fallback card's initial. */
export function cardInitial(name: string | null | undefined): string {
  const s = (name ?? '').trim();
  return s ? Array.from(s)[0]!.toUpperCase() : '?';
}

/** Big enough for the 3:4 card once cropped: at least 600 × 800. */
export function photoBigEnough(w: number, h: number): boolean {
  if (!(w > 0 && h > 0)) return false;
  const aspect = 3 / 4;
  const r = w / h > aspect ? { w: Math.floor(h * aspect), h } : { w, h: Math.floor(w / aspect) };
  return r.w >= 599 && r.h >= 799;
}

/** The platforms' own brand colours, for the pill icons (Launchpad tokens). */
export const PLATFORM_COLORS: Record<RosterPlatform, string> = {
  tiktok: '#000000',
  instagram: '#E4405F',
  x: '#000000',
  youtube: '#FF0000',
  facebook: '#1877F2',
  linkedin: '#0A66C2',
  twitch: '#9146FF',
  website: '#212226',
};
