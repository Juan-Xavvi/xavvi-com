<template>
	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<div class="absolute rounded-full animate-blob opacity-20 blur-[100px]" :style="{
			width: `${size}px`,
			height: `${size}px`,
			top: top,
			left: left,
			background: `linear-gradient(135deg, ${color1}, ${color2})`,
			animationDelay: delay,
			animationDuration: duration,
		}" />
	</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
	size?: number
	top?: string
	left?: string
	color1?: string
	color2?: string
	delay?: string
	duration?: string
}>(), {
	size: 600,
	top: '-10%',
	left: '50%',
	color1: '#2a55e5',
	color2: '#7c3aed',
	delay: '0s',
	duration: '8s',
});
</script>
