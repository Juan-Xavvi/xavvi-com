<script setup lang="ts">
import { computed, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();

// The router's scrollBehavior does not fire on the very first navigation, so a
// cold load of /brands#globe365 (pasted URL, bookmark, external link) would open
// at the top. Handle the hash here once the page — and its images — have settled.
onMounted(() => {
	const hash = route.hash;
	if (!hash) return;

	const scrollToHash = () => {
		const el = document.querySelector(hash);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	nextTick(() => {
		if (document.readyState === 'complete') {
			setTimeout(scrollToHash, 120);
		} else {
			window.addEventListener('load', () => setTimeout(scrollToHash, 120), { once: true });
		}
	});
});

const globeDays = computed(() => [
	{ label: t('brands.globe365.days.d1Label'), text: t('brands.globe365.days.d1Text') },
	{ label: t('brands.globe365.days.d2Label'), text: t('brands.globe365.days.d2Text') },
	{ label: t('brands.globe365.days.d3Label'), text: t('brands.globe365.days.d3Text') },
	{ label: t('brands.globe365.days.d4Label'), text: t('brands.globe365.days.d4Text') },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero
       ═══════════════════════════════════════ -->
	<section class="hero-dark pt-32 pb-20 lg:pt-36 lg:pb-28">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: text -->
				<div v-reveal>
					<h1 class="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[#FFFDF9] mb-8">
						{{ t('brands.hero.title') }}
					</h1>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-5">
						{{ t('brands.hero.p1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]">
						{{ t('brands.hero.p2') }}
					</p>
				</div>
				<!-- Right: image -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden">
					<img src="/images/page/brands-hero.jpg" alt="" width="1448" height="1086" class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       GLOBE 365
       ═══════════════════════════════════════ -->
	<section id="globe365" class="bg-[#FFFDF9] py-22 scroll-mt-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
				<!-- Left: text -->
				<div v-reveal>
					<h2 class="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold text-[#212226] leading-tight tracking-tight mb-6">
						{{ t('brands.globe365.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
						{{ t('brands.globe365.intro1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-8">
						{{ t('brands.globe365.intro2') }}
					</p>

					<!-- 10-day itinerary -->
					<div class="flex flex-col gap-4 mb-8">
						<div v-for="day in globeDays" :key="day.label"
							class="rounded-2xl border border-[#212226]/10 bg-white px-6 py-5">
							<p class="text-[15px] lg:text-[16px] font-bold text-[#AE2049] mb-2">
								{{ day.label }}
							</p>
							<p class="text-[15px] leading-[1.7] text-text-2">
								{{ day.text }}
							</p>
						</div>
					</div>

					<div>
						<a href="https://opc.xavvi.com/globe-365" target="_blank" rel="noopener"
							class="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#AE2049] text-white font-semibold text-[15px] tracking-wider hover:opacity-90 transition-opacity">
							{{ t('brands.globe365.cta') }}
						</a>
					</div>
				</div>

				<!-- Right: image -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden lg:sticky lg:top-28">
					<img src="/images/page/Globe-365.jpg" :alt="t('brands.globe365.title')"
						width="1024" height="1024" class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Brand Lab
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: image -->
				<div v-reveal class="rounded-2xl overflow-hidden lg:order-1 order-2">
					<img src="/images/page/bl-ads.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
				<!-- Right: text -->
				<div v-reveal="1" class="lg:order-2 order-1">
					<span class="block text-[#FE2C55] text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
						{{ t('brands.brandLab.eyebrow') }}
					</span>
					<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight mb-6">
						{{ t('brands.brandLab.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
						{{ t('brands.brandLab.p1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
						{{ t('brands.brandLab.p2') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
						{{ t('brands.brandLab.p3') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — AI
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: text -->
				<div v-reveal>
					<span class="block text-[#FE2C55] text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
						{{ t('brands.ai.eyebrow') }}
					</span>
					<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight mb-6">
						{{ t('brands.ai.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-5">
						{{ t('brands.ai.p1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-5">
						{{ t('brands.ai.p2') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]">
						{{ t('brands.ai.p3') }}
					</p>
				</div>
				<!-- Right: image -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden">
					<img src="/images/page/muaitai.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Tokenization
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: image -->
				<div v-reveal class="rounded-2xl overflow-hidden lg:order-1 order-2">
					<img src="/images/page/tokenisation.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
				<!-- Right: text -->
				<div v-reveal="1" class="lg:order-2 order-1">
					<span class="block text-[#FE2C55] text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
						{{ t('brands.tokenization.eyebrow') }}
					</span>
					<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight mb-6">
						{{ t('brands.tokenization.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
						{{ t('brands.tokenization.p1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
						{{ t('brands.tokenization.p2') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
						{{ t('brands.tokenization.p3') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — CTA
       ═══════════════════════════════════════ -->
	<section class="bg-[#212226] py-22 lg:py-24">
		<div class="max-w-[700px] mx-auto px-6 text-center">
			<h2 v-reveal class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight mb-6">
				{{ t('brands.cta.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-10">
				{{ t('brands.cta.body') }}
			</p>
			<div v-reveal="2">
				<RouterLink to="/contact"
					class="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#FE2C55] hover:bg-[#EF2950] text-[#FFFDF9] font-semibold text-[15px] tracking-wider transition-colors">
					{{ t('brands.cta.btn') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
