<!--
  Archived from HomePage.vue — the "Disclaimer — Creator Tokens" section
  (dark band with warning icon) removed from the home page.

  Locale keys this component depends on (still present in src/locales/*.ts under home.*):
    - home.disclaimer.body
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<section class="bg-[#212226] py-10 lg:py-12">
		<div class="max-w-[800px] mx-auto px-6">
			<div class="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-5">
				<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FE2C55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0" aria-hidden="true">
					<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
					<line x1="12" y1="9" x2="12" y2="13" />
					<line x1="12" y1="17" x2="12.01" y2="17" />
				</svg>
				<p class="text-[13px] lg:text-[14px] text-[#FFFDF9] leading-[1.7] text-center sm:text-left">
					{{ t('home.disclaimer.body') }}
				</p>
			</div>
		</div>
	</section>
</template>
