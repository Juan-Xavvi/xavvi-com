<!--
  Archived from HomePage.vue — the "OWNERSHIP / Your traffic, your data" ecosystem card,
  removed when the ecosystem section was trimmed to four cards (card0, card2, card4, card5).

  Locale keys this component depends on (still present in src/locales/*.ts under home.eco.card1.*):
    - home.eco.card1.tag
    - home.eco.card1.title
    - home.eco.card1.desc
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const panelBg = 'bg-gradient-to-br from-[#1a0a3e] to-[#0e1b47]';
const iconGradient = 'from-[#7C3AED] to-[#2a55e5]';
const image = '/images/page/card1.jpg';
</script>

<template>
	<section class="bg-white py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="card-light rounded-2xl! overflow-hidden flex flex-col max-w-[600px]">
				<div :class="['relative aspect-[4/3] overflow-hidden', panelBg]">
					<img :src="image" :alt="t('home.eco.card1.title')" class="w-full h-full object-cover" />
				</div>
				<div class="p-8 lg:p-10 flex-1 flex flex-col">
					<div class="inline-flex items-center gap-2 mb-5">
						<div
							:class="['w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center', iconGradient]">
							<img src="/X-white.svg" alt="" class="w-3.5 h-3.5" />
						</div>
						<span class="text-[16px] font-semibold text-text-2 tracking-wider uppercase">
							{{ t('home.eco.card1.tag') }}
						</span>
					</div>
					<h3
						class="text-[clamp(1.4rem,2.5vw,1.85rem)] font-bold text-text leading-snug tracking-tight mb-3">
						{{ t('home.eco.card1.title') }}
					</h3>
					<p class="text-[15px] leading-[1.7] text-text-2 whitespace-pre-line">
						{{ t('home.eco.card1.desc') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
