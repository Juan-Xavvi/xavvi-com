<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

withDefaults(defineProps<{
	shadow?: boolean
}>(), {
	shadow: true,
});
</script>

<template>
	<div>
		<div class="relative w-[268px] h-[556px] sm:w-[280px] sm:h-[580px] rounded-[1.2rem] border-white/[0.14] overflow-hidden">
			<div class="absolute inset-[3px] rounded-[1.2rem] overflow-hidden bg-black">
				<slot>
					<div class="h-full relative">
						<video
							class="absolute inset-0 w-full h-full object-cover"
							src="https://app-us-file.xavvi.com/videos/g/63f496b8-887d-4f1a-9222-2d483498fd81-1080p.mp4"
							autoplay muted loop playsinline
						/>

						<!-- Status bar -->
						<div class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-2.5 pb-1.5 text-[10px] font-medium text-white/70">
							<span>9:41</span>
							<div class="flex gap-1 items-center">
								<svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.6"><rect x="0" y="6" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="6" rx="0.5"/><rect x="8" y="2" width="3" height="8" rx="0.5"/><rect x="12" y="0" width="2" height="10" rx="0.5" opacity="0.3"/></svg>
								<svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="white" stroke-width="1" opacity="0.6"><rect x="0.5" y="1.5" width="12" height="7" rx="1.5"/><rect x="13" y="3.5" width="2" height="3" rx="0.5" fill="white" opacity="0.4"/><rect x="1.5" y="2.5" width="8" height="5" rx="0.5" fill="white" opacity="0.5"/></svg>
							</div>
						</div>

						<!-- Top nav tabs -->
						<div class="absolute top-7 left-0 right-0 z-10 flex gap-6 items-center justify-center">
							<span class="text-[11px] text-white font-medium">{{ t('phoneMockup.shorts') }}</span>
							<span class="text-[11px] text-white font-medium">{{ t('phoneMockup.series') }}</span>
							<span class="text-[11px] text-white font-medium">{{ t('phoneMockup.discover') }}</span>
						</div>

						<!-- Bottom gradient -->
						<div class="absolute bottom-0 left-0 right-0 h-[55%] bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

						<!-- Right sidebar -->
						<div class="absolute right-1 z-20 flex flex-col items-center gap-2" style="bottom: 84px;">
							<div class="relative mb-1">
								<div class="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/30">
									<img src="https://social.xavvi.com/icon-192.png" alt="avatar" class="w-full h-full object-cover">
								</div>
								<div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FE2C55] flex items-center justify-center">
									<svg width="8" height="8" viewBox="0 0 12 12" fill="white"><path d="M6 2v8M2 6h8" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
								</div>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
								<span class="text-[8px] text-white font-normal">200K</span>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22l-1.344-4.992z"/></svg>
								<span class="text-[8px] text-white font-normal">3.9K</span>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
								<span class="text-[8px] text-white font-normal">10K</span>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6z"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="white" stroke-width="1.5"/></svg>
								<span class="text-[8px] text-white font-normal">10K</span>
							</div>
						</div>

						<!-- Content area: bottom left -->
						<div class="absolute bottom-12 left-2.5 right-12 z-20">
							<div class="flex items-center gap-2 mb-2.5 bg-white/10 rounded-lg px-1 py-1 max-w-[85%]">
								<div class="w-8 h-8 rounded-md bg-linear-to-br from-[#2a55e5] to-[#7c3aed] shrink-0 flex items-center justify-center">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4z"/></svg>
								</div>
								<span class="text-[9px] text-white/90 font-medium leading-tight truncate">{{ t('phoneMockup.commerceInfra') }}</span>
								<div class="w-5 h-5 rounded-full bg-[#FE2C55] shrink-0 flex items-center justify-center ml-auto">
									<svg width="8" height="8" viewBox="0 0 12 12" fill="white"><path d="M4.5 2l5 4-5 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
								</div>
							</div>

							<div class="flex items-center gap-1.5 mb-1">
								<span class="text-[11px] font-bold text-white">@Xavvi</span>
								<span class="w-3 h-3 rounded-full bg-[#FE8C00] flex items-center justify-center">
									<svg width="7" height="7" viewBox="0 0 12 12" fill="white"><path d="M10 3L4.5 9 2 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
								</span>
								<span class="px-1.5 py-0.5 rounded text-[8px] bg-white/15 text-white/60 font-medium">{{ t('phoneMockup.sponsored') }}</span>
							</div>

							<span class="text-[9.5px] w-full text-left text-white/85 leading-normal mb-1.5 line-clamp-2">{{ t('phoneMockup.buildingGlobal') }}</span>

							<div class="flex items-center gap-1.5">
								<span class="text-[10px] text-white/70 truncate">{{ t('phoneMockup.originalSound') }}</span>
							</div>
						</div>

						<!-- Spinning album disc -->
						<div class="absolute bottom-12 right-1 z-20 w-7 h-7 rounded-full overflow-hidden ring-[1.5px] ring-[#333] animate-[spin_4s_linear_infinite]">
							<svg viewBox="0 0 100 100" class="w-full h-full">
								<circle cx="50" cy="50" r="50" fill="#111"/>
								<circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
								<circle cx="50" cy="50" r="40" fill="none" stroke="#222" stroke-width="0.3"/>
								<circle cx="50" cy="50" r="35" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
								<circle cx="50" cy="50" r="30" fill="none" stroke="#222" stroke-width="0.3"/>
								<circle cx="50" cy="50" r="25" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
								<circle cx="50" cy="50" r="20" fill="none" stroke="#222" stroke-width="0.3"/>
								<circle cx="50" cy="50" r="18" fill="#FE2C55"/>
								<circle cx="50" cy="50" r="12" fill="#111"/>
								<circle cx="50" cy="50" r="4" fill="#333"/>
								<circle cx="50" cy="50" r="1.5" fill="#666"/>
								<circle cx="50" cy="50" r="48" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="1 2"/>
								<circle cx="50" cy="50" r="43" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="0.5 3"/>
								<circle cx="50" cy="50" r="38" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="1 2"/>
								<circle cx="50" cy="50" r="33" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="0.5 3"/>
								<circle cx="50" cy="50" r="28" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="1 2"/>
								<circle cx="50" cy="50" r="23" fill="none" stroke="#333" stroke-width="0.2" stroke-dasharray="0.5 3"/>
							</svg>
						</div>

						<!-- Bottom tab bar -->
						<div class="absolute bottom-0 left-0 right-0 z-20 flex justify-around items-end px-2 pt-1.5 pb-2 bg-black border-t border-white/8">
							<div class="flex flex-col items-center gap-0.5">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2"/></svg>
								<span class="text-[7px] text-white font-semibold">{{ t('phoneMockup.home') }}</span>
							</div>
							<div class="flex flex-col items-center gap-0.5 opacity-50">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
								<span class="text-[7px] text-white/50 font-medium">{{ t('phoneMockup.friends') }}</span>
							</div>
							<div class="relative">
								<div class="w-9 h-6 rounded-md bg-[#FE2C55] flex items-center justify-center">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
								</div>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" opacity="0.45"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
								<span class="text-[7px] text-white/45 font-medium">{{ t('phoneMockup.messages') }}</span>
							</div>
							<div class="flex flex-col items-center gap-0.5">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" opacity="0.45"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
								<span class="text-[7px] text-white/45 font-medium">{{ t('phoneMockup.me') }}</span>
							</div>
						</div>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>
