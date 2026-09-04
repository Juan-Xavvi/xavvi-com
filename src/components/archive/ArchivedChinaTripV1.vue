<!--
  Archived from HomePage.vue — the "Xavvi Empire China Trip" section (id="china-trip")
  that lived between the ecosystem cards and the MCN & Brands callout before being
  replaced by the "Brand Lab Fast-track" section on 2026-09-04.

  Locale keys this component depends on (still present in src/locales/*.ts):
    - home.marketingCampaign.title
    - home.marketingCampaign.body
    - home.marketingCampaign.cta

  Assets: /images/page/china-trip.jpg
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<section id="china-trip" class="bg-black py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
				<!-- Text -->
				<div v-reveal class="flex flex-col justify-center">
					<h2 class="text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-6">
						{{ t('home.marketingCampaign.title') }}
					</h2>
					<p class="text-[15px] lg:text-[16px] leading-[1.75] text-[#FFFDF9] mb-8">
						{{ t('home.marketingCampaign.body') }}
					</p>
					<div>
						<a href="https://misscrypto.xavvi.com" target="_blank" rel="noopener"
							class="btn-primary h-12! px-8! text-[15px]! tracking-wider">
							{{ t('home.marketingCampaign.cta') }}
						</a>
					</div>
				</div>

				<!-- Image -->
				<div v-reveal="1" class="self-center rounded-2xl overflow-hidden shadow-[0_0_40px_10px_rgba(212,175,55,0.4)]">
					<img src="/images/page/china-trip.jpg" :alt="t('home.marketingCampaign.title')"
						class="block w-full h-auto object-contain" />
				</div>
			</div>
		</div>
	</section>
</template>
