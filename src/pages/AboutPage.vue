<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GradientBlob from '@/components/GradientBlob.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();

const statsBand = computed(() => [
	{ value: t('about.stats.creatorsValue'), label: t('about.stats.creators') },
	{ value: t('about.stats.marketsValue'), label: t('about.stats.markets') },
	{ value: t('about.stats.viewsValue'), label: t('about.stats.views') },
	{ value: t('about.stats.officesValue'), label: t('about.stats.offices') },
]);

const goals = computed(() => [
	{
		year: '2026',
		title: t('about.goals.shortTerm.title'),
		items: [
			t('about.goals.shortTerm.items.0'),
			t('about.goals.shortTerm.items.1'),
			t('about.goals.shortTerm.items.2'),
			t('about.goals.shortTerm.items.3'),
		],
		dark: false,
		yearSide: 'right',
	},
	{
		year: '2028',
		title: t('about.goals.midTerm.title'),
		items: [
			t('about.goals.midTerm.items.0'),
			t('about.goals.midTerm.items.1'),
			t('about.goals.midTerm.items.2'),
			t('about.goals.midTerm.items.3'),
		],
		dark: false,
		yearSide: 'left',
	},
	{
		year: '2030',
		title: t('about.goals.longTerm.title'),
		items: [
			t('about.goals.longTerm.items.0'),
			t('about.goals.longTerm.items.1'),
			t('about.goals.longTerm.items.2'),
			t('about.goals.longTerm.items.3'),
			t('about.goals.longTerm.items.4'),
		],
		dark: true,
		yearSide: 'right',
	},
]);

const offices = computed(() => [
	{ city: 'Los Angeles', role: t('about.officeRoles.globalHQ'), flag: '🇺🇸' },
	{ city: 'London', role: t('about.officeRoles.emea'), flag: '🇬🇧' },
	{ city: 'Dubai', role: t('about.officeRoles.mena'), flag: '🇦🇪' },
	{ city: 'Singapore', role: t('about.officeRoles.apac'), flag: '🇸🇬' },
	{ city: 'São Paulo', role: t('about.officeRoles.latam'), flag: '🇧🇷' },
	{ city: 'Berlin', role: t('about.officeRoles.europe'), flag: '🇩🇪' },
]);

const compliance = computed(() => [
	{ name: t('about.compliance.soc2.name'), desc: t('about.compliance.soc2.desc') },
	{ name: t('about.compliance.gdpr.name'), desc: t('about.compliance.gdpr.desc') },
	{ name: t('about.compliance.ccpa.name'), desc: t('about.compliance.ccpa.desc') },
	{ name: t('about.compliance.iso.name'), desc: t('about.compliance.iso.desc') },
	{ name: t('about.compliance.coppa.name'), desc: t('about.compliance.coppa.desc') },
]);
</script>

