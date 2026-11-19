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
	<section class="hero-dark relative overflow-hidden">
		<div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20 text-center">
			<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
				{{ t('creatorsRoster.hero.title') }}
			</h1>
			<p v-reveal="2" class="mt-6 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
				{{ t('creatorsRoster.hero.sub') }}
			</p>
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
