<!--
  Archived from HomePage.vue — the "200+ markets. One platform." Global section
  that lived between the ecosystem cards and the CTA before being replaced by the
  Miss Crypto 2026 section.

  Locale keys this component depends on (still present in src/locales/*.ts):
    - home.globalTitle
    - home.globalSub
    - home.offices.losAngeles
    - home.offices.london
    - home.offices.dubai
    - home.offices.singapore
    - home.offices.saoPaulo
    - home.offices.berlin
    - home.officeRoles.globalHQ
    - home.officeRoles.emea
    - home.officeRoles.mena
    - home.officeRoles.apac
    - home.officeRoles.latam
    - home.officeRoles.europe
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GradientBlob from '@/components/GradientBlob.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();

const offices = computed(() => [
	{ city: t('home.offices.losAngeles'), role: t('home.officeRoles.globalHQ'), flag: '🇺🇸' },
	{ city: t('home.offices.london'), role: t('home.officeRoles.emea'), flag: '🇬🇧' },
	{ city: t('home.offices.dubai'), role: t('home.officeRoles.mena'), flag: '🇦🇪' },
	{ city: t('home.offices.singapore'), role: t('home.officeRoles.apac'), flag: '🇸🇬' },
	{ city: t('home.offices.saoPaulo'), role: t('home.officeRoles.latam'), flag: '🇧🇷' },
	{ city: t('home.offices.berlin'), role: t('home.officeRoles.europe'), flag: '🇩🇪' },
]);
</script>

<template>
	<section class="bg-gradient-subtle py-22 relative overflow-hidden">
		<GradientBlob :size="700" top="20%" left="50%" color1="#2a55e5" color2="#059669" delay="0s" />

		<div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
			<SectionHeader :title="t('home.globalTitle')" :subtitle="t('home.globalSub')" />

			<div v-reveal class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
				<div v-for="(office, i) in offices" :key="i" class="card-dark rounded-xl! p-5 text-center">
					<div class="text-[28px] mb-2">{{ office.flag }}</div>
					<h3 class="text-[14px] font-bold text-white">{{ office.city }}</h3>
					<p class="text-[12px] text-text-light-2 mt-0.5">{{ office.role }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
