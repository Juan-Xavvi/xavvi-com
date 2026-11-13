<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import PhoneMockup from '@/components/PhoneMockup.vue';

const { t } = useI18n();

const steps = computed(() => [
	{ label: t('microDramas.how.cast.label'), body: t('microDramas.how.cast.body') },
	{ label: t('microDramas.how.produce.label'), body: t('microDramas.how.produce.body') },
	{ label: t('microDramas.how.monetize.label'), body: t('microDramas.how.monetize.body') },
]);

// Neon colours match the Creators page hero slider labels
const creatorTypes = computed(() => [
	{ image: '/images/page/actors.jpg', label: t('microDramas.stars.actors.label'), desc: t('microDramas.stars.actors.desc'), color: '#00f0ff' },
	{ image: '/images/page/musicians.jpg', label: t('microDramas.stars.musicians.label'), desc: t('microDramas.stars.musicians.desc'), color: '#ff2d55' },
	{ image: '/images/page/influencers.jpg', label: t('microDramas.stars.influencers.label'), desc: t('microDramas.stars.influencers.desc'), color: '#ffe600' },
	{ image: '/images/page/athletes.jpg', label: t('microDramas.stars.athletes.label'), desc: t('microDramas.stars.athletes.desc'), color: '#39ff14' },
]);

const posters = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/page/Poster%20${n}.jpg`);
// Three back-to-back copies so the loop is seamless even on very wide screens;
// the track animates by exactly one copy's width (-33.333%).
const shelf = [0, 1, 2].flatMap((copy) => posters.map((src, i) => ({ src, i, copy })));

function neon(color: string) {
	return { color, textShadow: `0 0 4px ${color}, 0 0 10px ${color}, 0 0 20px ${color}` };
}
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative overflow-hidden">
		<div class="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-8 min-h-dvh grid lg:grid-cols-[1fr_minmax(320px,400px)] items-center gap-10 lg:gap-16 pt-28 pb-24 lg:pt-0 lg:pb-0">
			<!-- Left: text -->
			<div class="text-center relative z-20">
				<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
					{{ t('microDramas.hero.title') }}
				</h1>
				<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
					{{ t('microDramas.hero.sub') }}
				</p>
				<div v-reveal="3" class="mt-12 flex flex-wrap justify-center gap-4 relative z-30">
					<RouterLink to="/creators" class="btn-primary h-12! px-8! text-[15px]!">
						{{ t('microDramas.hero.cta') }}
						<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5.5 7.5h5.5m-2.5-3 3 3-3 3" /></svg>
					</RouterLink>
					<a href="https://launchpad.xavvi.com" target="_blank" rel="noopener" class="btn-ghost border! border-white/30! hover:border-white/60! h-12! px-8! text-[15px]!">
						{{ t('microDramas.hero.ctaApply') }}
					</a>
				</div>
			</div>

			<!-- Right: phone (same markup as HomePage hero) -->
			<div v-reveal="4" class="relative z-0 flex items-center justify-center lg:justify-end">
				<div class="absolute w-[380px] h-[560px] rounded-full bg-[#2a55e5]/10 blur-[90px] pointer-events-none" />
				<div class="relative phone-shadow scale-[1.2]">
					<PhoneMockup />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — How It Works (black) + poster shelf
       ═══════════════════════════════════════ -->
	<section class="bg-black pt-20 lg:pt-24 pb-14 lg:pb-16">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-12 lg:mb-14">
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

		<!-- Poster shelf: phones scroll left in a continuous loop, full width -->
		<div class="mt-10 lg:mt-12 py-4 overflow-hidden" aria-label="Xavvi microdrama posters">
			<div class="poster-track flex w-max">
				<div v-for="p in shelf" :key="`${p.copy}-${p.i}`" :aria-hidden="p.copy > 0 ? 'true' : undefined"
					class="shrink-0 pr-4 sm:pr-6">
					<div class="w-[134px] h-[278px] sm:w-[210px] sm:h-[435px]">
						<div class="origin-top-left scale-50 sm:scale-75 phone-shadow">
							<PhoneMockup>
								<img :src="p.src" :alt="p.copy === 0 ? `Xavvi microdrama poster ${p.i + 1}` : ''" loading="lazy"
									class="absolute inset-0 w-full h-full object-cover" />
							</PhoneMockup>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — Creator types (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-black pt-14 lg:pt-16 pb-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-14 lg:mb-16">
				{{ t('microDramas.stars.title') }}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(type, i) in creatorTypes" :key="type.label" v-reveal="i"
					class="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/8">
					<img :src="type.image" :alt="type.label" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
					<div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" aria-hidden="true" />
					<div class="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-center">
						<p class="font-extrabold text-[22px] lg:text-[24px] tracking-[0.18em] mb-3" :style="neon(type.color)">
							{{ type.label }}
						</p>
						<p class="text-[14px] lg:text-[15px] leading-[1.6] text-[#FFFDF9]/85">
							{{ type.desc }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — For Brands (black, standalone banner)
       ═══════════════════════════════════════ -->
	<section class="bg-black py-22 lg:py-28">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
			<span v-reveal class="block text-[#5b8cff] text-[12px] font-bold tracking-[0.18em] uppercase mb-8">
				{{ t('microDramas.brands.eyebrow') }}
			</span>
			<picture v-reveal="1" class="block rounded-2xl overflow-hidden">
				<source media="(min-width: 768px)" srcset="/images/page/built-4-brands.jpg" />
				<img src="/images/page/built-4-brandsM.jpg" :alt="t('microDramas.brands.title')" class="block w-full h-auto object-cover" />
			</picture>
			<div v-reveal="2" class="mt-10">
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
			<div v-reveal="2" class="flex flex-wrap justify-center gap-4">
				<RouterLink to="/creators" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('microDramas.cta.learnMore') }}
				</RouterLink>
				<a href="https://launchpad.xavvi.com" target="_blank" rel="noopener" class="btn-ghost border! border-white/30! hover:border-white/60! h-12! px-8! text-[15px]!">
					{{ t('microDramas.cta.apply') }}
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
.poster-track {
	animation: poster-scroll 60s linear infinite;
}
@keyframes poster-scroll {
	from { transform: translateX(0); }
	to { transform: translateX(-33.3333%); }
}
@media (prefers-reduced-motion: reduce) {
	.poster-track { animation: none; }
}
</style>
