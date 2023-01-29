<script setup lang="ts">
import { ref } from 'vue'
import { useDiceRollerLog } from '@/stores/diceRoller'
import { storeToRefs } from 'pinia'

const store = useDiceRollerLog()
const { diceRollerLog } = storeToRefs(store)
</script>

<template>
    <div>
        <div v-for="(logEntry, index) in diceRollerLog.reverse()" :key="index">
            <p>{{ logEntry.date.toLocaleDateString() }} {{logEntry.roll.rolls[0].value}}</p>
        </div>
    </div>
</template>
