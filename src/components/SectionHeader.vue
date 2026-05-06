<script setup lang="ts">
withDefaults(defineProps<{
	title: string
	subtitle?: string
	dark?: boolean
	align?: 'center' | 'left'
}>(), {
	dark: true,
	align: 'center',
});
</script>

<template>
	<div :class="['max-w-[800px] mb-14 lg:mb-16', align === 'center' ? 'mx-auto text-center' : '']">
		<h2 v-reveal="1" :class="[
			'text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]',
			dark ? 'text-white' : 'text-black'
		]">
			{{ title }}
		</h2>
		<p v-if="subtitle" v-reveal="2" :class="[
			'mt-4 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.7]',
			dark ? 'text-white' : 'text-black'
		]">
			{{ subtitle }}
		</p>
	</div>
</template>
