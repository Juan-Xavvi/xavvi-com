<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import PhoneMockup from '@/components/PhoneMockup.vue';

const { t } = useI18n();

const qrCodeUrl = '/qr/android.png';
</script>

<template>
	<section class="relative min-h-dvh overflow-hidden bg-[#070b14] text-white">
		<div class="pointer-events-none absolute inset-0 [background:radial-gradient(80%_70%_at_78%_14%,rgba(42,85,229,0.34),transparent_56%),radial-gradient(70%_70%_at_18%_82%,rgba(124,58,237,0.2),transparent_58%),radial-gradient(90%_90%_at_35%_35%,rgba(255,255,255,0.07),transparent_65%)]" />

		<div class="relative z-10 mx-auto grid min-h-dvh w-full max-w-[1180px] items-center gap-12 px-6 pb-22 pt-26 lg:grid-cols-[minmax(0,540px)_1fr] lg:px-8">
			<div class="max-w-[540px]">
				<h1 class="whitespace-nowrap text-[clamp(2rem,4.6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
					{{ t('download.title') }}
				</h1>

				<p class="mt-3 text-[15px] text-white/72">
					{{ t('download.subtitle') }}
				</p>

				<div class="mt-7 inline-flex w-[290px] flex-col items-center rounded-2xl bg-white/6 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-md">
					<img :src="qrCodeUrl" alt="Xavvi Android download QR code" class="h-[220px] w-[220px] rounded-xl bg-white p-3" />
					<span class="mt-3 text-[13px] font-medium text-white/90">{{ t('download.scanHint') }}</span>
				</div>
			</div>

			<div class="relative hidden h-[560px] items-center justify-end lg:flex">
				<div class="absolute h-[420px] w-[420px] rounded-full bg-[#2a55e5]/18 blur-3xl" />
				<div class="relative scale-[1.4]">
					<PhoneMockup />
				</div>
			</div>
		</div>

		<div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[120px]">
			<svg viewBox="0 0 1440 180" preserveAspectRatio="none" class="h-full w-full">
				<path d="M0,120 C220,165 390,95 620,112 C870,132 1125,184 1440,120 L1440,180 L0,180 Z" fill="#0f0f0f" />
			</svg>
		</div>
	</section>
</template>
