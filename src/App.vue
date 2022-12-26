<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DiceRoller from './components/DiceRoller.vue'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
            <DiceRoller />
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>
