<!--
  The Launchpad creator card (apps/main/components/creator-card.tsx) for
  xavvi.com: portrait 3:4, the photo fills it, a dark scrim over the bottom
  keeps the white text readable; a missing, broken or too-small photo shows
  the brand ground and the initial. Top left: the approved check (everyone on
  the roster is approved). Bottom: name, followers, platform pills — a pill
  opens the creator's real profile in a new tab; no URL → no link.

  Styling: Tailwind CSS v4 utilities + the xv-* theme entries in
  creator-card.theme.css (Launchpad's design tokens, exact values).
  Direction: logical classes only (start/end, ps/pe, text-start), so it
  mirrors under dir="rtl" exactly like Launchpad.
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  cardInitial,
  compactCount,
  photoBigEnough,
  PLATFORM_COLORS,
  type RosterCreator,
} from './roster';
import { PLATFORM_ICONS } from './platform-icons';

const props = defineProps<{ creator: RosterCreator }>();
const { t, locale } = useI18n();

const name = computed(() => props.creator.display_name?.trim() || '—');
const total = computed(() => compactCount(Number(props.creator.follower_total ?? 0), locale.value));

// 'ok' only once the picture has loaded AND is big enough (as Launchpad).
const photo = ref<'checking' | 'ok' | 'fallback'>(props.creator.photo_url ? 'checking' : 'fallback');
watch(
  () => props.creator.photo_url,
  (url) => (photo.value = url ? 'checking' : 'fallback'),
);
function onLoad(e: Event) {
  const img = e.target as HTMLImageElement;
  photo.value = photoBigEnough(img.naturalWidth, img.naturalHeight) ? 'ok' : 'fallback';
}

const pills = computed(() =>
  (props.creator.platforms ?? []).map((p, i) => {
    const label = t(`creatorCard.platforms.${p.platform}`);
    const count = p.followers === null ? null : compactCount(p.followers, locale.value);
    return {
      key: `${p.platform}-${i}`,
      url: p.url,
      count,
      icon: PLATFORM_ICONS[p.platform] ?? PLATFORM_ICONS.website,
      color: PLATFORM_COLORS[p.platform] ?? PLATFORM_COLORS.website,
      a11y: count ? t('creatorCard.pill', { platform: label, n: count }) : label,
    };
  }),
);
</script>

<template>
  <article
    class="relative isolate aspect-[3/4] w-full overflow-hidden rounded-2xl bg-xv-navbar-dark font-xv"
    :aria-label="t('creatorCard.card', { name, n: total })"
  >
    <!-- Fallback: brand ground and the initial — never a broken image. -->
    <div
      v-if="photo !== 'ok'"
      class="absolute inset-0 flex items-center justify-center pb-[35%]"
      aria-hidden="true"
    >
      <span class="text-[96px] leading-[110px] font-extrabold text-xv-hero-font/90">
        {{ cardInitial(name) }}
      </span>
    </div>
    <img
      v-if="creator.photo_url && photo !== 'fallback'"
      :src="creator.photo_url"
      alt=""
      class="absolute inset-0 size-full object-cover"
      :class="{ invisible: photo !== 'ok' }"
      loading="lazy"
      decoding="async"
      @load="onLoad"
      @error="photo = 'fallback'"
    />

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_bottom,transparent_0%,var(--color-xv-card-scrim)_55%)]"
      aria-hidden="true"
    />

    <div class="absolute start-3 top-3 flex items-center gap-1.5">
      <span
        role="img"
        :aria-label="t('creatorCard.approved')"
        :title="t('creatorCard.approved')"
        class="flex size-[26px] items-center justify-center rounded-full border-2 border-xv-textbox bg-xv-positive-text shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
      >
        <span aria-hidden="true" class="text-[14px] leading-[20px] font-extrabold text-xv-textbox">✓</span>
      </span>
    </div>

    <div class="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
      <div class="flex flex-col gap-0.5">
        <!-- dir="auto" on the name (2026-11-19): a Latin name inside an Arabic
             page keeps its own direction, so it truncates at its END. The flex
             row keeps it on the page's start side when it is short. -->
        <p class="flex min-w-0 text-lg font-bold text-xv-hero-font">
          <span dir="auto" class="min-w-0 truncate">{{ name }}</span>
        </p>
        <div class="flex items-baseline gap-2">
          <span
            class="text-base font-bold text-xv-hero-font/90"
            :aria-label="t('creatorCard.followers', { n: total })"
          >{{ total }}</span>
        </div>
      </div>

      <ul v-if="pills.length > 0" class="flex flex-wrap gap-1.5">
        <li v-for="p in pills" :key="p.key" class="flex">
          <component
            :is="p.url ? 'a' : 'span'"
            v-bind="
              p.url
                ? { href: p.url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${p.a11y} — ${t('creatorCard.opensNewTab')}` }
                : { 'aria-label': p.a11y }
            "
            class="flex min-h-8 items-center gap-1.5 rounded-full bg-xv-textbox ps-2.5 pe-3"
            :class="p.url ? 'hover:opacity-90 active:opacity-70 focus-visible:outline-2 focus-visible:outline-xv-small-heading' : ''"
          >
            <svg
              :viewBox="`0 0 ${p.icon.w} 512`"
              class="h-[13px] w-auto shrink-0"
              :style="{ fill: p.color }"
              aria-hidden="true"
            >
              <path :d="p.icon.d" />
            </svg>
            <span v-if="p.count" class="text-xs font-bold text-xv-title">{{ p.count }}</span>
          </component>
        </li>
      </ul>
    </div>
  </article>
</template>
