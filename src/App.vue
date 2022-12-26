<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import InputTest from './components/DiceRoller.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
      <InputTest />

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
