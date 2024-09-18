<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <main>
    <router-view />
  </main>
</template>

  <style lang="scss">
  :root {
    --primary: #f5f5f5b4;
    --blue: #0055ffb4;
    --ashen: #e2b6b6b4;
    --light: #dff0e2;
    --sidebar-width: 300px;
    --dark: #020503;
  }

  body {
    background: var(--light);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
  }

  main {
    flex: 1 1 0;
    padding: 2rem;
    display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        grid-auto-rows: 4fr;
  }

  @media (max-width: 960px) {
    main {
      padding-left: 4rem;
    }
  }
  </style>
