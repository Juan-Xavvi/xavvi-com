<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const statsBand = computed(() => [
	{ value: t('about.stats.creators.value'), label: t('about.stats.creators.label') },
	{ value: t('about.stats.mcns.value'), label: t('about.stats.mcns.label') },
	{ value: t('about.stats.vendors.value'), label: t('about.stats.vendors.label') },
	{ value: t('about.stats.users.value'), label: t('about.stats.users.label') },
]);

interface StoryItem {
	year: string;
	icon: string;
	isEmoji: boolean;
	body: string;
}

const story = computed<StoryItem[]>(() => [
	{ year: '2023', icon: '/images/page/Eiffel.png', isEmoji: false, body: t('about.story.s1.body') },
	{ year: '2024', icon: '/images/page/BigBen.png', isEmoji: false, body: t('about.story.s2.body') },
	{ year: '2025', icon: '/images/page/Hollywood.png', isEmoji: false, body: t('about.story.s3.body') },
	{ year: '2026', icon: '🌍', isEmoji: true, body: t('about.story.s4.body') },
]);

const offices = computed(() => [
	{ city: t('about.offices.losAngeles.city'), role: t('about.offices.losAngeles.role'), entity: t('about.offices.losAngeles.entity'), flag: '🇺🇸' },
	{ city: t('about.offices.berlin.city'), role: t('about.offices.berlin.role'), entity: t('about.offices.berlin.entity'), flag: '🇩🇪' },
	{ city: t('about.offices.dubai.city'), role: t('about.offices.dubai.role'), entity: t('about.offices.dubai.entity'), flag: '🇦🇪' },
	{ city: t('about.offices.hongKong.city'), role: t('about.offices.hongKong.role'), entity: t('about.offices.hongKong.entity'), flag: '🇭🇰' },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero
       ═══════════════════════════════════════ -->
	<section class="hero-dark pt-28 pb-16 lg:pt-36 lg:pb-20">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-end">
				<div v-reveal>
					<h1 class="text-[clamp(2.2rem,4.8vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#FFFDF9]">
						{{ t('about.heroTitle') }}
					</h1>
				</div>
				<div v-reveal="1">
					<p class="text-[16px] lg:text-[18px] leading-[1.8] text-[#FFFDF9]/90 lg:pb-1">
						{{ t('about.heroSub') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Stats
       ═══════════════════════════════════════ -->
	<section class="bg-dark-2 border-t border-b border-white/6 py-12 lg:py-14">
		<div class="max-w-[1600px] mx-auto px-6 lg:px-8">
			<h2 v-reveal class="text-center text-[clamp(1.1rem,2vw,1.4rem)] font-bold text-[#FFFDF9] mb-8 lg:mb-10 tracking-tight">
				{{ t('about.statsTitle') }}
			</h2>
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

	<!-- ═══════════════════════════════════════
       SECTION 3 — Our Story (zigzag timeline)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal class="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text text-center mb-16 lg:mb-20">
				{{ t('about.storyTitle') }}
			</h2>

			<div class="relative">
				<!-- Vertical connecting line (desktop) -->
				<div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-[#FFD700] via-[#FFD700] to-[#1a2744] -translate-x-1/2 rounded-full" />

				<div class="space-y-12 lg:space-y-0">
					<div v-for="(item, i) in story" :key="i" v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
						:class="{ 'lg:pb-20': i < story.length - 1 }">
						<!-- Card -->
						<div :class="i % 2 === 0 ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'">
							<div class="rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
								<div class="text-center mb-6">
									<img v-if="!item.isEmoji" :src="item.icon" alt="" class="h-12 inline-block" />
									<span v-else class="text-[48px] leading-none">{{ item.icon }}</span>
								</div>
								<p class="text-[15px] text-text leading-[1.7] whitespace-pre-line">
									{{ item.body }}
								</p>
							</div>
						</div>
						<!-- Year circle (desktop) -->
						<div class="hidden lg:flex items-center"
							:class="i % 2 === 0 ? 'justify-start lg:pl-8' : 'lg:order-1 justify-end lg:pr-8'">
							<div class="w-[88px] h-[88px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-[0_8px_32px_rgba(26,39,68,0.3)]">
								<span class="text-[24px] font-bold text-[#FFD700]">{{ item.year }}</span>
							</div>
						</div>
						<!-- Year badge (mobile) -->
						<div class="lg:hidden flex justify-center mt-6">
							<div class="w-[72px] h-[72px] rounded-full bg-[#1a2744] flex items-center justify-center shadow-lg">
								<span class="text-[20px] font-bold text-[#FFD700]">{{ item.year }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Offices and Operations
       ═══════════════════════════════════════ -->
	<section class="bg-dark py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div v-reveal class="text-center mb-12 lg:mb-14 max-w-[840px] mx-auto">
				<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#FFFDF9] mb-5">
					{{ t('about.officesTitle') }}
				</h2>
				<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/80">
					{{ t('about.officesSub') }}
				</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<div v-for="(office, i) in offices" :key="i" v-reveal="i % 4" class="card-dark p-6">
					<div class="flex items-start gap-4">
						<div class="w-14 h-14 rounded-xl bg-white/4 flex items-center justify-center text-[28px] shrink-0">
							{{ office.flag }}
						</div>
						<div>
							<h3 class="text-[16px] font-bold text-white">{{ office.city }}</h3>
							<p class="text-[13px] text-text-light-2 mt-0.5">{{ office.role }}</p>
							<p class="text-[12px] text-text-light-2/70 mt-1">{{ office.entity }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — CTA
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-24 text-center">
		<div class="max-w-[740px] mx-auto px-6">
			<h2 v-reveal class="text-[clamp(2rem,4vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text">
				{{ t('about.ctaTitle') }}
			</h2>
			<p v-reveal="1" class="mt-4 text-[16px] text-black/80 leading-[1.7]">
				{{ t('about.ctaSub') }}
			</p>
			<div v-reveal="2" class="mt-8 flex justify-center">
				<RouterLink to="/contact"
					class="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#FE2C55] hover:bg-[#EF2950] text-[#FFFDF9] font-semibold text-[15px] tracking-wider transition-colors">
					{{ t('about.ctaButton') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
