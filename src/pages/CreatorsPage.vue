<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// ── Hero slider ─────────────────────────────
const slides = [
	{ src: '/images/page/actors.jpg', labelKey: 'creators.hero.slides.actors', color: '#00f0ff' },
	{ src: '/images/page/musicians.jpg', labelKey: 'creators.hero.slides.musicians', color: '#ff2d55' },
	{ src: '/images/page/influencers.jpg', labelKey: 'creators.hero.slides.influencers', color: '#ffe600' },
	{ src: '/images/page/athletes.jpg', labelKey: 'creators.hero.slides.athletes', color: '#39ff14' },
];

const currentSlide = ref(0);
let slideTimer: number | undefined;

onMounted(() => {
	slideTimer = window.setInterval(() => {
		currentSlide.value = (currentSlide.value + 1) % slides.length;
	}, 1500);
});
onUnmounted(() => {
	if (slideTimer) window.clearInterval(slideTimer);
});

const currentLabelStyle = computed(() => {
	const c = slides[currentSlide.value].color;
	return {
		color: c,
		textShadow: `0 0 4px ${c}, 0 0 10px ${c}, 0 0 20px ${c}`,
	};
});

// ── Hero bullets ────────────────────────────
const heroBullets = computed(() => [
	t('creators.hero.b1'),
	t('creators.hero.b2'),
	t('creators.hero.b3'),
	t('creators.hero.b4'),
	t('creators.hero.b5'),
]);

// ── Tabs ───────────────────────────────────
const activeTab = ref<'pricing' | 'full'>('pricing');
const tabs = [
	{ id: 'pricing' as const, labelKey: 'creators.tabs.pricing.label' },
	{ id: 'full' as const, labelKey: 'creators.tabs.full.label' },
];
const pricingItems = computed(() => [
	t('creators.tabs.pricing.i1'),
	t('creators.tabs.pricing.i2'),
	t('creators.tabs.pricing.i3'),
]);
const fullItems = computed(() => [
	t('creators.tabs.full.i1'),
	t('creators.tabs.full.i2'),
	t('creators.tabs.full.i3'),
]);

