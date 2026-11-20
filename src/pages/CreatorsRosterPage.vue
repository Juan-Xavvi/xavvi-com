<script setup lang="ts">
// Creator roster page (route /creators-roster) — fed by the public_creator_roster RPC
// on the Launchpad Supabase project (not this site's own project).
import { useI18n } from 'vue-i18n';
import { launchpadSupabase } from '@/lib/launchpadSupabase';
import CreatorsRoster from '@/components/roster/CreatorsRoster.vue';
import PartnersSection from '@/components/PartnersSection.vue';

const { t } = useI18n();
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative min-h-dvh md:min-h-0 xl:min-h-dvh overflow-hidden">
		<div class="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-8 min-h-dvh md:min-h-0 xl:min-h-dvh grid content-center xl:grid-cols-[1fr_minmax(360px,460px)] items-center gap-10 md:gap-8 xl:gap-16 pt-28 pb-24 md:pt-36 md:pb-16 xl:pt-0 xl:pb-0">
			<!-- Left: text -->
			<div class="text-center relative z-20">
				<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
					{{ t('creatorsRoster.hero.title') }}
				</h1>
				<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
					{{ t('creatorsRoster.hero.sub') }}
				</p>
			</div>

			<!-- Right: image (same slot as the other heroes). Transparent PNG source,
			     served as a 900px WebP; top and bottom edges are faded (see style). -->
			<div v-reveal="3" class="relative z-0 flex items-center justify-center xl:justify-end">
				<div class="absolute w-[380px] h-[380px] md:w-[260px] md:h-[260px] xl:w-[440px] xl:h-[440px] rounded-full bg-[#2a55e5]/15 blur-[90px] pointer-events-none" />
				<img src="/images/page/Xavvi-modelito.webp" alt="" width="900" height="900"
					class="hero-portrait relative w-full max-w-[320px] md:max-w-[260px] xl:max-w-[460px] h-auto" />
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Roster grid
       ═══════════════════════════════════════ -->
	<section class="bg-black py-16 lg:py-20">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<CreatorsRoster :supabase="launchpadSupabase ?? undefined" />
		</div>
	</section>

	<!-- Partners (shared component) -->
	<PartnersSection />
</template>

<style scoped>
/* Soften the image's flat top edge (hair) and fade its cut-off bottom into the dark hero */
.hero-portrait {
	-webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 7%, #000 72%, transparent 100%);
	mask-image: linear-gradient(to bottom, transparent 0%, #000 7%, #000 72%, transparent 100%);
}
</style>
