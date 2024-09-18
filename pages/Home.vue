<script>
import SimpleMenu from './components/simpleMenu.vue'
</script>

<template>
  <div>
    <h1>Moje konto</h1>
    <simpleMenu />
  </div>
</template>

<style>
h1{
    font-size: 2rem;
    @media (width >= 60em) {
      font-size: 4rem;
}}
@media (width >= 60em) {
      font-size: 6rem;
}
.no-wrap-text {
    white-space: nowrap;
  }
</style>
