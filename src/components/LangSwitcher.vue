<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES } from '@/locales';

const { locale } = useI18n();
const open = ref(false);
const el = ref<HTMLElement>();

function select(code: string) {
  locale.value = code;
  localStorage.setItem('xavvi-lang', code);
  open.value = false;
}

function currentLabel() {
  return SUPPORTED_LOCALES.find((l) => l.code === locale.value)?.label ?? 'English';
}

function onClickOutside(e: MouseEvent) {
  if (el.value && !el.value.contains(e.target as Node)) open.value = false;
}

onMounted(() => document.addEventListener('click', onClickOutside, true));
onUnmounted(() => document.removeEventListener('click', onClickOutside, true));
</script>

<template>
  <div ref="el" class="relative">
    <button
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium bg-[#212226] text-[#FFFDF9] hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/20"
      @click="open = !open"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      {{ currentLabel() }}
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 4.5L6 7.5L9 4.5"/></svg>
    </button>

    <Transition name="dropdown">
      <div v-if="open" class="lang-dropdown">
        <button
          v-for="lang in SUPPORTED_LOCALES"
          :key="lang.code"
          class="lang-item"
          :class="{ active: locale === lang.code }"
          @click="select(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 12px 28px rgba(0, 0, 0, 0.12);
  z-index: 200;
}

.lang-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: background 0.15s;
  border: none;
  background: none;
}
.lang-item:hover {
  background: #f4f5f8;
}
.lang-item.active {
  color: #2a55e5;
  font-weight: 600;
}

.dropdown-enter-active { transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.dropdown-leave-active { transition: opacity 0.12s ease; }
.dropdown-enter-from { opacity: 0; transform: translateY(-6px); }
.dropdown-leave-to { opacity: 0; }
</style>
