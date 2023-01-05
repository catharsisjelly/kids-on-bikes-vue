<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
        </nav>
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

header {
    display: flex;
}

.wrapper {
    height: 100vw;
    width: 100vw;
    padding-left: 30px;
}
</style>
