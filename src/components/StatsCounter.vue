<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const props = withDefaults(defineProps<{
	items: Array<{ target: number; suffix: string; label: string }>
	dark?: boolean
}>(), {
	dark: true,
});

const counterEls = ref<HTMLElement[]>([]);
let obs: IntersectionObserver | null = null;

onMounted(() => {
	obs = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				const el = e.target as HTMLElement;
				const i = parseInt(el.dataset.idx || '0');
				const s = props.items[i];
				obs!.unobserve(el);
				const start = performance.now();
				const tick = (now: number) => {
					const p = Math.min((now - start) / 1800, 1);
					const ease = 1 - Math.pow(1 - p, 3);
					el.textContent = `${Math.round(ease * s.target)}${s.suffix}`;
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		},
		{ threshold: 0.3 },
	);
	void nextTick(() => {
		counterEls.value.forEach((el) => el && obs!.observe(el));
	});
});

onUnmounted(() => obs?.disconnect());
</script>

<template>
	<div class="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
		<div v-for="(s, i) in items" :key="i" v-reveal="i" class="text-center">
			<div :ref="(el: any) => { if (el) counterEls[i] = el as HTMLElement }" :data-idx="i" :class="[
				'text-[clamp(2.5rem,5.5vw,4rem)] font-bold tracking-[-0.03em] leading-none',
				dark ? 'glow-number' : 'text-white'
			]">0</div>
			<p
				:class="['text-[13px] mt-3 font-medium tracking-wide uppercase text-white/70']">
				{{ s.label }}
			</p>
		</div>
	</div>
</template>
