<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/lib/supabase';

interface NewsPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string | null;
	cover_image: string | null;
	published_at: string;
}

const { t, locale } = useI18n();

const posts = ref<NewsPost[]>([]);
const loading = ref(true);

onMounted(async () => {
	const { data, error } = await supabase
		.from('news')
		.select('*')
		.eq('published', true)
		.order('published_at', { ascending: false });

	if (error) {
		console.error('Failed to load news:', error);
	} else if (data) {
		posts.value = data as NewsPost[];
	}
	loading.value = false;
});

function formatDate(iso: string) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString(locale.value, {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
}
</script>

<template>
	<!-- Hero -->
	<section class="hero-dark pt-32 pb-20 lg:pt-36 lg:pb-24">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
			<h1 v-reveal class="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[#FFFDF9] mb-5">
				{{ t('news.title') }}
			</h1>
			<p v-reveal="1" class="text-[15px] lg:text-[18px] text-[#FFFDF9]/85 leading-[1.7]">
				{{ t('news.subtitle') }}
			</p>
		</div>
	</section>

	<!-- Listing -->
	<section class="bg-[#f4f5f8] py-16 lg:py-20 min-h-[60vh]">
		<div class="max-w-[1200px] mx-auto px-6 lg:px-8">
			<!-- Loading skeleton -->
			<div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div v-for="i in 6" :key="i" class="rounded-2xl overflow-hidden bg-white border border-[#212226]/8">
					<div class="aspect-[16/10] bg-[#212226]/5 animate-pulse"></div>
					<div class="p-6">
						<div class="h-3 w-24 rounded bg-[#212226]/10 animate-pulse mb-4"></div>
						<div class="h-5 w-full rounded bg-[#212226]/10 animate-pulse mb-3"></div>
						<div class="h-3 w-full rounded bg-[#212226]/10 animate-pulse mb-2"></div>
						<div class="h-3 w-3/4 rounded bg-[#212226]/10 animate-pulse"></div>
					</div>
				</div>
			</div>

			<!-- Empty state -->
			<div v-else-if="posts.length === 0" class="text-center py-24">
				<p class="text-[16px] lg:text-[18px] text-[#212226]/70 leading-[1.7]">
					{{ t('news.empty') }}
				</p>
			</div>

			<!-- Posts grid -->
			<div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<RouterLink v-for="(post, i) in posts" :key="post.id" :to="`/news/${post.slug}`" v-reveal="i"
					class="group rounded-2xl overflow-hidden bg-white border border-[#212226]/8 flex flex-col hover:shadow-lg transition-shadow">
					<div v-if="post.cover_image" class="aspect-[16/10] overflow-hidden">
						<img :src="post.cover_image" :alt="post.title"
							class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
					</div>
					<div class="p-6 flex-1 flex flex-col">
						<p class="text-[12px] font-bold tracking-[0.12em] text-[#AE2049] uppercase mb-3">
							{{ formatDate(post.published_at) }}
						</p>
						<h2 class="text-[18px] lg:text-[20px] font-bold text-[#212226] leading-snug mb-3">
							{{ post.title }}
						</h2>
						<p v-if="post.excerpt" class="text-[14px] lg:text-[15px] text-[#212226]/70 leading-[1.7] mb-5 flex-1">
							{{ post.excerpt }}
						</p>
						<span class="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] text-[#AE2049] mt-auto">
							{{ t('news.readMore') }}
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1">
								<path d="M5 12h14M13 5l7 7-7 7" />
							</svg>
						</span>
					</div>
				</RouterLink>
			</div>
		</div>
	</section>
</template>
