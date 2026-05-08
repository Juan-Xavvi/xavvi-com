<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GradientBlob from '@/components/GradientBlob.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import StatsCounter from '@/components/StatsCounter.vue';

const { t } = useI18n();

const steps = computed(() => [
	{ num: '01', title: t('brands.steps.s1.title'), desc: t('brands.steps.s1.desc'), color: '#2a55e5' },
	{ num: '02', title: t('brands.steps.s2.title'), desc: t('brands.steps.s2.desc'), color: '#7C3AED' },
	{ num: '03', title: t('brands.steps.s3.title'), desc: t('brands.steps.s3.desc'), color: '#FE2C55' },
	{ num: '04', title: t('brands.steps.s4.title'), desc: t('brands.steps.s4.desc'), color: '#059669' },
]);

const brands = computed(() => [
	{ name: t('brands.cards.kaimono.name'), cat: t('brands.cards.kaimono.cat'), desc: t('brands.cards.kaimono.desc'), gradient: 'from-[#2a55e5] to-[#60a5fa]', accentColor: '#2a55e5' },
	{ name: t('brands.cards.molynk.name'), cat: t('brands.cards.molynk.cat'), desc: t('brands.cards.molynk.desc'), gradient: 'from-[#EC4899] to-[#F59E0B]', accentColor: '#EC4899' },
	{ name: t('brands.cards.veloura.name'), cat: t('brands.cards.veloura.cat'), desc: t('brands.cards.veloura.desc'), gradient: 'from-[#7C3AED] to-[#FE2C55]', accentColor: '#7C3AED' },
]);

const stats = computed(() => [
	{ target: 12, suffix: '', label: t('brands.stats.incubated') },
	{ target: 120, suffix: 'M+', label: t('brands.stats.gmv') },
	{ target: 40, suffix: '+', label: t('brands.stats.markets') },
	{ target: 3, suffix: '×', label: t('brands.stats.roi') },
]);
</script>

