<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </div>
    </header>

    <div class="wrapper">
        <RouterView />
    </div>
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
</style>
