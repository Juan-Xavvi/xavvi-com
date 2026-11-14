<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const partners = [
	{ name: 'ShareViral', logo: '/images/page/shareviral-logo.png', href: 'https://shareviral.cash/' },
	{ name: 'Phoenix New Media', logo: '/images/page/ifeng-na-logo.png', href: 'https://www.ifeng.com/', caption: 'Phoenix New Media' },
	{ name: 'FaceBank', logo: '/images/page/FaceBank.png', href: 'https://journeyentertainment.net/facebank/' },
	{ name: 'Quilty', logo: '/images/page/quilty.png', href: 'https://quilty.app/' },
	{ name: 'KSA Entertainment', logo: '/images/page/KSA-entertainment.png', href: 'https://www.ksaent.com/' },
	{ name: 'American Film Association', logo: '/images/page/AFA.png', href: 'https://americanfilmassociation.com/' },
];
</script>

<template>
	<section class="bg-white py-20 lg:py-24">
		<div class="max-w-[1100px] mx-auto px-6 lg:px-8">
			<h2 v-reveal
				class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#212226] text-center leading-tight mb-12 lg:mb-16">
				{{ t('footer.partners') }}
			</h2>
			<!-- 2 per row on mobile, 2 rows of 3 from md up -->
			<div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-16 lg:gap-y-14 items-center">
				<a v-for="(p, i) in partners" :key="p.href" v-reveal="i % 3" :href="p.href" target="_blank"
					rel="noopener noreferrer" :aria-label="p.name"
					class="partner group flex flex-col items-center justify-center gap-3">
					<img :src="p.logo" :alt="p.name" loading="lazy"
						class="h-[60px] lg:h-[72px] w-auto max-w-full object-contain rounded-lg" />
					<span v-if="p.caption" class="text-[13px] font-semibold text-text-2 group-hover:text-[#212226] transition-colors">
						{{ p.caption }}
					</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
.partner img {
	filter: grayscale(1);
	opacity: 0.75;
	transition: filter 0.3s ease, opacity 0.3s ease;
}
.partner:hover img,
.partner:focus-visible img {
	filter: grayscale(0);
	opacity: 1;
}
</style>
