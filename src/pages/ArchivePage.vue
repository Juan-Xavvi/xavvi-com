<script setup lang="ts">
import { computed, type Component } from 'vue';

type ArchiveModule = { default: Component };
const modules = import.meta.glob<ArchiveModule>('@/components/archive/*.vue', { eager: true });

const entries = computed(() =>
  Object.entries(modules)
    .map(([path, mod]) => ({
      name: path.split('/').pop()?.replace('.vue', '') ?? 'Unknown',
      component: mod.default,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
);
</script>

<template>
  <main>
    <h1>Archive</h1>

    <p v-if="entries.length === 0">No archived sections yet.</p>

    <div v-else>
      <section v-for="entry in entries" :key="entry.name">
        <h2>{{ entry.name }}</h2>
        <component :is="entry.component" />
      </section>
    </div>
  </main>
</template>
