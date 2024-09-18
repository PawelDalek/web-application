<!-- layouts/default.vue -->
<script setup>
import Sidebar from '~/components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <!-- Sidebar zawsze będzie tutaj -->
    <Sidebar />

    <!-- Miejsce na treść każdej strony -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

  <style scoped>
  .app {
    display: flex;
  }

  main {
    flex: 1;
    padding: 2rem;
    margin-left: 100;
  }
  </style>