// ── Benefits ───────────────────────────────
const benefits = computed(() => [
	t('creators.benefits.b1'),
	t('creators.benefits.b2'),
	t('creators.benefits.b3'),
	t('creators.benefits.b4'),
	t('creators.benefits.b5'),
	t('creators.benefits.b6'),
	t('creators.benefits.b7'),
	t('creators.benefits.b8'),
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-black pt-32 pb-20 lg:pt-36 lg:pb-28">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<!-- Left: text -->
				<div v-reveal class="text-[#FFFCF3]">
					<h1 class="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-8">
						{{ t('creators.hero.title') }}
					</h1>
					<p class="text-[16px] lg:text-[18px] leading-[1.8] mb-8">
						{{ t('creators.hero.intro') }}
					</p>
					<ul class="space-y-3">
						<li v-for="(b, i) in heroBullets" :key="i"
							class="flex items-start gap-3 text-[15px] lg:text-[16px] leading-[1.7]">
							<span class="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#AE2049] shrink-0"></span>
							<span>{{ b }}</span>
						</li>
					</ul>
				</div>

				<!-- Right: auto-rotating slider -->
				<div v-reveal="1" class="flex flex-col items-center">
					<div class="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-2xl">
						<Transition name="slide-fade">
							<img :key="currentSlide" :src="slides[currentSlide].src"
								:alt="t(slides[currentSlide].labelKey)"
								class="absolute inset-0 w-full h-full object-cover" />
						</Transition>
					</div>
					<p class="mt-6 text-center font-extrabold text-[28px] lg:text-[34px] tracking-[0.18em]"
						:style="currentLabelStyle">
						{{ t(slides[currentSlide].labelKey) }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Tabs + support (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1100px] mx-auto px-6 lg:px-8">
			<!-- Tab bar -->
			<div v-reveal class="flex border-b border-[#212226]/15">
				<button v-for="tab in tabs" :key="tab.id"
					@click="activeTab = tab.id"
					class="relative px-6 lg:px-8 py-4 font-semibold text-[14px] lg:text-[15px] tracking-[0.14em] transition-colors cursor-pointer"
					:class="activeTab === tab.id ? 'text-[#212226]' : 'text-[#212226]/45 hover:text-[#212226]/80'">
					{{ t(tab.labelKey) }}
					<span v-if="activeTab === tab.id"
						class="absolute -bottom-px left-0 right-0 h-[2px] bg-[#AE2049]"></span>
				</button>
			</div>

			<!-- Tab panels -->
			<div class="mt-10 min-h-[180px]">
				<Transition name="tab-fade" mode="out-in">
					<!-- Pricing Control -->
					<div v-if="activeTab === 'pricing'" key="pricing"
						class="flex flex-col sm:flex-row gap-5 items-start">
						<div
							class="shrink-0 w-12 h-12 rounded-xl bg-[#AE2049]/10 flex items-center justify-center text-[#AE2049]">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
								<line x1="7" y1="7" x2="7.01" y2="7" />
							</svg>
						</div>
						<div>
							<p class="text-[15px] lg:text-[16px] text-[#212226] leading-[1.7] mb-3 font-medium">
								{{ t('creators.tabs.pricing.intro') }}
							</p>
							<ul class="space-y-2">
								<li v-for="(item, i) in pricingItems" :key="i"
									class="flex items-start gap-3 text-[15px] lg:text-[16px] text-[#212226]/80 leading-[1.7]">
									<span class="text-[#AE2049] font-bold mt-0.5">—</span>
									<span>{{ item }}</span>
								</li>
							</ul>
						</div>
					</div>

					<!-- Full Control -->
					<div v-else key="full" class="flex flex-col sm:flex-row gap-5 items-start">
						<div
							class="shrink-0 w-12 h-12 rounded-xl bg-[#AE2049]/10 flex items-center justify-center text-[#AE2049]">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							</svg>
						</div>
						<div>
							<p class="text-[15px] lg:text-[16px] text-[#212226] leading-[1.7] mb-3 font-medium">
								{{ t('creators.tabs.full.intro') }}
							</p>
							<ul class="space-y-2">
								<li v-for="(item, i) in fullItems" :key="i"
									class="flex items-start gap-3 text-[15px] lg:text-[16px] text-[#212226]/80 leading-[1.7]">
									<span class="text-[#AE2049] font-bold mt-0.5">—</span>
									<span>{{ item }}</span>
								</li>
							</ul>
						</div>
					</div>
				</Transition>
			</div>

			<!-- Support sub-section -->
			<div v-reveal="1" class="mt-16 pt-12 border-t border-[#212226]/10">
				<h3 class="text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#212226] mb-4">
					{{ t('creators.support.title') }}
				</h3>
				<p class="text-[15px] lg:text-[17px] text-[#212226]/80 leading-[1.8] max-w-[800px]">
					{{ t('creators.support.body') }}
				</p>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — Monetize (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFCF3] text-center leading-tight mb-14 lg:mb-16">
				{{ t('creators.monetize.title') }}
			</h2>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div v-reveal="0"
					class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col">
					<div
						class="w-14 h-14 rounded-xl bg-[#AE2049]/15 flex items-center justify-center text-[#AE2049] mb-6">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="6" width="20" height="14" rx="2" />
							<line x1="2" y1="11" x2="22" y2="11" />
						</svg>
					</div>
					<h3 class="text-[18px] lg:text-[20px] font-bold text-[#FFFCF3] mb-3">
						{{ t('creators.monetize.daily.label') }}
					</h3>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFCF3]/80">
						{{ t('creators.monetize.daily.desc') }}
					</p>
				</div>
				<div v-reveal="1"
					class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col">
					<div
						class="w-14 h-14 rounded-xl bg-[#AE2049]/15 flex items-center justify-center text-[#AE2049] mb-6">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 9l1-5h16l1 5" />
							<path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
							<path d="M9 21V14h6v7" />
						</svg>
					</div>
					<h3 class="text-[18px] lg:text-[20px] font-bold text-[#FFFCF3] mb-3">
						{{ t('creators.monetize.store.label') }}
					</h3>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFCF3]/80">
						{{ t('creators.monetize.store.desc') }}
					</p>
				</div>
				<div v-reveal="2"
					class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col">
					<div
						class="w-14 h-14 rounded-xl bg-[#AE2049]/15 flex items-center justify-center text-[#AE2049] mb-6">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10" />
							<path d="M12 6v12" />
							<path d="M16 9.5c0-1.4-1.8-2.5-4-2.5s-4 1-4 2.5 1.8 2.5 4 2.5 4 1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5" />
						</svg>
					</div>
					<h3 class="text-[18px] lg:text-[20px] font-bold text-[#FFFCF3] mb-3">
						{{ t('creators.monetize.token.label') }}
					</h3>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-[#FFFCF3]/80">
						{{ t('creators.monetize.token.desc') }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Key Benefits (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-14 lg:mb-16">
				{{ t('creators.benefits.title') }}
			</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
				<div v-for="(b, i) in benefits" :key="i" v-reveal="i" class="flex items-start gap-4">
					<div
						class="shrink-0 w-7 h-7 rounded-full bg-[#AE2049]/10 flex items-center justify-center text-[#AE2049]">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="5 12 10 17 19 7" />
						</svg>
					</div>
					<p class="text-[15px] lg:text-[16px] text-[#212226] leading-[1.6]">{{ b }}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — Legacy banner
       ═══════════════════════════════════════ -->
	<section class="relative w-full overflow-hidden">
		<img src="/images/page/creator-legacy.jpg" alt=""
			class="absolute inset-0 w-full h-full object-cover object-left-top" aria-hidden="true" />
		<div class="absolute inset-0 bg-black/55"></div>
		<div class="relative z-10 min-h-[500px] flex items-center justify-center px-6 py-20 lg:py-28">
			<div class="text-center max-w-[800px]">
				<h2 v-reveal
					class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-[#FFFCF3] leading-tight tracking-tight mb-6">
					{{ t('creators.legacy.title') }}
				</h2>
				<p v-reveal="1" class="text-[15px] lg:text-[18px] leading-[1.8] text-[#FFFCF3] mb-3">
					{{ t('creators.legacy.p1') }}
				</p>
				<p v-reveal="2" class="text-[15px] lg:text-[18px] leading-[1.8] text-[#FFFCF3]">
					{{ t('creators.legacy.p2') }}
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: opacity 0.6s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
}

.tab-fade-enter-active,
.tab-fade-leave-active {
	transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
	opacity: 0;
	transform: translateY(6px);
}
.tab-fade-leave-to {
	opacity: 0;
	transform: translateY(-6px);
}
</style>
