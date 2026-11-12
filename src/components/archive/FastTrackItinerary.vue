<!--
  Archived from HomePage.vue on 2026-11-12 — the dark "Brand Lab Fast-track" section
  (id="china-trip", with #brand-lab-fasttrack anchor) containing the full event itinerary,
  application CTA, book-a-call button and QR code. Markup preserved as it was on the homepage.

  Locale keys this component depends on (still present in src/locales/*.ts):
    - home.fasttrack.title / intro / footer / cta / qrNote / bookCall
    - home.fasttrack.creators.label / text / badge
    - home.fasttrack.affiliates.label / text / badge

  Assets: /images/page/Fast-track.jpg, /images/page/QR-1on1.png
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const fasttrackBlocks = computed(() => [
	{
		label: t('home.fasttrack.creators.label'),
		text: t('home.fasttrack.creators.text'),
		badge: t('home.fasttrack.creators.badge'),
	},
	{
		label: t('home.fasttrack.affiliates.label'),
		text: t('home.fasttrack.affiliates.text'),
		badge: t('home.fasttrack.affiliates.badge'),
	},
]);
</script>

<template>
	<section id="china-trip" class="bg-black py-22">
		<span id="brand-lab-fasttrack" class="block" aria-hidden="true"></span>
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
				<!-- Text -->
				<div v-reveal class="flex flex-col justify-start lg:order-2">
					<h2 class="text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-6">
						{{ t('home.fasttrack.title') }}
					</h2>
					<p class="text-[15px] lg:text-[16px] leading-[1.75] text-[#FFFDF9] mb-8">
						{{ t('home.fasttrack.intro') }}
					</p>

					<!-- Itinerary blocks -->
					<div class="flex flex-col gap-5 mb-8">
						<div v-for="block in fasttrackBlocks" :key="block.label"
							class="rounded-2xl border border-[#FFFDF9]/15 bg-[#FFFDF9]/[0.04] px-6 py-5">
							<p class="text-[15px] lg:text-[16px] font-bold text-[#FE2C55] mb-2">
								{{ block.label }}
							</p>
							<p class="text-[15px] leading-[1.7] text-[#FFFDF9] mb-3">
								{{ block.text }}
							</p>
							<span class="inline-flex items-center rounded-full border border-[#FFFDF9]/25 px-3 py-1 text-[13px] font-semibold text-[#FFFDF9]/85">
								{{ block.badge }}
							</span>
						</div>
					</div>

					<p class="text-[13px] leading-[1.6] text-[#FFFDF9]/60 mb-8">
						{{ t('home.fasttrack.footer') }}
					</p>

					<div>
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSe70nB2njCwICR4MWjAJzLwFzKLaB-z2VP6-7bdJ8CRBCChrg/viewform?usp=dialog"
							target="_blank" rel="noopener"
							class="btn-primary h-12! px-8! text-[15px]! tracking-wider">
							{{ t('home.fasttrack.cta') }}
						</a>
					</div>

					<p class="mt-8 text-[15px] leading-[1.7] text-[#FFFDF9]">
						{{ t('home.fasttrack.qrNote') }}
					</p>
					<div class="mt-5 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-5">
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSe70nB2njCwICR4MWjAJzLwFzKLaB-z2VP6-7bdJ8CRBCChrg/viewform?usp=sharing&amp;ouid=110677559468855878131"
							target="_blank" rel="noopener"
							class="btn-primary h-12! px-8! text-[15px]! tracking-wider uppercase shrink-0">
							{{ t('home.fasttrack.bookCall') }}
						</a>
						<img src="/images/page/QR-1on1.png" :alt="t('home.fasttrack.qrNote')"
							class="w-full max-w-[200px] h-auto rounded-xl" />
					</div>
				</div>

				<!-- Image -->
				<div v-reveal="1" class="self-start rounded-2xl overflow-hidden order-first lg:order-1 lg:sticky lg:top-28">
					<img src="/images/page/Fast-track.jpg" :alt="t('home.fasttrack.title')"
						class="block w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</section>
</template>
