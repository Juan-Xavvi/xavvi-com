<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const packs = computed(() => [
	{ title: t('videoPacks.packs.shoppable.title'), pill: t('videoPacks.packs.shoppable.pill'), body: t('videoPacks.packs.shoppable.body'), price: t('videoPacks.packs.shoppable.price') },
	{ title: t('videoPacks.packs.brand.title'), pill: t('videoPacks.packs.brand.pill'), body: t('videoPacks.packs.brand.body'), price: t('videoPacks.packs.brand.price') },
]);

const steps = computed(() => [
	{ label: t('videoPacks.how.brief.label'), body: t('videoPacks.how.brief.body') },
	{ label: t('videoPacks.how.match.label'), body: t('videoPacks.how.match.body') },
	{ label: t('videoPacks.how.produce.label'), body: t('videoPacks.how.produce.body') },
	{ label: t('videoPacks.how.deliver.label'), body: t('videoPacks.how.deliver.body') },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
		<div class="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
			<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
				{{ t('videoPacks.hero.title') }}
			</h1>
			<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
				{{ t('videoPacks.hero.sub') }}
			</p>
			<div v-reveal="3" class="mt-12 flex justify-center">
				<RouterLink to="/contact" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('videoPacks.hero.cta') }}
					<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5.5 7.5h5.5m-2.5-3 3 3-3 3" /></svg>
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Pack options (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1100px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-14">
				{{ t('videoPacks.packs.title') }}
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div v-for="(pack, i) in packs" :key="pack.title" v-reveal="i"
					class="card-light shadow-sm p-8 lg:p-10 flex flex-col">
					<span class="inline-block self-start px-4 py-1.5 rounded-full bg-[#FE2C55] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em] mb-5">
						{{ pack.pill }}
					</span>
					<h3 class="text-[20px] lg:text-[22px] font-bold text-text mb-4 leading-snug">
						{{ pack.title }}
					</h3>
					<p class="text-[15px] text-text-2 leading-[1.7] flex-1">
						{{ pack.body }}
					</p>
					<p class="mt-8 pt-6 border-t border-[#212226]/10 text-[16px] font-semibold text-[#212226]">
						{{ pack.price }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — How It Works (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-14 lg:mb-16">
				{{ t('videoPacks.how.title') }}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(step, i) in steps" :key="step.label" v-reveal="i"
					class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col">
					<span class="text-[40px] font-extrabold leading-none text-[#FE2C55]/30 mb-6">0{{ i + 1 }}</span>
					<span class="inline-block self-start px-4 py-1.5 rounded-full bg-[#FE2C55] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em] mb-5">
						{{ step.label }}
					</span>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFDF9]/80">
						{{ step.body }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Creator optional (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[820px] mx-auto px-6 lg:px-8 text-center">
			<h2 v-reveal class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight tracking-tight mb-6">
				{{ t('videoPacks.creator.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
				{{ t('videoPacks.creator.body') }}
			</p>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — CTA strip (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-20 lg:py-24">
		<div class="max-w-[820px] mx-auto px-6 lg:px-8 text-center">
			<h2 v-reveal class="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-4">
				{{ t('videoPacks.cta.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/70 mb-10">
				{{ t('videoPacks.cta.sub') }}
			</p>
			<div v-reveal="2">
				<RouterLink to="/contact" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('videoPacks.cta.button') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
