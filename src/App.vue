<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

const router = useRouter();
router.afterEach(() => {
  window.scrollTo({ top: 0 });
});

// Toggle <html dir="rtl"> for Arabic, "ltr" for everything else
const { locale } = useI18n();
watch(
  locale,
  (current) => {
    document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
  },
  { immediate: true }
);
</script>

<template>
  <div class="min-h-dvh flex flex-col bg-dark text-white font-sans antialiased">
    <AppNav />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
