<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const steps = computed(() => [
	{ label: t('microDramas.how.cast.label'), body: t('microDramas.how.cast.body') },
	{ label: t('microDramas.how.produce.label'), body: t('microDramas.how.produce.body') },
	{ label: t('microDramas.how.monetize.label'), body: t('microDramas.how.monetize.body') },
]);

// Neon colours match the Creators page hero slider labels
const creatorTypes = computed(() => [
	{ emoji: '🎬', label: t('microDramas.stars.actors.label'), desc: t('microDramas.stars.actors.desc'), color: '#00f0ff' },
	{ emoji: '🎵', label: t('microDramas.stars.musicians.label'), desc: t('microDramas.stars.musicians.desc'), color: '#ff2d55' },
	{ emoji: '📱', label: t('microDramas.stars.influencers.label'), desc: t('microDramas.stars.influencers.desc'), color: '#ffe600' },
	{ emoji: '🏆', label: t('microDramas.stars.athletes.label'), desc: t('microDramas.stars.athletes.desc'), color: '#39ff14' },
]);

function neon(color: string) {
	return { color, textShadow: `0 0 4px ${color}, 0 0 10px ${color}, 0 0 20px ${color}` };
}
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
		<div class="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
			<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
				{{ t('microDramas.hero.title') }}
			</h1>
			<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
				{{ t('microDramas.hero.sub') }}
			</p>
			<div v-reveal="3" class="mt-12 flex justify-center">
				<RouterLink to="/creators" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('microDramas.hero.cta') }}
					<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5.5 7.5h5.5m-2.5-3 3 3-3 3" /></svg>
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — How It Works (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-14">
				{{ t('microDramas.how.title') }}
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div v-for="(step, i) in steps" :key="step.label" v-reveal="i"
					class="card-light shadow-sm p-8 lg:p-10 flex flex-col">
					<span class="text-[40px] font-extrabold leading-none text-[#FE2C55]/20 mb-6">0{{ i + 1 }}</span>
					<span class="inline-block self-start px-4 py-1.5 rounded-full bg-[#FE2C55] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em] mb-5">
						{{ step.label }}
					</span>
					<p class="text-[15px] text-text-2 leading-[1.7]">
						{{ step.body }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — Creator types (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-14 lg:mb-16">
				{{ t('microDramas.stars.title') }}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(type, i) in creatorTypes" :key="type.label" v-reveal="i"
					class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col items-center text-center">
					<span class="text-[44px] leading-none mb-5" aria-hidden="true">{{ type.emoji }}</span>
					<p class="font-extrabold text-[22px] lg:text-[24px] tracking-[0.18em] mb-4" :style="neon(type.color)">
						{{ type.label }}
					</p>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFDF9]/80">
						{{ type.desc }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — For Brands (dark, blue accent)
       ═══════════════════════════════════════ -->
	<section class="relative overflow-hidden bg-[#0F0537] py-22 lg:py-28">
		<div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#2a55e5]/25 blur-[120px] pointer-events-none" aria-hidden="true" />
		<div class="relative z-10 max-w-[820px] mx-auto px-6 lg:px-8 text-center">
			<span v-reveal class="block text-[#5b8cff] text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
				{{ t('microDramas.brands.eyebrow') }}
			</span>
			<h2 v-reveal="1" class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-6">
				{{ t('microDramas.brands.title') }}
			</h2>
			<p v-reveal="2" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/80 mb-10">
				{{ t('microDramas.brands.body') }}
			</p>
			<div v-reveal="3">
				<RouterLink to="/contact" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('microDramas.brands.cta') }}
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — CTA strip (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-20 lg:py-24 border-t border-white/5">
		<div class="max-w-[820px] mx-auto px-6 lg:px-8 text-center">
			<h2 v-reveal class="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-4">
				{{ t('microDramas.cta.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/70 mb-10">
				{{ t('microDramas.cta.sub') }}
			</p>
			<div v-reveal="2">
				<RouterLink to="/creators" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('microDramas.cta.button') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
