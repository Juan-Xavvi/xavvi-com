<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import QrPopover from '@/components/QrPopover.vue';
import LangSwitcher from '@/components/LangSwitcher.vue';

const { t } = useI18n();

const mobileOpen = ref(false);

const links = computed(() => [
	{ to: '/micro-dramas', label: t('nav.microDramas') },
	{ to: '/video-packs', label: t('nav.videoPacks') },
	{ to: '/brand-lab', label: t('nav.brandLab') },
	{ to: '/ai-credits', label: t('nav.aiCredits') },
	{ to: '/news', label: t('nav.news') },
]);
</script>

<template>
	<nav class="nav-wrap fixed top-0 inset-x-0 z-50">
		<div class="max-w-[1680px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
			<div class="flex items-center gap-30">
				<RouterLink to="/" class="flex items-center group shrink-0">
					<img src="/xavvi-logo.png" alt="Xavvi" class="h-8 w-auto" />
				</RouterLink>
				<div class="hidden md:flex items-center gap-12">
					<template v-for="link in links" :key="link.to">
						<RouterLink :to="link.to!"
							class="nav-link text-[16px] font-medium text-white hover:text-white/80 transition-colors">
							{{ link.label }}
						</RouterLink>
					</template>
				</div>
			</div>

			<div class="hidden sm:flex items-center gap-3">
				<LangSwitcher />
				<QrPopover position="bottom">
					<button class="btn-primary h-8! px-4! text-[13px]! cursor-pointer">
						{{ t('nav.getApp') }}
					</button>
				</QrPopover>
			</div>

			<button class="md:hidden relative w-8 h-8 flex items-center justify-center"
				@click="mobileOpen = !mobileOpen" aria-label="Menu">
				<svg v-if="!mobileOpen" width="20" height="20" fill="none" stroke="#FFFFFF" stroke-width="1.5"
					stroke-linecap="round">
					<path d="M3 5.5h14M3 10h14M3 14.5h14" />
				</svg>
				<svg v-else width="20" height="20" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round">
					<path d="M5 5l10 10M5 15L15 5" />
				</svg>
			</button>
		</div>

	</nav>

	<Teleport to="body">
		<Transition name="mobile-menu">
			<div v-if="mobileOpen" class="md:hidden fixed inset-0 top-20 z-45" style="background-color: #0F0537">
				<div class="flex flex-col px-6 pt-8 space-y-1">
					<template v-for="link in links" :key="link.to">
						<RouterLink :to="link.to!"
							class="block py-4 text-[22px] font-semibold text-white/80 hover:text-white border-b border-white/5 transition-colors"
							@click="mobileOpen = false">
							{{ link.label }}
						</RouterLink>
					</template>
				</div>
				<div class="px-6 mt-8">
					<a href="https://www.xavvi.com/xavvi-1.0.10.apk" class="btn-primary w-full h-12! text-[16px]! block text-center"
						@click="mobileOpen = false">
						{{ t('nav.downloadXavvi') }}
					</a>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.mobile-menu-enter-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-leave-active {
	transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from {
	opacity: 0;
	transform: translateY(-8px);
}

.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}
</style>
