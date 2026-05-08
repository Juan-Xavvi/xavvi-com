<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();

const categories = [
	{ id: 'creators', color: '#AE2049' },
	{ id: 'brands', color: '#0ea5e9' },
	{ id: 'agencies', color: '#7C3AED' },
	{ id: 'media', color: '#0f766e' },
	{ id: 'investors', color: '#d97706' },
	{ id: 'general', color: '#374151' },
] as const;

type CategoryId = (typeof categories)[number]['id'];

// Pre-select category from ?from=brands etc.
const fromParam = typeof route.query.from === 'string' ? route.query.from : '';
const initial = (categories.find((c) => c.id === fromParam)?.id ?? null) as CategoryId | null;
const selected = ref<CategoryId | null>(initial);

const form = reactive({
	name: '',
	email: '',
	phone: '',
	company: '',
	website: '',
	subject: '',
	message: '',
});

const loading = ref(false);
const success = ref(false);
const errorMsg = ref('');
const formRef = ref<HTMLFormElement | null>(null);

async function selectCategory(id: CategoryId) {
	selected.value = id;
	success.value = false;
	errorMsg.value = '';
	await nextTick();
	formRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function submit() {
	if (loading.value || !selected.value) return;
	loading.value = true;
	errorMsg.value = '';
	try {
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				category: selected.value,
				name: form.name,
				email: form.email,
				phone: form.phone,
				company: form.company,
				website: form.website,
				subject: form.subject,
				message: form.message,
			}),
		});
		if (!res.ok) {
			const data = await res.json().catch(() => ({}));
			throw new Error(data.error || 'Failed to send');
		}
		success.value = true;
	} catch (err) {
		errorMsg.value = (err as Error).message || t('contact.error');
	} finally {
		loading.value = false;
	}
}
</script>

<template>
	<!-- ═══════════════════════════════════════
       SECTION 1 — Hero
       ═══════════════════════════════════════ -->
	<section class="hero-dark pt-32 pb-16 lg:pt-36 lg:pb-20">
		<div class="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
			<img v-reveal src="/images/page/Xavvi-icon.png" alt="Xavvi" class="h-[120px] w-auto mx-auto mb-8" />
			<h1 v-reveal="1" class="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[#FFFDF9] mb-6">
				{{ t('contact.title') }}
			</h1>
			<p v-reveal="2" class="text-[16px] lg:text-[18px] leading-[1.7] text-[#FFFDF9] whitespace-pre-line">
				{{ t('contact.greeting') }}
			</p>
		</div>
	</section>

	<!-- ═══════════════════════════════════════
       SECTION 2 — Category buttons
       ═══════════════════════════════════════ -->
	<section class="bg-[#f4f5f8] py-16 lg:py-20">
		<div class="max-w-[1000px] mx-auto px-6 lg:px-8">
			<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
				<button
					v-for="cat in categories"
					:key="cat.id"
					@click="selectCategory(cat.id)"
					:style="{ backgroundColor: cat.color }"
					class="relative min-h-[80px] rounded-2xl text-[#FFFDF9] font-bold text-[15px] lg:text-[18px] flex items-center justify-center px-5 py-4 transition-all hover:opacity-90 cursor-pointer"
					:class="selected === cat.id ? 'ring-4 ring-[#FFFDF9] ring-offset-4 ring-offset-[#f4f5f8] scale-[1.02]' : ''"
				>
					<span>{{ t(`contact.categories.${cat.id}`) }}</span>
					<span v-if="selected === cat.id" class="absolute top-3 right-3" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="5 12 10 17 19 7" />
						</svg>
					</span>
				</button>
			</div>

			<!-- ═══════════════════════════════════════
                 SECTION 3 — Form (slides in)
                 ═══════════════════════════════════════ -->
			<Transition name="form-fade">
				<div v-if="selected" ref="formRef" class="mt-12 lg:mt-16 max-w-[640px] mx-auto">
					<!-- Success state -->
					<div v-if="success" class="text-center py-12">
						<p class="text-[#AE2049] font-bold text-[clamp(1.5rem,3vw,2rem)] leading-tight">
							✓ {{ t('contact.success') }}
						</p>
					</div>

					<!-- Form -->
					<form v-else @submit.prevent="submit" class="space-y-5">
						<div class="grid sm:grid-cols-2 gap-5">
							<input v-model="form.name" type="text" required maxlength="200"
								:placeholder="t('contact.form.name') + ' *'"
								class="field" />
							<input v-model="form.email" type="email" required maxlength="320"
								:placeholder="t('contact.form.email') + ' *'"
								class="field" />
						</div>
						<div class="grid sm:grid-cols-2 gap-5">
							<input v-model="form.phone" type="tel" maxlength="40"
								:placeholder="`${t('contact.form.phone')} ${t('contact.form.optional')}`"
								class="field" />
							<input v-model="form.company" type="text" maxlength="200"
								:placeholder="`${t('contact.form.company')} ${t('contact.form.optional')}`"
								class="field" />
						</div>
						<input v-model="form.website" type="url" maxlength="500"
							:placeholder="`${t('contact.form.website')} ${t('contact.form.optional')}`"
							class="field" />
						<input v-model="form.subject" type="text" required maxlength="300"
							:placeholder="t('contact.form.subject') + ' *'"
							class="field" />
						<textarea v-model="form.message" required maxlength="5000" rows="6"
							:placeholder="t('contact.form.message') + ' *'"
							class="field resize-y"></textarea>

						<button type="submit" :disabled="loading"
							class="w-full h-12 rounded-lg bg-[#AE2049] hover:bg-[#971b3f] text-[#FFFDF9] font-bold tracking-wider text-[15px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
							{{ loading ? t('contact.form.sending') : t('contact.form.submit') }}
						</button>

						<p v-if="errorMsg" class="text-red-600 text-center text-[14px] mt-2">
							{{ t('contact.error') }}
						</p>
					</form>
				</div>
			</Transition>
		</div>
	</section>
</template>

<style scoped>
.field {
	width: 100%;
	padding: 0.75rem 1rem;
	border-radius: 0.5rem;
	background: #ffffff;
	border: 1px solid rgba(33, 34, 38, 0.15);
	color: #212226;
	font-size: 15px;
	font-family: inherit;
	transition: border-color 0.15s, box-shadow 0.15s;
}
.field::placeholder {
	color: rgba(33, 34, 38, 0.45);
}
.field:focus {
	outline: none;
	border-color: #AE2049;
	box-shadow: 0 0 0 3px rgba(174, 32, 73, 0.12);
}

.form-fade-enter-active,
.form-fade-leave-active {
	transition: opacity 0.35s ease, transform 0.35s ease;
}
.form-fade-enter-from {
	opacity: 0;
	transform: translateY(12px);
}
.form-fade-leave-to {
	opacity: 0;
	transform: translateY(-12px);
}
</style>
