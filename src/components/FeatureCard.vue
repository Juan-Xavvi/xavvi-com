<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  iconColor?: string
  iconBg?: string
}>();
</script>

<template>
  <div class="card-dark p-7 group">
    <div class="icon-box mb-4" :style="iconBg ? { background: iconBg, borderColor: 'transparent' } : {}">
      <slot name="icon">
        <div class="w-5 h-5 rounded-full" :style="{ background: iconColor || '#a3a3a3' }" />
      </slot>
    </div>
    <h3 class="text-[16px] font-bold text-white mb-2">{{ title }}</h3>
    <p class="text-[14px] leading-[1.7] text-text-light-2">{{ desc }}</p>
  </div>
</template>
