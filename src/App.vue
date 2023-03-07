<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="app">
        <div class="wrapper">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
#app {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: var(--border-radius);
    color: var(--gray-700);
    padding: 4rem;
}
</style>
