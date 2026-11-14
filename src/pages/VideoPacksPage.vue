<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Pack specs (names and lengths are translated; numbers, resolutions and model names are not)
const packs = computed(() => [
	{ name: t('videoPacks.packs.rows.shoppableVideo'), videos: '10', resolution: '720p', model: 'Seedance 2.0', length: t('videoPacks.packs.lengths.sec15') },
	{ name: t('videoPacks.packs.rows.shoppableStory'), videos: '10', resolution: '720p', model: 'Seedance 2.0', length: t('videoPacks.packs.lengths.sec30to60') },
	{ name: t('videoPacks.packs.rows.brandingVideo'), videos: '5', resolution: '720p', model: 'Seedance 2.0', length: t('videoPacks.packs.lengths.min1') },
	{ name: t('videoPacks.packs.rows.brandingVideoPro'), videos: '5', resolution: '1080p', model: 'Seedance 2.5', length: t('videoPacks.packs.lengths.min1') },
	{ name: t('videoPacks.packs.rows.brandMovie'), videos: '20–100', resolution: '720p', model: 'Seedance 2.0', length: t('videoPacks.packs.lengths.perEpisode') },
	{ name: t('videoPacks.packs.rows.brandMoviePro'), videos: '20–100', resolution: '1080p', model: 'Seedance 2.5', length: t('videoPacks.packs.lengths.perEpisode') },
]);

const salesLink = '/contact?form=sales';