<template>
	<section class="relative hero-dark pt-28 pb-40 lg:pt-36 lg:pb-48 overflow-hidden">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
			<SectionHeader :title="t('brands.heroTitle')" />
			<div class="grid md:grid-cols-3 gap-5">
				<div v-for="(b, i) in brands" :key="i" v-reveal="i" class="card-gradient overflow-hidden">
					<div :class="['h-[200px] bg-linear-to-br relative overflow-hidden', b.gradient]">
						<!-- Kaimono: Tech product -->
						<svg v-if="i === 0" viewBox="0 0 300 200" class="absolute inset-0 w-full h-full" fill="none">
							<rect x="90" y="30" width="120" height="80" rx="8" fill="white" opacity="0.15"
								stroke="white" stroke-opacity="0.2" />
							<rect x="95" y="35" width="110" height="65" rx="4" fill="white" opacity="0.06" />
							<circle cx="150" cy="60" r="12" fill="white" opacity="0.12" />
							<path d="M144 60l4 4 8-8" stroke="white" stroke-width="2" stroke-linecap="round"
								opacity="0.4" />
							<rect x="115" y="80" width="70" height="6" rx="2" fill="white" opacity="0.1" />
							<rect x="100" y="120" width="40" height="50" rx="6" fill="white" opacity="0.1"
								stroke="white" stroke-opacity="0.15" />
							<rect x="105" y="125" width="30" height="30" rx="3" fill="white" opacity="0.06" />
							<rect x="110" y="160" width="20" height="4" rx="1" fill="white" opacity="0.1" />
							<rect x="160" y="120" width="40" height="50" rx="6" fill="white" opacity="0.1"
								stroke="white" stroke-opacity="0.15" />
							<rect x="165" y="125" width="30" height="30" rx="3" fill="white" opacity="0.06" />
							<rect x="170" y="160" width="20" height="4" rx="1" fill="white" opacity="0.1" />
							<circle cx="50" cy="150" r="30" fill="white" opacity="0.03" />
							<circle cx="260" cy="40" r="25" fill="white" opacity="0.03" />
						</svg>
						<!-- Molynk: Beauty products -->
						<svg v-else-if="i === 1" viewBox="0 0 300 200" class="absolute inset-0 w-full h-full"
							fill="none">
							<ellipse cx="150" cy="170" rx="100" ry="15" fill="white" opacity="0.04" />
							<rect x="130" y="40" width="40" height="120" rx="20" fill="white" opacity="0.12"
								stroke="white" stroke-opacity="0.2" />
							<rect x="135" y="50" width="30" height="40" rx="15" fill="white" opacity="0.08" />
							<rect x="140" y="45" width="20" height="8" rx="4" fill="white" opacity="0.2" />
							<rect x="80" y="60" width="32" height="100" rx="16" fill="white" opacity="0.08"
								stroke="white" stroke-opacity="0.15" />
							<rect x="85" y="70" width="22" height="30" rx="11" fill="white" opacity="0.06" />
							<rect x="88" y="64" width="16" height="6" rx="3" fill="white" opacity="0.15" />
							<rect x="190" y="55" width="36" height="108" rx="10" fill="white" opacity="0.1"
								stroke="white" stroke-opacity="0.18" />
							<rect x="195" y="65" width="26" height="35" rx="6" fill="white" opacity="0.06" />
							<rect x="200" y="58" width="16" height="8" rx="2" fill="white" opacity="0.15" />
							<circle cx="60" cy="50" r="15" fill="white" opacity="0.03" />
							<circle cx="250" cy="140" r="20" fill="white" opacity="0.04" />
							<circle cx="150" cy="100" r="4" fill="white" opacity="0.15" />
							<circle cx="150" cy="110" r="3" fill="white" opacity="0.1" />
							<circle cx="150" cy="118" r="2" fill="white" opacity="0.08" />
						</svg>
						<!-- Veloura: Fashion -->
						<svg v-else viewBox="0 0 300 200" class="absolute inset-0 w-full h-full" fill="none">
							<rect x="100" y="20" width="100" height="140" rx="4" fill="white" opacity="0.08"
								stroke="white" stroke-opacity="0.15" />
							<rect x="105" y="25" width="90" height="90" rx="2" fill="white" opacity="0.05" />
							<path d="M130 60 L150 40 L170 60 L165 90 L135 90 Z" fill="white" opacity="0.1" />
							<path d="M140 70 L150 55 L160 70" stroke="white" stroke-width="1.5" fill="none"
								opacity="0.2" />
							<line x1="150" y1="70" x2="150" y2="88" stroke="white" stroke-width="1" opacity="0.15" />
							<rect x="115" y="122" width="70" height="6" rx="2" fill="white" opacity="0.1" />
							<rect x="125" y="134" width="50" height="5" rx="2" fill="white" opacity="0.07" />
							<rect x="135" y="145" width="30" height="5" rx="2" fill="white" opacity="0.05" />
							<rect x="220" y="40" width="50" height="70" rx="4" fill="white" opacity="0.06"
								stroke="white" stroke-opacity="0.1" />
							<rect x="225" y="45" width="40" height="40" rx="2" fill="white" opacity="0.04" />
							<rect x="230" y="92" width="30" height="4" rx="1" fill="white" opacity="0.08" />
							<rect x="30" y="60" width="50" height="70" rx="4" fill="white" opacity="0.06" stroke="white"
								stroke-opacity="0.1" />
							<rect x="35" y="65" width="40" height="40" rx="2" fill="white" opacity="0.04" />
							<rect x="40" y="112" width="30" height="4" rx="1" fill="white" opacity="0.08" />
						</svg>
					</div>
					<div class="bg-dark-card p-7">
						<p class="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2"
							:style="{ color: b.accentColor }">
							{{ b.cat }}
						</p>
						<h3 class="text-[22px] font-bold text-white mb-2">{{ b.name }}</h3>
						<p class="text-[14px] leading-[1.7] text-white/80">{{ b.desc }}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Wave 1 — gentle wide curve -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[100px]">
			<svg viewBox="0 0 1440 120" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,80 C360,110 720,40 1080,75 C1260,90 1380,60 1440,65 L1440,120 L0,120 Z" fill="#f4f5f8" opacity="0.45" />
			</svg>
		</div>
		<!-- Wave 2 — sharper asymmetric curve -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-[80px]">
			<svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,60 C180,95 480,30 780,55 C1020,74 1260,100 1440,50 L1440,100 L0,100 Z" fill="#f4f5f8" />
			</svg>
		</div>
	</section>

	<section class="bg-[#f4f5f8] py-22 relative overflow-hidden text-center">
		<div class="relative z-10 max-w-[640px] mx-auto px-6">
			<h2 v-reveal class="text-[clamp(2rem,4vw,2.75rem)] font-bold text-black leading-tight tracking-[-0.02em]">
				{{ t('brands.ctaTitle') }}
			</h2>
			<p v-reveal="1" class="mt-4 text-[16px] text-black/80 leading-[1.7]">
				{{ t('brands.ctaSub') }}
			</p>
			<a v-reveal="2" href="mailto:brands@xavvi.com" class="btn-primary h-12! px-8! text-[16px]! mt-8">
				{{ t('brands.ctaBtn') }}
			</a>
		</div>
	</section>
</template>
