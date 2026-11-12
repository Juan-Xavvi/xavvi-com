<!--
  Archived from HomePage.vue on 2026-11-12 — the "Brand Lab Fast-track" event banner
  (Oct 10-13 Creators / Oct 14-15 Affiliates artwork) that sat between the news teaser
  and the ecosystem cards. Markup preserved as it was on the homepage.

  The button scrolled to #china-trip (the Fast-track itinerary section, archived as
  FastTrackItinerary.vue), so on its own it no longer scrolls anywhere.

  Locale keys this component depends on (still present in src/locales/*.ts):
    - home.fasttrack.title
    - home.fasttrack.more
    - home.fasttrack.manufacturerNotePre / manufacturerNoteLink / manufacturerNotePost

  Assets: /images/page/Fast-track-M.jpg, /images/page/Fast-track-D.jpg
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

function scrollToFasttrack() {
	const el = document.getElementById('china-trip');
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
	<section class="bg-[#f4f5f8] pt-6 lg:pt-8 pb-2">
		<div class="max-w-[800px] mx-auto px-6">
			<button type="button" @click="scrollToFasttrack"
				class="block w-full rounded-2xl overflow-hidden cursor-pointer group"
				:aria-label="t('home.fasttrack.title')">
				<img src="/images/page/Fast-track-M.jpg" :alt="t('home.fasttrack.title')"
					class="block md:hidden w-full h-auto" />
				<img src="/images/page/Fast-track-D.jpg" :alt="t('home.fasttrack.title')"
					class="hidden md:block w-full h-auto" />
			</button>

			<div class="mt-5 flex justify-center">
				<button type="button" @click="scrollToFasttrack"
					class="btn-ghost-on-light h-11! px-8! text-[14px]! tracking-wider">
					{{ t('home.fasttrack.more') }}
				</button>
			</div>

			<p class="mt-6 text-[15px] lg:text-[16px] leading-[1.7] text-[#212226] text-center">
				{{ t('home.fasttrack.manufacturerNotePre') }}<RouterLink to="/brands#globe365"
					class="text-[#AE2049] underline hover:opacity-80">{{ t('home.fasttrack.manufacturerNoteLink') }}</RouterLink>{{ t('home.fasttrack.manufacturerNotePost') }}
			</p>
		</div>
	</section>
</template>
