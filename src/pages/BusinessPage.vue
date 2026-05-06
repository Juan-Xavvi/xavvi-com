<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GradientBlob from '@/components/GradientBlob.vue';

const { t } = useI18n();

const kpis = computed(() => [
	{ value: t('business.kpis.k1.value'), label: t('business.kpis.k1.label') },
	{ value: t('business.kpis.k2.value'), label: t('business.kpis.k2.label') },
	{ value: t('business.kpis.k3.value'), label: t('business.kpis.k3.label') },
	{ value: t('business.kpis.k4.value'), label: t('business.kpis.k4.label') },
]);

const adFormats = computed(() => [
	{
		num: t('business.adFormats.f1.num'),
		title: t('business.adFormats.f1.title'),
		desc: t('business.adFormats.f1.desc'),
		highlight: t('business.adFormats.f1.highlight'),
		color: '#2a55e5',
	},
	{
		num: t('business.adFormats.f2.num'),
		title: t('business.adFormats.f2.title'),
		desc: t('business.adFormats.f2.desc'),
		highlight: t('business.adFormats.f2.highlight'),
		color: '#7C3AED',
	},
	{
		num: t('business.adFormats.f3.num'),
		title: t('business.adFormats.f3.title'),
		desc: t('business.adFormats.f3.desc'),
		highlight: t('business.adFormats.f3.highlight'),
		color: '#FE2C55',
	},
	{
		num: t('business.adFormats.f4.num'),
		title: t('business.adFormats.f4.title'),
		desc: t('business.adFormats.f4.desc'),
		highlight: t('business.adFormats.f4.highlight'),
		color: '#059669',
	},
]);

const workflow = computed(() => [
	{ step: '01', title: t('business.workflow.s1.title'), desc: t('business.workflow.s1.desc') },
	{ step: '02', title: t('business.workflow.s2.title'), desc: t('business.workflow.s2.desc') },
	{ step: '03', title: t('business.workflow.s3.title'), desc: t('business.workflow.s3.desc') },
]);

const enterpriseIcons = [
	'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
	'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
	'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
	'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
] as const;

const enterprise = computed(() => [
	{
		title: t('business.tools.selfServe.title'),
		desc: t('business.tools.selfServe.desc'),
		icon: enterpriseIcons[0],
	},
	{
		title: t('business.tools.managed.title'),
		desc: t('business.tools.managed.desc'),
		icon: enterpriseIcons[1],
	},
	{
		title: t('business.tools.marketplace.title'),
		desc: t('business.tools.marketplace.desc'),
		icon: enterpriseIcons[2],
	},
	{
		title: t('business.tools.api.title'),
		desc: t('business.tools.api.desc'),
		icon: enterpriseIcons[3],
	},
]);
</script>

