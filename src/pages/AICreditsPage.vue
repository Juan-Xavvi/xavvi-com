<script setup lang="ts">
// A2A Video page (route /ai-credits)
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Icon paths are 24×24 stroke icons
const features = computed(() => [
	{ title: t('a2a.features.agent.title'), body: t('a2a.features.agent.body'), icon: 'M4 5h16v11H8l-4 4V5z M8 9.5h8 M8 12.5h5' },
	{ title: t('a2a.features.editing.title'), body: t('a2a.features.editing.body'), icon: 'M4 5h16v14H4z M4 15l4.5-4.5 4 4 2.5-2.5L20 17 M15.5 9.5h.01' },
	{ title: t('a2a.features.skills.title'), body: t('a2a.features.skills.body'), icon: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z' },
	{ title: t('a2a.features.more.title'), body: t('a2a.features.more.body'), icon: 'M12 5v14 M5 12h14' },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative min-h-dvh md:min-h-0 lg:min-h-dvh overflow-hidden">
		<div class="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-8 min-h-dvh md:min-h-0 lg:min-h-dvh grid lg:grid-cols-[1fr_minmax(320px,400px)] items-center gap-10 md:gap-8 lg:gap-16 pt-28 pb-24 md:pt-24 md:pb-14 lg:pt-0 lg:pb-0">
			<!-- Left: text -->
			<div class="text-center relative z-20">
				<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
					{{ t('a2a.hero.title') }}
				</h1>
				<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
					{{ t('a2a.hero.sub') }}
				</p>
			</div>

			<!-- Right: portrait image (same slot as Video Packs) -->
			<div v-reveal="3" class="relative z-0 flex items-center justify-center lg:justify-end">
				<div class="absolute w-[380px] h-[560px] md:w-[300px] md:h-[440px] lg:w-[380px] lg:h-[560px] rounded-full bg-[#2a55e5]/10 blur-[90px] pointer-events-none" />
				<img src="/images/page/Roby-blue.webp" alt="A2A Video"
					class="relative w-full max-w-[320px] md:max-w-[260px] lg:max-w-[360px] h-auto rounded-[1.2rem] phone-shadow" />
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Canvas / AI production (black)
       ═══════════════════════════════════════ -->
	<section class="bg-black py-20 lg:py-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div v-reveal class="rounded-2xl overflow-hidden border border-white/8">
				<img src="/images/page/A2A-canvas.webp" :alt="t('a2a.canvas.imageAlt')" loading="lazy" class="block w-full h-auto" />
			</div>
			<div class="max-w-[820px] mx-auto text-center mt-12 lg:mt-14">
				<h2 v-reveal class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-6">
					{{ t('a2a.canvas.title') }}
				</h2>
				<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/75">
					{{ t('a2a.canvas.body') }}
				</p>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — Extra features (dark, card grid)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-20 lg:py-24 border-t border-white/5">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-14 lg:mb-16">
				{{ t('a2a.features.title') }}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(f, i) in features" :key="f.title" v-reveal="i" class="card-dark p-8 flex flex-col">
					<span class="w-12 h-12 rounded-xl bg-[#FE2C55]/15 text-[#FE2C55] flex items-center justify-center mb-6">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
							stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path :d="f.icon" />
						</svg>
					</span>
					<h3 class="text-[18px] font-bold text-white mb-3">{{ f.title }}</h3>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-white/70">{{ f.body }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
