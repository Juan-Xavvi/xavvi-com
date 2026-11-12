<!--
  Archived from HomePage.vue on 2026-11-12 — the "LEGACY / Build your Own Brand" card
  (handbag image, card0) that was the first card in the ecosystem grid. On the homepage it
  was rendered from the `ecosystems` array; the card's data and markup are inlined here.

  Locale keys this component depends on (still present in src/locales/*.ts):
    - home.eco.card0.tag / title / desc

  Assets: /images/page/card0.jpg, /X-white.svg
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const eco = computed(() => ({
	tag: t('home.eco.card0.tag'),
	title: t('home.eco.card0.title'),
	desc: t('home.eco.card0.desc'),
	image: '/images/page/card0.jpg',
	panelBg: 'bg-gradient-to-br from-[#2a1505] to-[#1a0e05]',
	iconGradient: 'from-[#92400e] to-[#d97706]',
}));
</script>

<template>
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div v-reveal="0"
					class="card-light rounded-2xl! overflow-hidden flex flex-col">
					<div :class="['relative aspect-[4/3] overflow-hidden', eco.panelBg]">
						<img :src="eco.image" :alt="eco.title" class="w-full h-full object-cover" />
					</div>
					<div class="p-8 lg:p-10 flex-1 flex flex-col">
						<div class="inline-flex items-center gap-2 mb-5">
							<div
								:class="['w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center', eco.iconGradient]">
								<img src="/X-white.svg" alt="" class="w-3.5 h-3.5" />
							</div>
							<span class="text-[16px] font-semibold text-text-2 tracking-wider uppercase">
								{{ eco.tag }}
							</span>
						</div>
						<h3
							class="text-[clamp(1.4rem,2.5vw,1.85rem)] font-bold text-text leading-snug tracking-tight mb-3">
							{{ eco.title }}
						</h3>
						<p class="text-[15px] leading-[1.7] text-text-2 whitespace-pre-line">
							{{ eco.desc }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
