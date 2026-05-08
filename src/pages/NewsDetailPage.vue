<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/lib/supabase';

interface NewsPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string | null;
	content: string | null;
	cover_image: string | null;
	published_at: string;
}

const route = useRoute();
const { t, locale } = useI18n();

const post = ref<NewsPost | null>(null);
const loading = ref(true);
const notFound = ref(false);

async function load(slug: string) {
	loading.value = true;
	notFound.value = false;
	post.value = null;

	const { data, error } = await supabase
		.from('news')
		.select('*')
		.eq('slug', slug)
		.eq('published', true)
		.single();

	if (error || !data) {
		notFound.value = true;
	} else {
		post.value = data as NewsPost;
		if (post.value.title) document.title = `${post.value.title} – Xavvi`;
	}
	loading.value = false;
}

onMounted(() => {
	load(route.params.slug as string);
});

watch(
	() => route.params.slug,
	(slug) => {
		if (typeof slug === 'string') load(slug);
	}
);

function formatDate(iso: string) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString(locale.value, {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
}
</script>

<template>
	<!-- Loading state -->
	<section v-if="loading" class="hero-dark pt-32 pb-20 lg:pt-36 lg:pb-24">
		<div class="max-w-[800px] mx-auto px-6 lg:px-8">
			<div class="h-3 w-32 rounded bg-[#FFFDF9]/10 animate-pulse mb-8"></div>
			<div class="h-10 w-full rounded bg-[#FFFDF9]/10 animate-pulse mb-3"></div>
			<div class="h-10 w-2/3 rounded bg-[#FFFDF9]/10 animate-pulse"></div>
		</div>
	</section>

	<!-- Not found -->
	<section v-else-if="notFound" class="hero-dark pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[60vh] flex items-center">
		<div class="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
			<h1 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#FFFDF9] mb-6">
				{{ t('news.notFound') }}
			</h1>
			<RouterLink to="/news"
				class="inline-flex items-center gap-2 text-[14px] font-bold tracking-[0.12em] text-[#FE2C55] hover:text-[#EF2950] transition-colors">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<path d="M19 12H5M11 5l-7 7 7 7" />
				</svg>
				{{ t('news.backToNews') }}
			</RouterLink>
		</div>
	</section>

	<template v-else-if="post">
		<!-- Hero -->
		<section class="hero-dark pt-32 pb-16 lg:pt-36 lg:pb-20">
			<div class="max-w-[800px] mx-auto px-6 lg:px-8">
				<RouterLink to="/news"
					class="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] text-[#FFFDF9]/70 hover:text-[#FFFDF9] transition-colors mb-8">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M19 12H5M11 5l-7 7 7 7" />
					</svg>
					{{ t('news.backToNews') }}
				</RouterLink>
				<p v-reveal class="text-[12px] lg:text-[13px] font-bold tracking-[0.18em] text-[#FE2C55] uppercase mb-4">
					{{ formatDate(post.published_at) }}
				</p>
				<h1 v-reveal="1" class="text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.15] tracking-tight text-[#FFFDF9]">
					{{ post.title }}
				</h1>
			</div>
		</section>

		<!-- Article -->
		<section class="bg-[#f4f5f8] py-12 lg:py-16">
			<div class="max-w-[800px] mx-auto px-6 lg:px-8">
				<div v-if="post.cover_image" v-reveal class="rounded-2xl overflow-hidden mb-10 lg:mb-12">
					<img :src="post.cover_image" :alt="post.title" class="block w-full h-auto object-cover" />
				</div>
				<article v-reveal="1" class="news-content text-[16px] lg:text-[17px] text-[#212226] leading-[1.8]"
					v-html="post.content" />
			</div>
		</section>
	</template>
</template>

<style scoped>
.news-content :deep(h2) {
	font-size: 1.6rem;
	font-weight: 700;
	color: #212226;
	margin-top: 2rem;
	margin-bottom: 1rem;
	line-height: 1.3;
}
.news-content :deep(h3) {
	font-size: 1.3rem;
	font-weight: 700;
	color: #212226;
	margin-top: 1.75rem;
	margin-bottom: 0.75rem;
	line-height: 1.35;
}
.news-content :deep(p) {
	margin-bottom: 1.25rem;
}
.news-content :deep(a) {
	color: #AE2049;
	text-decoration: underline;
	text-underline-offset: 3px;
}
.news-content :deep(a:hover) {
	color: #FE2C55;
}
.news-content :deep(ul),
.news-content :deep(ol) {
	margin-bottom: 1.25rem;
	padding-left: 1.5rem;
}
.news-content :deep(ul) { list-style: disc; }
.news-content :deep(ol) { list-style: decimal; }
.news-content :deep(li) { margin-bottom: 0.4rem; }
.news-content :deep(blockquote) {
	border-left: 3px solid #AE2049;
	padding-left: 1.25rem;
	font-style: italic;
	color: #212226;
	margin: 1.5rem 0;
}
.news-content :deep(img) {
	border-radius: 12px;
	margin: 1.5rem 0;
}
.news-content :deep(strong) { font-weight: 700; }
.news-content :deep(code) {
	background: #21222610;
	padding: 0.15em 0.4em;
	border-radius: 4px;
	font-size: 0.9em;
}
</style>
