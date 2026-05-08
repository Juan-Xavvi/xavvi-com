<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const activeTab = ref<'supply' | 'marketing'>('supply');
const tabs = [
	{ id: 'supply' as const, labelKey: 'brandLab.support.tabs.supply.label' },
	{ id: 'marketing' as const, labelKey: 'brandLab.support.tabs.marketing.label' },
];
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
					<h1 class="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[#FFFDF9] mb-6">
						{{ t('brandLab.hero.title') }}
					</h1>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]">
						{{ t('brandLab.hero.body') }}
					</p>
				</div>

				<!-- Right: image at natural height -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden">
					<img src="/images/page/brand-lab.jpg" alt="Brand Lab" class="block w-full h-auto object-contain" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Full Support / Tabs
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1100px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-14">
				{{ t('brandLab.support.title') }}
			</h2>

			<!-- Tab bar -->
			<div v-reveal="1" class="flex border-b border-[#212226]/15 justify-center lg:justify-start">
				<button v-for="tab in tabs" :key="tab.id"
					@click="activeTab = tab.id"
					class="relative px-6 lg:px-8 py-4 font-semibold text-[14px] lg:text-[15px] tracking-[0.14em] transition-colors cursor-pointer"
					:class="activeTab === tab.id ? 'text-[#212226]' : 'text-[#212226]/45 hover:text-[#212226]/80'">
					{{ t(tab.labelKey) }}
					<span v-if="activeTab === tab.id"
						class="absolute -bottom-px left-0 right-0 h-[2px] bg-[#AE2049]"></span>
				</button>
			</div>

			<!-- Tab panel -->
			<div class="mt-8 lg:mt-10 min-h-[160px]">
				<Transition name="tab-fade" mode="out-in">
					<div v-if="activeTab === 'supply'" key="supply">
						<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#212226]">
							{{ t('brandLab.support.tabs.supply.body') }}
						</p>
					</div>
					<div v-else key="marketing">
						<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#212226]">
							{{ t('brandLab.support.tabs.marketing.body') }}
						</p>
					</div>
				</Transition>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — Roadmap
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] pt-4 pb-22 lg:pt-6 lg:pb-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-14">
				{{ t('brandLab.roadmap.title') }}
			</h2>

			<div class="relative">
				<!-- Vertical center line (desktop) -->
				<div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-[#FFD700] via-[#FFD700] to-[#1a2744] -translate-x-1/2 rounded-full" />

				<div class="space-y-12 lg:space-y-0">
					<!-- PHASE 1: card-left, pill-right -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pb-20">
						<div class="lg:pr-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
								<h3 class="text-[20px] lg:text-[22px] font-bold text-text mb-4 leading-snug">
									{{ t('brandLab.roadmap.phase1.title') }}
								</h3>
								<p class="text-[15px] text-text-2 leading-[1.7]">
									{{ t('brandLab.roadmap.phase1.body') }}
								</p>
							</div>
						</div>
						<div class="hidden lg:flex items-center justify-start lg:pl-8">
							<span class="inline-block px-5 py-2 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[14px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase1.label') }}
							</span>
						</div>
						<!-- Mobile pill -->
						<div class="lg:hidden flex justify-center mt-6">
							<span class="inline-block px-4 py-1.5 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase1.label') }}
							</span>
						</div>
					</div>

					<!-- PHASE 2: pill-left, card-right -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pb-20">
						<div class="hidden lg:flex items-center justify-end lg:pr-8">
							<span class="inline-block px-5 py-2 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[14px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase2.label') }}
							</span>
						</div>
						<div class="lg:pl-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
								<h3 class="text-[20px] lg:text-[22px] font-bold text-text mb-4 leading-snug">
									{{ t('brandLab.roadmap.phase2.title') }}
								</h3>
								<p class="text-[15px] text-text-2 leading-[1.7]">
									{{ t('brandLab.roadmap.phase2.body') }}
								</p>
							</div>
						</div>
						<!-- Mobile pill -->
						<div class="lg:hidden flex justify-center mt-6">
							<span class="inline-block px-4 py-1.5 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase2.label') }}
							</span>
						</div>
					</div>

					<!-- PHASE 3: card-left, pill-right -->
					<div v-reveal class="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
						<div class="lg:pr-8">
							<div class="rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
								<h3 class="text-[20px] lg:text-[22px] font-bold text-text mb-4 leading-snug">
									{{ t('brandLab.roadmap.phase3.title') }}
								</h3>
								<p class="text-[15px] text-text-2 leading-[1.7]">
									{{ t('brandLab.roadmap.phase3.body') }}
								</p>
							</div>
						</div>
						<div class="hidden lg:flex items-center justify-start lg:pl-8">
							<span class="inline-block px-5 py-2 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[14px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase3.label') }}
							</span>
						</div>
						<!-- Mobile pill -->
						<div class="lg:hidden flex justify-center mt-6">
							<span class="inline-block px-4 py-1.5 rounded-full bg-[#AE2049] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em]">
								{{ t('brandLab.roadmap.phase3.label') }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<p v-reveal
				class="mt-12 lg:mt-16 max-w-[820px] mx-auto text-center text-[15px] lg:text-[16px] leading-[1.7] text-text-2/75">
				{{ t('brandLab.roadmap.summary') }}
			</p>
		</div>
	</section>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
	transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
	opacity: 0;
	transform: translateY(6px);
}
.tab-fade-leave-to {
	opacity: 0;
	transform: translateY(-6px);
}
</style>
