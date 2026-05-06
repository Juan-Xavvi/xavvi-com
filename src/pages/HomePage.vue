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
		tag: t('home.eco.brandLab.tag'),
		title: t('home.eco.brandLab.title'),
		desc: t('home.eco.brandLab.desc'),
		link: '/brands',
		linkText: t('home.eco.brandLab.link'),
		panelBg: 'bg-gradient-to-br from-[#1a0a3e] to-[#0e1b47]',
		iconGradient: 'from-[#7C3AED] to-[#2a55e5]',
	},
	{
		tag: t('home.eco.forBusiness.tag'),
		title: t('home.eco.forBusiness.title'),
		desc: t('home.eco.forBusiness.desc'),
		link: '/business',
		linkText: t('home.eco.forBusiness.link'),
		panelBg: 'bg-gradient-to-br from-[#2a0a14] to-[#1a1005]',
		iconGradient: 'from-[#FE2C55] to-[#F59E0B]',
	},
	{
		tag: t('home.eco.creatorEconomy.tag'),
		title: t('home.eco.creatorEconomy.title'),
		desc: t('home.eco.creatorEconomy.desc'),
		link: '/about',
		linkText: t('home.eco.creatorEconomy.link'),
		panelBg: 'bg-gradient-to-br from-[#041f15] to-[#0a1628]',
		iconGradient: 'from-[#059669] to-[#2a55e5]',
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
				<div v-reveal="3" class="mt-12 flex flex-wrap justify-center gap-4">
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
			<div v-reveal="4" class="relative flex items-center justify-center lg:justify-end">
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
       ECOSYSTEM — Alternating cards (LIGHT)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<SectionHeader :dark="false" :title="t('home.pillarsTitle')" :subtitle="t('home.pillarsSub')" />

			<div class="mt-12 lg:mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
				<div v-reveal class="rounded-2xl overflow-hidden shadow-xl bg-white w-[280px] sm:w-[300px] lg:w-[340px] lg:rotate-[3deg]">
					<img src="/images/page/Brand-Lab.jpg" alt="Brand Lab screenshot" class="block w-full h-auto object-contain" />
				</div>
				<div v-reveal="1" class="rounded-2xl overflow-hidden shadow-xl bg-white w-[280px] sm:w-[300px] lg:w-[340px] lg:-rotate-[3deg]">
					<img src="/images/page/Xavvi-App.jpg" alt="Xavvi App screenshot" class="block w-full h-auto object-contain" />
				</div>
			</div>

			<div class="mt-12 lg:mt-16 space-y-6">
				<div v-for="(eco, i) in ecosystems" :key="i" v-reveal="i"
					class="card-light rounded-2xl! overflow-hidden">
					<div class="grid lg:grid-cols-2 gap-0">
						<div class="p-8 lg:p-12 flex flex-col justify-center" :class="i % 2 === 1 ? 'lg:order-2' : ''">
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
							<p class="text-[15px] leading-[1.7] text-text-2 max-w-[420px]">
								{{ eco.desc }}
							</p>
							<RouterLink :to="eco.link"
								class="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#FE2C55] hover:text-[#EF2950] transition-colors group">
								{{ eco.linkText }}
								<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
									stroke-linecap="round" class="transition-transform group-hover:translate-x-1">
									<path d="M5 7h5m-2-2.5 2.5 2.5-2.5 2.5" />
								</svg>
							</RouterLink>
						</div>
						<div
							:class="['relative min-h-[280px] lg:min-h-[360px] overflow-hidden', eco.panelBg, i % 2 === 1 ? 'lg:order-1' : '']">
							<!-- Brand Lab: Product dashboard -->
							<div v-if="i === 0" class="absolute inset-4 flex items-center justify-center">
								<svg viewBox="0 0 320 240" class="w-full max-w-[280px] opacity-90" fill="none">
									<rect x="0" y="0" width="320" height="240" rx="12" fill="white" opacity="0.05"
										stroke="white" stroke-opacity="0.1" />
									<rect x="16" y="16" width="180" height="24" rx="6" fill="white" opacity="0.06" />
									<rect x="24" y="22" width="60" height="12" rx="3" fill="#7C3AED" opacity="0.5" />
									<rect x="90" y="22" width="40" height="12" rx="3" fill="white" opacity="0.08" />
									<rect x="136" y="22" width="40" height="12" rx="3" fill="white" opacity="0.08" />
									<rect x="16" y="56" width="140" height="80" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<path d="M32 120 L52 100 L72 108 L92 88 L112 96 L132 76 L140 80" stroke="#7C3AED"
										stroke-width="2" stroke-linecap="round" fill="none" />
									<path d="M32 120 L52 100 L72 108 L92 88 L112 96 L132 76 L140 80 L140 120 L32 120Z"
										fill="url(#eco-chart-fill)" opacity="0.3" />
									<defs>
										<linearGradient id="eco-chart-fill" x1="0" y1="0" x2="0" y2="1">
											<stop offset="0%" stop-color="#7C3AED" />
											<stop offset="100%" stop-color="transparent" />
										</linearGradient>
									</defs>
									<rect x="172" y="56" width="132" height="36" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="184" y="70" fill="white" opacity="0.3" font-size="8"
										font-family="Inter">Revenue</text>
									<text x="184" y="84" fill="white" opacity="0.7" font-size="14" font-weight="bold"
										font-family="Inter">$2.4M</text>
									<rect x="172" y="100" width="132" height="36" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="184" y="114" fill="white" opacity="0.3" font-size="8"
										font-family="Inter">Products</text>
									<text x="184" y="128" fill="white" opacity="0.7" font-size="14" font-weight="bold"
										font-family="Inter">128 SKUs</text>
									<rect x="16" y="152" width="288" height="72" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<circle cx="48" cy="188" r="20" fill="none" stroke="#7C3AED" stroke-width="3"
										stroke-dasharray="100" stroke-dashoffset="25" opacity="0.6" />
									<circle cx="48" cy="188" r="20" fill="none" stroke="white" stroke-width="3"
										stroke-dasharray="100" stroke-dashoffset="75" opacity="0.1" />
									<rect x="84" y="172" width="60" height="8" rx="2" fill="white" opacity="0.15" />
									<rect x="84" y="186" width="100" height="6" rx="2" fill="white" opacity="0.08" />
									<rect x="84" y="198" width="80" height="6" rx="2" fill="white" opacity="0.06" />
									<rect x="220" y="178" width="64" height="24" rx="12" fill="#7C3AED" opacity="0.3" />
									<text x="252" y="194" fill="white" opacity="0.6" font-size="9" font-weight="600"
										font-family="Inter" text-anchor="middle">Launch</text>
								</svg>
							</div>
							<!-- For Business: Ad analytics -->
							<div v-else-if="i === 1" class="absolute inset-4 flex items-center justify-center">
								<svg viewBox="0 0 320 240" class="w-full max-w-[280px] opacity-90" fill="none">
									<rect x="0" y="0" width="320" height="240" rx="12" fill="white" opacity="0.05"
										stroke="white" stroke-opacity="0.1" />
									<rect x="16" y="16" width="120" height="10" rx="3" fill="white" opacity="0.12" />
									<rect x="220" y="14" width="84" height="14" rx="7" fill="#FE2C55" opacity="0.3" />
									<text x="262" y="24" fill="white" opacity="0.6" font-size="8" font-weight="600"
										font-family="Inter" text-anchor="middle">Live</text>
									<rect x="16" y="42" width="68" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="50" y="62" fill="white" opacity="0.3" font-size="8" font-family="Inter"
										text-anchor="middle">Impressions</text>
									<text x="50" y="82" fill="#FE2C55" opacity="0.8" font-size="16" font-weight="bold"
										font-family="Inter" text-anchor="middle">4.2M</text>
									<rect x="92" y="42" width="68" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="126" y="62" fill="white" opacity="0.3" font-size="8" font-family="Inter"
										text-anchor="middle">CTR</text>
									<text x="126" y="82" fill="#F59E0B" opacity="0.8" font-size="16" font-weight="bold"
										font-family="Inter" text-anchor="middle">8.7%</text>
									<rect x="168" y="42" width="68" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="202" y="62" fill="white" opacity="0.3" font-size="8" font-family="Inter"
										text-anchor="middle">ROAS</text>
									<text x="202" y="82" fill="#059669" opacity="0.8" font-size="16" font-weight="bold"
										font-family="Inter" text-anchor="middle">4.8×</text>
									<rect x="244" y="42" width="60" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="274" y="62" fill="white" opacity="0.3" font-size="8" font-family="Inter"
										text-anchor="middle">Conv.</text>
									<text x="274" y="82" fill="#2a55e5" opacity="0.8" font-size="16" font-weight="bold"
										font-family="Inter" text-anchor="middle">12K</text>
									<rect x="16" y="114" width="288" height="110" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<line x1="16" y1="168" x2="304" y2="168" stroke="white" stroke-opacity="0.06"
										stroke-dasharray="4" />
									<line x1="16" y1="140" x2="304" y2="140" stroke="white" stroke-opacity="0.04"
										stroke-dasharray="4" />
									<path
										d="M32 200 L62 185 L92 190 L122 170 L152 165 L182 155 L212 148 L242 135 L272 125 L288 130"
										stroke="#FE2C55" stroke-width="2" stroke-linecap="round" fill="none" />
									<path
										d="M32 200 L62 195 L92 192 L122 188 L152 182 L182 178 L212 172 L242 170 L272 168 L288 165"
										stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"
										stroke-dasharray="4 2" fill="none" opacity="0.6" />
									<circle cx="212" cy="148" r="3" fill="#FE2C55" />
									<rect x="200" y="132" width="36" height="14" rx="4" fill="#FE2C55" opacity="0.9" />
									<text x="218" y="142" fill="white" font-size="7" font-weight="600"
										font-family="Inter" text-anchor="middle">+23%</text>
								</svg>
							</div>
							<!-- Creator Economy: Monetization dashboard -->
							<div v-else class="absolute inset-4 flex items-center justify-center">
								<svg viewBox="0 0 320 240" class="w-full max-w-[280px] opacity-90" fill="none">
									<rect x="0" y="0" width="320" height="240" rx="12" fill="white" opacity="0.05"
										stroke="white" stroke-opacity="0.1" />
									<rect x="16" y="16" width="288" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<circle cx="48" cy="44" r="18" fill="white" opacity="0.08" />
									<circle cx="48" cy="38" r="6" fill="white" opacity="0.2" />
									<ellipse cx="48" cy="52" rx="9" ry="6" fill="white" opacity="0.15" />
									<rect x="76" y="32" width="80" height="10" rx="3" fill="white" opacity="0.15" />
									<rect x="76" y="48" width="50" height="7" rx="2" fill="white" opacity="0.08" />
									<rect x="230" y="34" width="58" height="20" rx="10" fill="#059669" opacity="0.3" />
									<text x="259" y="48" fill="white" opacity="0.6" font-size="8" font-weight="600"
										font-family="Inter" text-anchor="middle">$12,840</text>
									<rect x="16" y="88" width="140" height="64" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="28" y="106" fill="white" opacity="0.3" font-size="8"
										font-family="Inter">Monthly Earnings</text>
									<text x="28" y="126" fill="white" opacity="0.7" font-size="18" font-weight="bold"
										font-family="Inter">$12,840</text>
									<text x="100" y="126" fill="#059669" opacity="0.7" font-size="9"
										font-family="Inter">↑ 34%</text>
									<rect x="28" y="136" width="116" height="4" rx="2" fill="white" opacity="0.08" />
									<rect x="28" y="136" width="80" height="4" rx="2" fill="#059669" opacity="0.4" />
									<rect x="172" y="88" width="132" height="64" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="184" y="106" fill="white" opacity="0.3" font-size="8"
										font-family="Inter">Audience</text>
									<text x="184" y="126" fill="white" opacity="0.7" font-size="18" font-weight="bold"
										font-family="Inter">847K</text>
									<text x="232" y="126" fill="#2a55e5" opacity="0.7" font-size="9"
										font-family="Inter">↑ 12%</text>
									<rect x="184" y="136" width="108" height="4" rx="2" fill="white" opacity="0.08" />
									<rect x="184" y="136" width="68" height="4" rx="2" fill="#2a55e5" opacity="0.4" />
									<rect x="16" y="168" width="288" height="56" rx="8" fill="white" opacity="0.04"
										stroke="white" stroke-opacity="0.08" />
									<text x="28" y="186" fill="white" opacity="0.3" font-size="8"
										font-family="Inter">Revenue Streams</text>
									<rect x="28" y="196" width="60" height="18" rx="4" fill="#059669" opacity="0.2" />
									<text x="58" y="209" fill="white" opacity="0.5" font-size="7" font-family="Inter"
										text-anchor="middle">Tips 38%</text>
									<rect x="94" y="196" width="68" height="18" rx="4" fill="#2a55e5" opacity="0.2" />
									<text x="128" y="209" fill="white" opacity="0.5" font-size="7" font-family="Inter"
										text-anchor="middle">Brands 42%</text>
									<rect x="168" y="196" width="52" height="18" rx="4" fill="#7C3AED" opacity="0.2" />
									<text x="194" y="209" fill="white" opacity="0.5" font-size="7" font-family="Inter"
										text-anchor="middle">Ads 20%</text>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       GLOBAL — World presence
       ═══════════════════════════════════════ -->
	<section class="bg-gradient-subtle py-22 relative overflow-hidden">
		<GradientBlob :size="700" top="20%" left="50%" color1="#2a55e5" color2="#059669" delay="0s" />

		<div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
			<SectionHeader :title="t('home.globalTitle')" :subtitle="t('home.globalSub')" />

			<div v-reveal class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
				<div v-for="(office, i) in offices" :key="i" class="card-dark rounded-xl! p-5 text-center">
					<div class="text-[28px] mb-2">{{ office.flag }}</div>
					<h3 class="text-[14px] font-bold text-white">{{ office.city }}</h3>
					<p class="text-[12px] text-text-light-2 mt-0.5">{{ office.role }}</p>
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
