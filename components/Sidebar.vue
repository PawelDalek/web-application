<script setup>
import { ref } from 'vue'
</script>

<template>
  <aside>
    <div class="logo">
      <span class="material-icons user-icon">account_circle</span>
      <span class="username">Jan Kowalski</span>
    </div>
    <div class="buttonMenu">
      <v-btn class="sidebarButton" small>
        <span class="material-icons">home</span>
        Panel główny
      </v-btn>
      <v-btn class="sidebarButton" small>
        <span class="material-icons">devices</span>
        Urządzenia
      </v-btn>
      <v-btn class="sidebarButton" text small @click="goToActivePackage">
        <span class="material-icons">message</span>
        Wiadomości
      </v-btn>
      <v-btn class="sidebarButton" small>
        <span class="material-icons">people</span>
        Przyjaciele
      </v-btn>
      <v-btn class="sidebarButton" small>
        <span class="material-icons">calendar_today</span>
        Kalendarz
      </v-btn>
    </div>
  </aside>
</template>

  <style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    width: 25%;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--blue);
    color: var(--light);

    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      .user-icon {
        font-size: 36px;
        margin-right: 12px;
      }

      .username {
        font-size: 1.2rem;
      }
    }

    .buttonMenu {
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      font-size: 2rem;
  
      .sidebarButton {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        width: flex;
        justify-content: flex-start;
        text-align: left;
        padding: 40px 16zpx;
        background-color: transparent;
        border: none;
        box-shadow: none;
      }

      @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
        width: 30%;
        @media (width >= 60em) {
      font-size: 4rem;
        }}
       @media (width >= 60em) {
      font-size: 6rem;
    }

      }
    }
  </style>
