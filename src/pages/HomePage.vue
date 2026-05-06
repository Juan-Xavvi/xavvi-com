<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GradientBlob from '@/components/GradientBlob.vue';
import PhoneMockup from '@/components/PhoneMockup.vue';
import QrPopover from '@/components/QrPopover.vue';
import StatsCounter from '@/components/StatsCounter.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();

const stats = computed(() => [
	{ target: 50, suffix: 'M+', label: t('home.stats.activeCreators') },
	{ target: 200, suffix: '+', label: t('home.stats.marketsWorldwide') },
	{ target: 10, suffix: 'B+', label: t('home.stats.monthlyViews') },
	{ target: 70, suffix: '%', label: t('home.stats.lowerMarketingCost') },
]);

const ecosystems = computed(() => [
	{
		tag: t('home.eco.card1.tag'),
		title: t('home.eco.card1.title'),
		desc: t('home.eco.card1.desc'),
		image: '/images/page/card1.jpg',
		panelBg: 'bg-gradient-to-br from-[#1a0a3e] to-[#0e1b47]',
		iconGradient: 'from-[#7C3AED] to-[#2a55e5]',
	},
	{
		tag: t('home.eco.card2.tag'),
		title: t('home.eco.card2.title'),
		desc: t('home.eco.card2.desc'),
		image: '/images/page/card2.jpg',
		panelBg: 'bg-gradient-to-br from-[#2a0a14] to-[#1a1005]',
		iconGradient: 'from-[#FE2C55] to-[#F59E0B]',
	},
	{
		tag: t('home.eco.card3.tag'),
		title: t('home.eco.card3.title'),
		desc: t('home.eco.card3.desc'),
		image: '/images/page/card3.jpg',
		panelBg: 'bg-gradient-to-br from-[#041f15] to-[#0a1628]',
		iconGradient: 'from-[#059669] to-[#2a55e5]',
	},
	{
		tag: t('home.eco.card4.tag'),
		title: t('home.eco.card4.title'),
		desc: t('home.eco.card4.desc'),
		image: '/images/page/card4.jpg',
		panelBg: 'bg-gradient-to-br from-[#1a0a3e] to-[#2a0a14]',
		iconGradient: 'from-[#F59E0B] to-[#FE2C55]',
	},
]);

