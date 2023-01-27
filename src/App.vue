<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="app">
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
    </div>
</template>

<style scoped>
body {
    margin: 0;
}

#app {
    height: 100vh;
    display: flex;
    align-items: left;
}
</style>