<template>
	<!-- ═══ HERO — Centered with large dashboard visual ═══ -->
	<section class="relative bg-dark min-h-[85dvh] flex flex-col items-center justify-center overflow-hidden">
		<GradientBlob :size="800" top="-15%" left="50%" color1="#2a55e5" color2="#7c3aed" />

		<div class="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 pt-22 pb-8 text-center">
			<h1 v-reveal="1" v-html="t('business.heroTitle', { br: '<br>' })"
				class="text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.04em] max-w-[1400px] mx-auto text-white">
			</h1>
			<p v-reveal="2"
				class="mt-6 text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-white/70 max-w-[640px] mx-auto">
				{{ t('business.heroSub') }}
			</p>
			<div v-reveal="3" class="mt-9 flex flex-wrap justify-center gap-4 mb-10">
				<a href="https://ad.xavvi.com" target="_blank" class="btn-primary">{{ t('business.startAdvertising') }}</a>
				<a href="mailto:business@xavvi.com" class="btn-ghost">{{ t('business.contactSales') }}</a>
			</div>
		</div>

		<!-- Dashboard mockup -->
		<div v-reveal="4" class="relative z-10 w-full max-w-[960px] mx-auto px-6 pb-16">
			<div
				class="rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm p-4 lg:p-6 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
				<svg viewBox="0 0 900 320" class="w-full" fill="none">
					<!-- Top bar -->
					<rect x="0" y="0" width="900" height="40" rx="8" fill="white" opacity="0.04" />
					<circle cx="20" cy="20" r="5" fill="#FE2C55" opacity="0.6" />
					<circle cx="38" cy="20" r="5" fill="#F59E0B" opacity="0.6" />
					<circle cx="56" cy="20" r="5" fill="#059669" opacity="0.6" />
					<rect x="340" y="12" width="220" height="16" rx="8" fill="white" opacity="0.06" />
					<rect x="350" y="16" width="60" height="8" rx="4" fill="#2a55e5" opacity="0.5" />
					<rect x="416" y="16" width="50" height="8" rx="4" fill="white" opacity="0.08" />
					<rect x="472" y="16" width="50" height="8" rx="4" fill="white" opacity="0.08" />

					<!-- KPI Cards row -->
					<rect x="16" y="56" width="208" height="72" rx="10" fill="white" opacity="0.04" stroke="white"
						stroke-opacity="0.06" />
					<text x="32" y="80" fill="white" opacity="0.35" font-size="10"
						font-family="Inter">Impressions</text>
					<text x="32" y="108" fill="white" opacity="0.85" font-size="22" font-weight="bold"
						font-family="Inter">24.8M</text>
					<text x="130" y="108" fill="#059669" font-size="11" font-family="Inter" opacity="0.8">↑ 34%</text>

					<rect x="240" y="56" width="208" height="72" rx="10" fill="white" opacity="0.04" stroke="white"
						stroke-opacity="0.06" />
					<text x="256" y="80" fill="white" opacity="0.35" font-size="10" font-family="Inter">Click-Through
						Rate</text>
					<text x="256" y="108" fill="white" opacity="0.85" font-size="22" font-weight="bold"
						font-family="Inter">8.7%</text>
					<text x="330" y="108" fill="#059669" font-size="11" font-family="Inter" opacity="0.8">↑ 12%</text>

					<rect x="464" y="56" width="208" height="72" rx="10" fill="white" opacity="0.04" stroke="white"
						stroke-opacity="0.06" />
					<text x="480" y="80" fill="white" opacity="0.35" font-size="10" font-family="Inter">Return on Ad
						Spend</text>
					<text x="480" y="108" fill="#2a55e5" opacity="0.9" font-size="22" font-weight="bold"
						font-family="Inter">4.8×</text>

					<rect x="688" y="56" width="196" height="72" rx="10" fill="white" opacity="0.04" stroke="white"
						stroke-opacity="0.06" />
					<text x="704" y="80" fill="white" opacity="0.35" font-size="10"
						font-family="Inter">Conversions</text>
					<text x="704" y="108" fill="white" opacity="0.85" font-size="22" font-weight="bold"
						font-family="Inter">142K</text>
					<text x="768" y="108" fill="#059669" font-size="11" font-family="Inter" opacity="0.8">↑ 56%</text>

					<!-- Chart area -->
					<rect x="16" y="144" width="580" height="160" rx="10" fill="white" opacity="0.03" stroke="white"
						stroke-opacity="0.06" />
					<line x1="16" y1="224" x2="596" y2="224" stroke="white" stroke-opacity="0.04"
						stroke-dasharray="4" />
					<line x1="16" y1="184" x2="596" y2="184" stroke="white" stroke-opacity="0.03"
						stroke-dasharray="4" />
					<path d="M40 280 L110 260 L180 268 L250 235 L320 228 L390 210 L460 195 L530 178 L572 170"
						stroke="#2a55e5" stroke-width="2.5" stroke-linecap="round" fill="none" />
					<path
						d="M40 280 L110 260 L180 268 L250 235 L320 228 L390 210 L460 195 L530 178 L572 170 L572 290 L40 290 Z"
						fill="url(#biz-chart)" opacity="0.15" />
					<defs>
						<linearGradient id="biz-chart" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stop-color="#2a55e5" />
							<stop offset="100%" stop-color="transparent" />
						</linearGradient>
					</defs>
					<path d="M40 275 L110 270 L180 265 L250 258 L320 248 L390 240 L460 235 L530 230 L572 228"
						stroke="#FE2C55" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 3" fill="none"
						opacity="0.5" />
					<circle cx="460" cy="195" r="4" fill="#2a55e5" />
					<rect x="440" y="175" width="52" height="16" rx="5" fill="#2a55e5" opacity="0.9" />
					<text x="466" y="187" fill="white" font-size="9" font-weight="600" font-family="Inter"
						text-anchor="middle">+23.4%</text>

					<!-- Right sidebar -->
					<rect x="612" y="144" width="272" height="160" rx="10" fill="white" opacity="0.03" stroke="white"
						stroke-opacity="0.06" />
					<text x="628" y="170" fill="white" opacity="0.4" font-size="10" font-family="Inter">Top
						Performing</text>
					<rect x="628" y="182" width="240" height="32" rx="6" fill="white" opacity="0.04" />
					<circle cx="646" cy="198" r="10" fill="#2a55e5" opacity="0.2" />
					<rect x="664" y="192" width="80" height="5" rx="2" fill="white" opacity="0.15" />
					<rect x="664" y="201" width="50" height="4" rx="1" fill="white" opacity="0.07" />
					<text x="840" y="200" fill="#059669" font-size="9" font-weight="600" font-family="Inter"
						opacity="0.8">4.8×</text>

					<rect x="628" y="220" width="240" height="32" rx="6" fill="white" opacity="0.04" />
					<circle cx="646" cy="236" r="10" fill="#FE2C55" opacity="0.2" />
					<rect x="664" y="230" width="70" height="5" rx="2" fill="white" opacity="0.15" />
					<rect x="664" y="239" width="45" height="4" rx="1" fill="white" opacity="0.07" />
					<text x="840" y="238" fill="#059669" font-size="9" font-weight="600" font-family="Inter"
						opacity="0.8">3.9×</text>

					<rect x="628" y="258" width="240" height="32" rx="6" fill="white" opacity="0.04" />
					<circle cx="646" cy="274" r="10" fill="#7C3AED" opacity="0.2" />
					<rect x="664" y="268" width="90" height="5" rx="2" fill="white" opacity="0.15" />
					<rect x="664" y="277" width="55" height="4" rx="1" fill="white" opacity="0.07" />
					<text x="840" y="276" fill="#059669" font-size="9" font-weight="600" font-family="Inter"
						opacity="0.8">3.2×</text>
				</svg>
			</div>
		</div>

		<!-- Wave transition -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[80px]">
			<svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,70 C240,95 520,40 800,60 C1060,78 1300,100 1440,55 L1440,100 L0,100 Z" fill="#f4f5f8" />
			</svg>
		</div>
	</section>

	<!-- ═══ WORKFLOW — Horizontal 3-step process ═══ -->
	<section class="bg-white py-22">
		<div class="max-w-[1600px] mx-auto px-6 lg:px-8">
			<div class="text-center mb-16 lg:mb-20">
				<h2 v-reveal class="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text leading-[1.1] tracking-[-0.03em]">
					{{ t('business.workflowTitle') }}
				</h2>
				<p v-reveal="1"
					class="mt-4 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7] text-text-2 max-w-[460px] mx-auto">
					{{ t('business.workflowSub') }}
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-0 relative">
				<!-- Connecting line -->
				<div
					class="hidden md:block absolute top-[44px] left-[16.67%] right-[16.67%] h-px bg-linear-to-r from-[#2a55e5]/30 via-[#7C3AED]/30 to-[#FE2C55]/30" />

				<div v-for="(w, i) in workflow" :key="i" v-reveal="i"
					class="relative text-center px-6 lg:px-10 pb-10 md:pb-0">
					<!-- Step circle -->
					<div class="inline-flex items-center justify-center w-[88px] h-[88px] rounded-full mb-8 relative z-10"
						:class="i === 0 ? 'bg-[#2a55e5]/8 text-[#2a55e5]' : i === 1 ? 'bg-[#7C3AED]/8 text-[#7C3AED]' : 'bg-[#FE2C55]/8 text-[#FE2C55]'">
						<span class="text-[28px] font-black">{{ w.step }}</span>
					</div>
					<h3 class="text-[26px] font-bold text-black mb-3">{{ w.title }}</h3>
					<p class="text-[16px] leading-[1.75] text-black">{{ w.desc }}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ ENTERPRISE — Dark horizontal cards ═══ -->
	<section class="bg-dark py-22 relative overflow-hidden">
		<GradientBlob :size="600" top="30%" left="70%" color1="#2a55e5" color2="#7c3aed" />
		<div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="text-center mb-14 lg:mb-16">
				<h2 v-reveal
					class="text-[clamp(2rem,4.5vw,3rem)] font-bold text-white leading-[1.1] tracking-[-0.03em]">
					{{ t('business.toolsTitle') }}
				</h2>
				<p v-reveal="1"
					class="mt-4 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7] text-text-light-2 max-w-[460px] mx-auto">
					{{ t('business.toolsSub') }}
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<div v-for="(e, i) in enterprise" :key="i" v-reveal="i"
					class="card-dark p-7 border border-white/6 text-center">
					<div
						class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-white/5 border border-white/8">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" opacity="0.7">
							<path :d="e.icon" />
						</svg>
					</div>
					<h3 class="text-[16px] font-bold text-white mb-2">{{ e.title }}</h3>
					<p class="text-[13px] leading-[1.7] text-text-light-2">{{ e.desc }}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ CTA — Light ═══ -->
	<section class="bg-[#f4f5f8] py-28 lg:py-36 text-center">
		<div class="max-w-[540px] mx-auto px-6">
			<h2 v-reveal class="text-[clamp(2rem,4vw,2.75rem)] font-bold text-text leading-tight tracking-[-0.02em]">
				{{ t('business.ctaTitle') }}</h2>
			<p v-reveal="1" class="mt-4 text-[16px] text-text-2 leading-[1.7]">{{ t('business.ctaSub') }}</p>
			<div v-reveal="2" class="mt-8 flex flex-wrap justify-center gap-4">
				<a href="https://ad.xavvi.com" class="btn-primary h-12! px-8! text-[16px]!">{{ t('business.startAdvertising') }}</a>
				<a href="mailto:business@xavvi.com" class="btn-ghost bg-text! text-white! h-12! px-8! text-[16px]!">{{ t('business.talkToSales') }}</a>
			</div>
		</div>
	</section>
</template>
