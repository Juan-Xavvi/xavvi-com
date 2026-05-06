<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import PhoneMockup from '@/components/PhoneMockup.vue';

const { t } = useI18n();

withDefaults(defineProps<{
	position?: 'top' | 'bottom'
}>(), {
	position: 'top',
});

const apkQr = '/qr/android.png';
const iosQr = '/qr/ios.png';

const open = ref(false);
let timer: ReturnType<typeof setTimeout>;
function show() { clearTimeout(timer); open.value = true; }
function hide() { timer = setTimeout(() => { open.value = false; }, 150); }
</script>

<template>
	<div class="relative" @mouseenter="show" @mouseleave="hide">
		<slot />

		<Transition name="qr-pop">
			<div v-if="open" class="qr-wrap" :class="position === 'bottom' ? 'qr-below' : 'qr-above'" @mouseenter="show" @mouseleave="hide">
				<div class="qr-card">
					<div class="flex gap-7">
						<!-- Left: title + dual QR -->
						<div class="flex-1 min-w-0">
							<h3 class="text-[20px] font-bold text-white leading-tight">
								{{ t('qrPopover.title') }}
							</h3>
							<p class="mt-1.5 text-[13px] text-white/45 leading-relaxed">
								{{ t('qrPopover.subtitle') }}
							</p>

							<div style="display:flex;gap:20px;margin-top:28px">
								<div style="width:130px">
									<div class="rounded-xl bg-white p-2.5" style="height:130px">
										<img :src="iosQr" alt="iOS" class="rounded-lg" style="width:100%;height:100%;display:block" />
									</div>
									<div class="qr-label mt-2!">
										<svg class="ios-icon" viewBox="1 0 22 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
										<span class="mt-0.5">iOS</span>
									</div>
								</div>
								<div style="width:130px">
									<div class="rounded-xl bg-white p-2.5" style="height:130px">
										<img :src="apkQr" alt="Android" class="rounded-lg" style="width:100%;height:100%;display:block" />
									</div>
									<div class="qr-label">
										<svg viewBox="0 0 24 24" fill="white"><path d="M17.523 2.078l1.694-1.694a.5.5 0 00-.707-.707l-1.868 1.868A8.728 8.728 0 0012 .5a8.728 8.728 0 00-4.642 1.045L5.49.677a.5.5 0 00-.707.707l1.694 1.694A8.958 8.958 0 003 9.5h18a8.958 8.958 0 00-3.477-7.422zM8.5 7a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM3 11v8a2 2 0 002 2h1v2.5a1.5 1.5 0 003 0V21h6v2.5a1.5 1.5 0 003 0V21h1a2 2 0 002-2v-8H3z"/></svg>
										<span>Android</span>
									</div>
								</div>
							</div>
						</div>

						<!-- Right: phone preview -->
						<div class="hidden lg:flex items-center">
							<div class="relative scale-[0.44] origin-center -my-[150px] -mx-[60px]">
								<PhoneMockup />
							</div>
						</div>
					</div>
				</div>
				<div class="qr-arrow" :class="position === 'bottom' ? 'qr-arrow-top' : 'qr-arrow-bottom'" />
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.qr-wrap {
	position: absolute;
	left: 50%;
	z-index: 100;
}
.qr-above {
	bottom: calc(100% + 12px);
	transform: translateX(-50%);
}
.qr-below {
	top: calc(100% + 12px);
	transform: translateX(-50%);
}

.qr-card {
	background: #1a1a1c;
	border-radius: 16px;
	padding: 28px 32px;
	width: 540px;
	box-shadow:
		0 4px 6px rgba(0, 0, 0, 0.1),
		0 16px 40px rgba(0, 0, 0, 0.25),
		0 32px 80px rgba(0, 0, 0, 0.15);
}

.qr-arrow {
	position: absolute;
	left: 50%;
	width: 14px;
	height: 14px;
	background: #1a1a1c;
	transform: translateX(-50%) rotate(45deg);
}
.qr-arrow-bottom {
	bottom: -6px;
}
.qr-arrow-top {
	top: -6px;
}

.qr-label {
	margin-top: 12px;
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	justify-content: center !important;
	gap: 6px;
}
.qr-label svg {
	display: inline-block !important;
	width: 22px !important;
	height: 22px !important;
	flex-shrink: 0;
}
.qr-label svg.ios-icon {
	width: 28px !important;
	height: 28px !important;
}
.qr-label span {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	font-weight: 500;
}

.qr-pop-enter-active { transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.qr-pop-leave-active { transition: opacity 0.15s ease; }
.qr-above.qr-pop-enter-from { opacity: 0; transform: translateX(-50%) translateY(8px); }
.qr-below.qr-pop-enter-from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
.qr-pop-leave-to { opacity: 0; }
</style>