<template>
	<!-- ═══ PAGE HEADER — Editorial split ═══ -->
	<section class="hero-dark pt-28 pb-16 lg:pt-36 lg:pb-20">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-end">
				<div v-reveal>
					<h1 class="mt-4 text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
						{{ t('about.heroTitle') }}
					</h1>
				</div>
				<div v-reveal="1">
					<p class="text-[20px] leading-[1.75] text-white/80 lg:pb-1">
						{{ t('about.heroSub') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ STATS BAND ═══ -->
	<section class="bg-dark-2 border-t border-b border-white/6 py-10 lg:py-12">
		<div class="max-w-[1600px] mx-auto px-6 lg:px-8">
			<div class="flex flex-wrap lg:flex-nowrap items-center">
				<template v-for="(s, i) in statsBand" :key="i">
					<div v-reveal="i" class="w-1/2 lg:flex-1 py-3 lg:py-0 text-center">
						<div class="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-none">{{ s.value }}</div>
						<p class="text-[13px] text-text-light-2 mt-1.5">{{ s.label }}</p>
					</div>
					<div v-if="i < 3" class="hidden lg:block w-px h-12 mx-6 rounded-full" style="background: linear-gradient(180deg, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)" />
				</template>
			</div>
		</div>
	</section>

	<!-- ═══ DEVELOPMENT GOALS — Zigzag timeline ═══ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal class="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text text-center mb-16 lg:mb-20">
				{{ t('about.goalsTitle') }}
			</h2>

			<div class="relative">
				<!-- Vertical connecting line (desktop) -->
				<div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-[#FFD700] via-[#FFD700] to-[#1a2744] -translate-x-1/2 rounded-full" />

				<div class="space-y-12 lg:space-y-0">
					<!-- Goal 1: Short-term (card left, year right) -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pb-20">
						<div class="lg:pr-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-white">
								<h3 class="text-[22px] font-bold text-text mb-5">{{ goals[0].title }}</h3>
								<ul class="space-y-3.5">
									<li v-for="(item, idx) in goals[0].items" :key="idx" class="flex items-start gap-3">
										<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
										<span class="text-[15px] text-black leading-[1.6]">{{ item }}</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="hidden lg:flex items-center justify-start lg:pl-8">
							<div class="w-[88px] h-[88px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-[0_8px_32px_rgba(26,39,68,0.3)]">
								<span class="text-[24px] font-bold text-[#FFD700]">{{ goals[0].year }}</span>
							</div>
						</div>
						<!-- Mobile year badge -->
						<div class="lg:hidden flex justify-center mt-6">
							<div class="w-[72px] h-[72px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-lg">
								<span class="text-[20px] font-bold text-[#FFD700]">{{ goals[0].year }}</span>
							</div>
						</div>
					</div>

					<!-- Goal 2: Mid-term (year left, card right) -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pb-20">
						<div class="hidden lg:flex items-center justify-end lg:pr-8">
							<div class="w-[88px] h-[88px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-[0_8px_32px_rgba(26,39,68,0.3)]">
								<span class="text-[24px] font-bold text-[#FFD700]">{{ goals[1].year }}</span>
							</div>
						</div>
						<div class="lg:pl-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-white">
								<h3 class="text-[22px] font-bold text-text mb-5">{{ goals[1].title }}</h3>
								<ul class="space-y-3.5">
									<li v-for="(item, idx) in goals[1].items" :key="idx" class="flex items-start gap-3">
										<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
										<span class="text-[15px] text-black leading-[1.6]">{{ item }}</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="lg:hidden flex justify-center mt-6">
							<div class="w-[72px] h-[72px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-lg">
								<span class="text-[20px] font-bold text-[#FFD700]">{{ goals[1].year }}</span>
							</div>
						</div>
					</div>

					<!-- Goal 3: Long-term (card left dark, year right) -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
						<div class="lg:pr-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-[#1a2744] ">
								<h3 class="text-[22px] font-bold text-[#FFD700] mb-5">{{ goals[2].title }}</h3>
								<ul class="space-y-3.5">
									<li v-for="(item, idx) in goals[2].items" :key="idx" class="flex items-start gap-3">
										<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
										<span class="text-[15px] text-white leading-[1.6]">{{ item }}</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="hidden lg:flex items-center justify-start lg:pl-8">
							<div class="w-[88px] h-[88px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-[0_8px_32px_rgba(26,39,68,0.3)] border-2 border-[#FFD700]/30">
								<span class="text-[24px] font-bold text-[#FFD700]">{{ goals[2].year }}</span>
							</div>
						</div>
						<div class="lg:hidden flex justify-center mt-6">
							<div class="w-[72px] h-[72px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-lg border-2 border-[#FFD700]/30">
								<span class="text-[20px] font-bold text-[#FFD700]">{{ goals[2].year }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ OFFICES — Dark glass cards with blob ═══ -->
	<section class="bg-gradient-subtle py-22 relative overflow-hidden">
		<GradientBlob :size="700" top="20%" left="60%" color1="#2a55e5" color2="#059669" delay="0s" />
		<div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
			<SectionHeader :title="t('about.officesTitle')" :subtitle="t('about.officesSub')" />
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div v-for="(office, i) in offices" :key="i" v-reveal="i % 3" class="card-dark p-7">
					<div class="flex items-center gap-5">
						<div class="w-14 h-14 rounded-xl bg-white/4 flex items-center justify-center text-[28px] shrink-0">
							{{ office.flag }}
						</div>
						<div>
							<h3 class="text-[16px] font-bold text-white">{{ office.city }}</h3>
							<p class="text-[13px] text-text-light-2 mt-0.5">{{ office.role }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ TRUST & COMPLIANCE ═══ -->
	<section class="bg-white py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<SectionHeader :dark="false" :title="t('about.complianceTitle')" :subtitle="t('about.complianceSub')" />
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				<div v-for="(c, i) in compliance" :key="i" v-reveal="i" class="rounded-2xl bg-[#f5f5f7] p-6 text-center hover:bg-[#eeeef0] transition-colors">
					<div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#2a55e5]/10 to-[#7c3aed]/10 border border-[#2a55e5]/10 flex items-center justify-center mx-auto mb-3">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a55e5" stroke-width="2" stroke-linecap="round"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" /></svg>
					</div>
					<div class="text-[16px] font-bold text-text">{{ c.name }}</div>
					<div class="text-[14px] text-text-3 mt-1">{{ c.desc }}</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ CTA ═══ -->
	<section class="bg-[#f4f5f8] py-24 text-center">
		<div class="max-w-[740px] mx-auto px-6">
			<h2 v-reveal class="text-[clamp(2rem,4vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text">
				{{ t('about.ctaTitle') }}
			</h2>
			<p v-reveal="1" class="mt-4 text-[16px] text-black/80 leading-[1.7]">
				{{ t('about.ctaSub') }}
			</p>
			<div v-reveal="2" class="mt-8 flex flex-wrap justify-center gap-4">
				<a href="mailto:careers@xavvi.com" class="btn-primary h-12! px-8! text-[16px]!">
					{{ t('about.ctaRoles') }}
				</a>
				<RouterLink to="/" class="btn-ghost bg-black! text-white! h-12! px-8! text-[16px]!">
					{{ t('about.ctaHome') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
