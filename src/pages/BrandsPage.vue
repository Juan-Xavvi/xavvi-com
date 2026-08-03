<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
					<img src="/images/page/brands-hero.jpg" alt="" class="block w-full h-auto object-cover" />
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
