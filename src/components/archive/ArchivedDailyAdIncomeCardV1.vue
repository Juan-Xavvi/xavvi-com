<!--
  Archived from CreatorsPage.vue — the "Daily Ad Income" card from the "How You Monetize" section,
  removed when that section was trimmed to two cards (Monthly Store Sales and AI Credits Cashout).

  Locale keys this component depends on (still present in src/locales/*.ts under creators.monetize.daily.*):
    - creators.monetize.daily.label
    - creators.monetize.daily.desc
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col">
					<div
						class="w-14 h-14 rounded-xl bg-[#FE2C55]/15 flex items-center justify-center text-[#FE2C55] mb-6">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="6" width="20" height="14" rx="2" />
							<line x1="2" y1="11" x2="22" y2="11" />
						</svg>
					</div>
					<h3 class="text-[18px] lg:text-[20px] font-bold text-[#FFFDF9] mb-3">
						{{ t('creators.monetize.daily.label') }}
					</h3>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFDF9]/80">
						{{ t('creators.monetize.daily.desc') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
