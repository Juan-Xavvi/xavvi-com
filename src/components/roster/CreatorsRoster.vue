<!--
  The roster grid: equal portrait cards, one column on a phone, two from
  640px, three from 1024px, four from 1280px — the same breakpoints and the
  same 16px gap as Launchpad's CreatorCardGrid / CreatorCardCell.

  Pass the rows yourself (:creators), or pass a Supabase client (:supabase)
  and the component calls public_creator_roster() with it (anon key only).
  Nothing is rendered while loading, on an error, or when nobody is listed.
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { SupabaseClient } from '@supabase/supabase-js';
import CreatorCard from './CreatorCard.vue';
import { useCreatorRoster, type RosterCreator } from './roster';

const props = defineProps<{ creators?: RosterCreator[]; supabase?: SupabaseClient }>();
const { t } = useI18n();

const fetched = props.creators === undefined && props.supabase ? useCreatorRoster(props.supabase) : null;
const rows = computed<RosterCreator[]>(() => props.creators ?? fetched?.creators.value ?? []);
</script>

<template>
  <ul
    v-if="rows.length > 0"
    :aria-label="t('creatorCard.roster')"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <li v-for="c in rows" :key="c.public_id" class="flex">
      <CreatorCard :creator="c" />
    </li>
  </ul>
</template>
