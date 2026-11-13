<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { supabase } from '@/lib/supabase';

// Section background; the card itself always stays cream so it reads on light or dark pages.
withDefaults(defineProps<{ bg?: string }>(), { bg: 'bg-[#f4f5f8]' });

// News teaser slider — rotates through the 3 most recent published news items
type NewsTeaserItem = { title: string; slug: string | null };
const newsItems = ref<NewsTeaserItem[]>([{ title: 'Xavvi Launches AI Credits Ecosystem', slug: null }]);
const newsSlide = ref(0);
const currentNews = computed(() => newsItems.value[newsSlide.value % newsItems.value.length]);
let newsTimer: number | undefined;

onMounted(async () => {
	try {
		const { data, error } = await supabase
			.from('news')
			.select('title, slug')
			.eq('published', true)
			.order('published_at', { ascending: false })
			.limit(3);
		if (!error && data?.length) {
			newsItems.value = data.filter((n) => n.title).map((n) => ({ title: n.title, slug: n.slug ?? null }));
		}
	} catch {
		// keep fallback
	}

	if (newsItems.value.length > 1) {
		newsTimer = window.setInterval(() => {
			newsSlide.value = (newsSlide.value + 1) % newsItems.value.length;
		}, 5000);
	}
});
onUnmounted(() => {
	if (newsTimer) window.clearInterval(newsTimer);
});
</script>

<template>
	<section :class="[bg, 'pt-10 lg:pt-14 pb-2 lg:pb-4']">
		<div class="max-w-[800px] mx-auto px-6">
			<Transition name="news-fade" mode="out-in">
				<div v-if="currentNews" :key="newsSlide"
					class="bg-[#FFFDF9] border border-[#212226] rounded-2xl px-6 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
					<span class="text-[#FE2C55] font-extrabold text-[18px] tracking-[0.12em]">NEWS</span>
					<div class="hidden lg:block w-px self-stretch bg-[#212226]" aria-hidden="true"></div>
					<p class="text-[#212226] text-[15px] lg:text-[17px] leading-snug flex-1 text-center lg:text-left">
						{{ currentNews.title }}
					</p>
					<RouterLink :to="currentNews.slug ? `/news/${currentNews.slug}` : '/news'" aria-label="Read news"
						class="w-10 h-10 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14M13 5l7 7-7 7" />
						</svg>
					</RouterLink>
				</div>
			</Transition>
		</div>
	</section>
</template>

<style scoped>
.news-fade-enter-active,
.news-fade-leave-active {
	transition: opacity 0.2s ease;
}
.news-fade-enter-from,
.news-fade-leave-to {
	opacity: 0;
}
</style>