const steps = computed(() => [
	{ label: t('videoPacks.how.brief.label'), body: t('videoPacks.how.brief.body') },
	{ label: t('videoPacks.how.match.label'), body: t('videoPacks.how.match.body') },
	{ label: t('videoPacks.how.produce.label'), body: t('videoPacks.how.produce.body') },
	{ label: t('videoPacks.how.deliver.label'), body: t('videoPacks.how.deliver.body') },
]);
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero (dark)
       ═══════════════════════════════════════ -->
	<section class="hero-dark relative min-h-dvh overflow-hidden">
		<div class="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-8 min-h-dvh grid lg:grid-cols-[1fr_minmax(320px,400px)] items-center gap-10 lg:gap-16 pt-28 pb-24 lg:pt-0 lg:pb-0">
			<!-- Left: text -->
			<div class="text-center relative z-20">
				<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
					{{ t('videoPacks.hero.title') }}
				</h1>
				<p v-reveal="2" class="mt-8 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.8] text-white/70 max-w-[700px] mx-auto">
					{{ t('videoPacks.hero.sub') }}
				</p>
				<div v-reveal="3" class="mt-12 flex justify-center relative z-30">
					<RouterLink :to="salesLink" class="btn-primary h-12! px-8! text-[15px]!">
						{{ t('videoPacks.hero.cta') }}
						<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5.5 7.5h5.5m-2.5-3 3 3-3 3" /></svg>
					</RouterLink>
				</div>
			</div>

			<!-- Right: image (same slot as the phone in HomePage hero) -->
			<div v-reveal="4" class="relative z-0 flex items-center justify-center lg:justify-end">
				<div class="absolute w-[380px] h-[560px] rounded-full bg-[#2a55e5]/10 blur-[90px] pointer-events-none" />
				<img src="/images/page/video-packs.webp" alt="Video Packs"
					class="relative w-full max-w-[320px] lg:max-w-[360px] h-auto rounded-[1.2rem] phone-shadow" />
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Pack pricing table (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-14">
				{{ t('videoPacks.packs.title') }}
			</h2>
			<!-- Desktop / tablet: table -->
			<div v-reveal class="hidden md:block card-light shadow-sm overflow-hidden">
				<table class="w-full text-left">
					<thead>
						<tr class="bg-[#212226] text-[#FFFDF9] text-[12px] font-bold tracking-[0.14em] uppercase">
							<th scope="col" class="px-6 py-4">{{ t('videoPacks.packs.cols.pack') }}</th>
							<th scope="col" class="px-4 py-4">{{ t('videoPacks.packs.cols.videos') }}</th>
							<th scope="col" class="px-4 py-4">{{ t('videoPacks.packs.cols.resolution') }}</th>
							<th scope="col" class="px-4 py-4">{{ t('videoPacks.packs.cols.model') }}</th>
							<th scope="col" class="px-6 py-4">{{ t('videoPacks.packs.cols.length') }}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="pack in packs" :key="pack.name" class="border-t border-[#212226]/8 text-[15px] text-text-2">
							<th scope="row" class="px-6 py-5 font-bold text-[#212226]">{{ pack.name }}</th>
							<td class="px-4 py-5">{{ pack.videos }}</td>
							<td class="px-4 py-5">{{ pack.resolution }}</td>
							<td class="px-4 py-5">{{ pack.model }}</td>
							<td class="px-6 py-5">{{ pack.length }}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Mobile: one card per pack -->
			<div class="md:hidden grid grid-cols-1 gap-4">
				<div v-for="(pack, i) in packs" :key="pack.name" v-reveal="i" class="card-light shadow-sm p-6">
					<h3 class="text-[18px] font-bold text-[#212226] mb-4">{{ pack.name }}</h3>
					<dl class="grid grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
						<div><dt class="text-[11px] font-bold tracking-[0.14em] uppercase text-text-2/70">{{ t('videoPacks.packs.cols.videos') }}</dt><dd class="text-[#212226]">{{ pack.videos }}</dd></div>
						<div><dt class="text-[11px] font-bold tracking-[0.14em] uppercase text-text-2/70">{{ t('videoPacks.packs.cols.resolution') }}</dt><dd class="text-[#212226]">{{ pack.resolution }}</dd></div>
						<div><dt class="text-[11px] font-bold tracking-[0.14em] uppercase text-text-2/70">{{ t('videoPacks.packs.cols.model') }}</dt><dd class="text-[#212226]">{{ pack.model }}</dd></div>
						<div><dt class="text-[11px] font-bold tracking-[0.14em] uppercase text-text-2/70">{{ t('videoPacks.packs.cols.length') }}</dt><dd class="text-[#212226]">{{ pack.length }}</dd></div>
					</dl>
				</div>
			</div>

			<div v-reveal class="mt-10 lg:mt-12 flex justify-center">
				<RouterLink :to="salesLink"
					class="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#2a55e5] hover:bg-[#2347c4] text-[#FFFDF9] font-semibold text-[15px] tracking-wider transition-colors">
					{{ t('videoPacks.packs.talkToSales') }}
				</RouterLink>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 3 — How It Works (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-22">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] text-center leading-tight mb-14 lg:mb-16">
				{{ t('videoPacks.how.title') }}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(step, i) in steps" :key="step.label" v-reveal="i"
					class="card-light shadow-sm p-8 flex flex-col">
					<span class="text-[40px] font-extrabold leading-none text-[#FE2C55]/20 mb-6">0{{ i + 1 }}</span>
					<span class="inline-block self-start px-4 py-1.5 rounded-full bg-[#FE2C55] text-[#FFFDF9] text-[12px] font-bold tracking-[0.18em] mb-5">
						{{ step.label }}
					</span>
					<p class="text-[14px] lg:text-[15px] leading-[1.7] text-text-2">
						{{ step.body }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 4 — Creator optional (light)
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-20 lg:py-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
			<div class="text-center lg:text-left">
				<h2 v-reveal class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] leading-tight tracking-tight mb-6">
					{{ t('videoPacks.creator.title') }}
				</h2>
				<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-text-2">
					{{ t('videoPacks.creator.body') }}
				</p>
			</div>
			<div v-reveal="2" class="rounded-2xl overflow-hidden shadow-sm">
				<img src="/images/page/creator-vids.webp" :alt="t('videoPacks.creator.title')" loading="lazy" class="block w-full h-auto" />
			</div>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 5 — CTA strip (dark)
       ═══════════════════════════════════════ -->
	<section class="bg-[#111111] py-20 lg:py-24">
		<div class="max-w-[820px] mx-auto px-6 lg:px-8 text-center">
			<h2 v-reveal class="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[#FFFDF9] leading-tight tracking-tight mb-4">
				{{ t('videoPacks.cta.title') }}
			</h2>
			<p v-reveal="1" class="text-[15px] lg:text-[17px] leading-[1.8] text-[#FFFDF9]/70 mb-10">
				{{ t('videoPacks.cta.sub') }}
			</p>
			<div v-reveal="2">
				<RouterLink :to="salesLink" class="btn-primary h-12! px-8! text-[15px]!">
					{{ t('videoPacks.cta.button') }}
				</RouterLink>
			</div>
		</div>
	</section>
</template>
