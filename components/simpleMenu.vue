<script setup>
import { ref } from 'vue'
import Activepackage from '~/pages/Activepackage.vue'
</script>

<template>
  <div class="Menubutton" small>
    <v-btn class="menubutton" small>
      <span class="material-icons2" />
      Panel główny
    </v-btn>
    <v-btn class="menubutton" small>
      <span class="material-icons2">company</span>
      Urządzenia
    </v-btn>
    <v-btn class="menubutton" text small @click="Activepackage">
      <span class="material-icons2">pakiet</span>
      AktywnyPakiet
    </v-btn>
    <v-btn class="menubutton" small>
      <span class="material-icons2">statistic</span>
      Statystyki
    </v-btn>
  </div>
</template>

  <style lang="scss" scoped>
  // .fluidContainer {
  //   display: flex;
  //   flex-direction: column;
  //
  //   width: 100%;
  //   min-height: 100vh;
  //   padding: 2rem;
  //

      .menuButton {
        display: grid;
        grid-template-columns: 1fr;
        gap:M 16px;
        grid-auto-rows: reapeat (4,1fr);

    .material-icons2 {
        font-size: 36px;
        margin-right: 12px;
      }

    .sidebarButton {
      border: -2px;
      padding: 2px;
      display: flex;
      justify-content: flex-start;
    }}

    // .simpleMenu {
    //   margin-top: 10%;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: flex-start;
    //   align-items: stretch;

        // align-items: center;
        // width: flex;
        // justify-content: flex-start;
        // text-align: left;
        // padding: 40px 25px;
        // background-color: transparent;
        // border: none;
        // box-shadow: none;

      // @media (max-width: 768px) {
      //   position: fixed;
      //   z-index: 99;
      //   width: flex;
      // }
</style>