const offices = computed(() => [
	{ city: t('home.offices.losAngeles'), role: t('home.officeRoles.globalHQ'), flag: '🇺🇸' },
	{ city: t('home.offices.london'), role: t('home.officeRoles.emea'), flag: '🇬🇧' },
	{ city: t('home.offices.dubai'), role: t('home.officeRoles.mena'), flag: '🇦🇪' },
	{ city: t('home.offices.singapore'), role: t('home.officeRoles.apac'), flag: '🇸🇬' },
	{ city: t('home.offices.saoPaulo'), role: t('home.officeRoles.latam'), flag: '🇧🇷' },
	{ city: t('home.offices.berlin'), role: t('home.officeRoles.europe'), flag: '🇩🇪' },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       HERO — Left text, right phone
       ═══════════════════════════════════════ -->
	<section class="relative min-h-dvh overflow-hidden">
		<!-- Background glow -->
		<div class="pointer-events-none absolute inset-0">
			<div class="absolute top-[-10%] left-[60%] -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#2a55e5]/12 blur-[120px]" />
		</div>

		<div class="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-8 min-h-dvh grid lg:grid-cols-[1fr_minmax(320px,400px)] items-center gap-10 lg:gap-16 pt-28 pb-24 lg:pt-0 lg:pb-0">
			<!-- Left: text -->
			<div class="text-center lg:text-center relative z-20">
				<h1 v-reveal="1" v-html="t('home.heroTitle', { br: '<br>' })" class="text-[clamp(2.8rem,5.5vw,5.2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white"></h1>
				<p v-reveal="2" class="mt-9 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[600px] mx-auto lg:mx-auto">
					{{ t('home.heroSub') }}
				</p>
				<div v-reveal="3" class="mt-12 flex flex-wrap justify-center gap-4 relative z-30">
					<RouterLink to="/about" class="btn-primary h-12! px-7! text-[15px]!">
						{{ t('home.learnMore') }}
						<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5.5 7.5h5.5m-2.5-3 3 3-3 3" /></svg>
					</RouterLink>
					<QrPopover>
						<button class="btn-ghost h-12! px-7! text-[15px]! cursor-pointer">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
							{{ t('home.getTheApp') }}
						</button>
					</QrPopover>
				</div>
			</div>

			<!-- Right: phone -->
			<div v-reveal="4" class="relative z-0 flex items-center justify-center lg:justify-end">
				<div class="absolute w-[380px] h-[560px] rounded-full bg-[#2a55e5]/10 blur-[90px] pointer-events-none" />
				<div class="relative phone-shadow scale-[1.2]">
					<PhoneMockup />
				</div>
			</div>
		</div>

		<!-- Wave transition -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[90px]">
			<svg viewBox="0 0 1440 110" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,70 C300,100 600,35 900,60 C1140,78 1320,95 1440,50 L1440,110 L0,110 Z" fill="#f4f5f8" opacity="0.5"/>
			</svg>
		</div>
		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[70px]">
			<svg viewBox="0 0 1440 90" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,50 C200,80 500,25 800,45 C1050,60 1300,85 1440,40 L1440,90 L0,90 Z" fill="#f4f5f8"/>
			</svg>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       NEWS TEASER
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] pt-10 lg:pt-14 pb-2 lg:pb-4">
		<div class="max-w-[800px] mx-auto px-6">
			<div v-reveal class="bg-[#FFFCF3] border border-[#212226] rounded-2xl px-6 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
				<span class="text-[#FE2C55] font-extrabold text-[18px] tracking-[0.12em]">NEWS</span>
				<div class="hidden lg:block w-px self-stretch bg-[#212226]" aria-hidden="true"></div>
				<p class="text-[#212226] text-[15px] lg:text-[17px] leading-snug flex-1 text-center lg:text-left">
					Xavvi Launches Creator Token Ecosystem
				</p>
				<RouterLink to="/news" aria-label="Read news"
					class="w-10 h-10 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFCF3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M13 5l7 7-7 7" />
					</svg>
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       ECOSYSTEM — Alternating cards (LIGHT)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<SectionHeader :dark="false" :title="t('home.pillarsTitle')" :subtitle="t('home.pillarsSub')" />

			<div class="mt-12 lg:mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
				<div v-reveal class="rounded-2xl overflow-hidden w-[280px] sm:w-[300px] lg:w-[340px] lg:rotate-[3deg]">
					<img src="/images/page/Brand-Lab.png" alt="Brand Lab screenshot" class="block w-full h-auto object-contain" />
				</div>
				<div v-reveal="1" class="rounded-2xl overflow-hidden w-[260px] sm:w-[280px] lg:w-[310px] lg:-rotate-[3deg]">
					<img src="/images/page/Xavvi-App.png" alt="Xavvi App screenshot" class="block w-full h-auto object-contain" />
				</div>
			</div>

			<div class="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div v-for="(eco, i) in ecosystems" :key="i" v-reveal="i"
					class="card-light rounded-2xl! overflow-hidden flex flex-col">
					<div :class="['relative aspect-[4/3] overflow-hidden', eco.panelBg]">
						<img :src="eco.image" :alt="eco.title" class="w-full h-full object-cover" />
					</div>
					<div class="p-8 lg:p-10 flex-1 flex flex-col">
						<div class="inline-flex items-center gap-2 mb-5">
							<div
								:class="['w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center', eco.iconGradient]">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
									<path d="M8 20V4l14 8-14 8z" fill="white" />
								</svg>
							</div>
							<span class="text-[16px] font-semibold text-text-2 tracking-wider uppercase">
								{{ eco.tag }}
							</span>
						</div>
						<h3
							class="text-[clamp(1.4rem,2.5vw,1.85rem)] font-bold text-text leading-snug tracking-tight mb-3">
							{{ eco.title }}
						</h3>
						<p class="text-[15px] leading-[1.7] text-text-2">
							{{ eco.desc }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       MISS CRYPTO 2026
       ═══════════════════════════════════════ -->
	<section class="bg-black py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
				<!-- Text -->
				<div v-reveal class="flex flex-col justify-center">
					<h2 class="text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#FFFCF3] leading-tight tracking-tight mb-6">
						{{ t('home.missCrypto.title') }}
					</h2>
					<p class="text-[15px] lg:text-[16px] leading-[1.75] text-[#FFFCF3] mb-5">
						{{ t('home.missCrypto.p1') }}
					</p>
					<p class="text-[15px] lg:text-[16px] leading-[1.75] text-[#FFFCF3] mb-5">
						{{ t('home.missCrypto.p2') }}
					</p>
					<p class="text-[15px] lg:text-[16px] leading-[1.75] text-[#FFFCF3] font-semibold mb-8">
						{{ t('home.missCrypto.p3') }}
					</p>
					<div>
						<a href="https://misscrypto.xavvi.com" target="_blank" rel="noopener"
							class="btn-primary h-12! px-8! text-[15px]! tracking-wider">
							{{ t('home.missCrypto.cta') }}
						</a>
					</div>
				</div>

				<!-- Image -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[600px] shadow-[0_0_40px_10px_rgba(212,175,55,0.4)]">
					<img src="/images/page/miss-crypto.jpg" alt="Miss Crypto 2026"
						class="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       CTA — Gradient background
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-28 lg:py-36 relative overflow-hidden text-center">
		<div class="relative z-10 mx-auto px-6">
			<h2 v-reveal class="text-6xl font-black text-black">
				{{ t('home.ctaTitle') }}
			</h2>
			<p v-reveal="1" class="mt-5 text-[clamp(1rem,1.5vw,1.1rem)] text-text leading-[1.7]">
				{{ t('home.ctaSub') }}
			</p>
			<div v-reveal="2" class="mt-10 flex flex-wrap justify-center gap-4">
				<QrPopover>
					<button class="btn-primary h-12! px-8! text-[16px]! cursor-pointer">
						{{ t('home.ctaDownload') }}
					</button>
				</QrPopover>
				<a href="https://social.xavvi.com" target="_blank" class="btn-ghost bg-black! text-white! h-12! px-8! text-[16px]!">
					{{ t('home.ctaWebApp') }}
				</a>
			</div>
		</div>
	</section>
</template>
