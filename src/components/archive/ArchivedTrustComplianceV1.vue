<!--
  Archived from AboutPage.vue — the "Trust & Compliance" section
  removed when the About page was overhauled to use the new hero/stats/story/offices/cta layout.

  Locale keys this component depends on (still present in src/locales/*.ts under about.*):
    - about.complianceTitle
    - about.complianceSub
    - about.compliance.soc2.name
    - about.compliance.soc2.desc
    - about.compliance.gdpr.name
    - about.compliance.gdpr.desc
    - about.compliance.ccpa.name
    - about.compliance.ccpa.desc
    - about.compliance.iso.name
    - about.compliance.iso.desc
    - about.compliance.coppa.name
    - about.compliance.coppa.desc
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();

const compliance = computed(() => [
	{ name: t('about.compliance.soc2.name'), desc: t('about.compliance.soc2.desc') },
	{ name: t('about.compliance.gdpr.name'), desc: t('about.compliance.gdpr.desc') },
	{ name: t('about.compliance.ccpa.name'), desc: t('about.compliance.ccpa.desc') },
	{ name: t('about.compliance.iso.name'), desc: t('about.compliance.iso.desc') },
	{ name: t('about.compliance.coppa.name'), desc: t('about.compliance.coppa.desc') },
]);
</script>

<template>
	<section class="bg-white py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<SectionHeader :dark="false" :title="t('about.complianceTitle')" :subtitle="t('about.complianceSub')" />
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				<div v-for="(c, i) in compliance" :key="i" class="rounded-2xl bg-[#f5f5f7] p-6 text-center hover:bg-[#eeeef0] transition-colors">
					<div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#2a55e5]/10 to-[#7c3aed]/10 border border-[#2a55e5]/10 flex items-center justify-center mx-auto mb-3">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a55e5" stroke-width="2" stroke-linecap="round"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" /></svg>
					</div>
					<div class="text-[16px] font-bold text-text">{{ c.name }}</div>
					<div class="text-[14px] text-text-3 mt-1">{{ c.desc }}</div>
				</div>
			</div>
		</div>
	</section>
</template>
