<script setup lang="ts">
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
router.afterEach(() => {
  window.scrollTo({ top: 0 });
});
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
