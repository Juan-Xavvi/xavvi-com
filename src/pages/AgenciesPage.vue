<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const benefits = computed(() => [
	t('agencies.whyCreators.b1'),
	t('agencies.whyCreators.b2'),
	t('agencies.whyCreators.b3'),
	t('agencies.whyCreators.b4'),
	t('agencies.whyCreators.b5'),
	t('agencies.whyCreators.b6'),
	t('agencies.whyCreators.b7'),
]);

const referralAdditions = computed(() => [
	t('agencies.referral.a1'),
	t('agencies.referral.a2'),
	t('agencies.referral.a3'),
	t('agencies.referral.a4'),
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero
       ═══════════════════════════════════════ -->
	<section class="hero-dark pt-32 pb-20 lg:pt-36 lg:pb-28">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<div v-reveal>
					<h1 class="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-tight text-[#FFFDF9] mb-8">
						{{ t('agencies.hero.title') }}
					</h1>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]">
						{{ t('agencies.hero.body') }}
					</p>
				</div>
				<div v-reveal="1" class="rounded-2xl overflow-hidden">
					<img src="/images/page/mcn.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Why Creators Will Love Xavvi
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div v-reveal class="max-w-[820px] mx-auto">
				<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight mb-8">
					{{ t('agencies.whyCreators.title') }}
				</h2>
				<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-5">
					{{ t('agencies.whyCreators.intro1') }}
				</p>
				<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-8">
					{{ t('agencies.whyCreators.intro2') }}
				</p>
				<h3 class="text-[18px] lg:text-[20px] font-bold text-[#212226] mb-5">
					{{ t('agencies.whyCreators.benefitsTitle') }}
				</h3>
				<ul class="space-y-3 mb-8">
					<li v-for="(b, i) in benefits" :key="i" class="flex items-start gap-3">
						<div class="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FE2C55]/10 flex items-center justify-center text-[#FE2C55]">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="5 12 10 17 19 7" />
							</svg>
						</div>
						<span class="text-[15px] lg:text-[16px] text-[#212226] leading-[1.6]">{{ b }}</span>
					</li>
				</ul>
				<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
					{{ t('agencies.whyCreators.closing') }}
				</p>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — The Industry Is Changing
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: text -->
				<div v-reveal>
					<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight mb-8">
						{{ t('agencies.industry.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-5">
						{{ t('agencies.industry.p1') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]">
						{{ t('agencies.industry.p2') }}
					</p>
				</div>
				<!-- Right: image -->
				<div v-reveal="1" class="rounded-2xl overflow-hidden">
					<img src="/images/page/risks.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Referral System
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left: image -->
				<div v-reveal class="rounded-2xl overflow-hidden lg:order-1 order-2">
					<img src="/images/page/referral.jpg" alt="" class="block w-full h-auto object-cover" />
				</div>
				<!-- Right: text -->
				<div v-reveal="1" class="lg:order-2 order-1">
					<h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight mb-8">
						{{ t('agencies.referral.title') }}
					</h2>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2 mb-6">
						{{ t('agencies.referral.intro') }}
					</p>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-[#212226] font-semibold mb-4">
						{{ t('agencies.referral.inAdditionLabel') }}
					</p>
					<ul class="space-y-3 mb-6">
						<li v-for="(item, i) in referralAdditions" :key="i" class="flex items-start gap-3">
							<div class="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FE2C55]/10 flex items-center justify-center text-[#FE2C55]">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="5 12 10 17 19 7" />
								</svg>
							</div>
							<span class="text-[15px] lg:text-[16px] text-[#212226] leading-[1.6]">{{ item }}</span>
						</li>
					</ul>
					<p class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
						{{ t('agencies.referral.closing') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — Become Part of the Ecosystem
       ═══════════════════════════════════════ -->
	<section class="bg-[#212226] py-22 lg:py-24">
		<div class="max-w-[700px] mx-auto px-6 text-center">
			<h2 v-reveal class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight mb-6">
				{{ t('agencies.ecosystem.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9] mb-10">
				{{ t('agencies.ecosystem.body') }}
			</p>
			<div v-reveal="2">
				<RouterLink to="/contact" class="btn-primary h-12! px-8! text-[15px]! tracking-wider">
					{{ t('agencies.ecosystem.cta') }}
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 6 — Creators Can Also Join as MCNs
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22 lg:py-24">
		<div class="max-w-[700px] mx-auto px-6 text-center">
			<h2 v-reveal class="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-[#212226] leading-tight mb-6">
				{{ t('agencies.alsoJoin.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
				{{ t('agencies.alsoJoin.body') }}
			</p>
		</div>
	</section>
</template>
