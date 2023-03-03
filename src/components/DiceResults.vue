<script setup lang="ts">
import { useDiceRollerLog } from '@/stores/diceRoller'
import { storeToRefs } from 'pinia'

const store = useDiceRollerLog()
const { diceRollerLog } = storeToRefs(store)
</script>

<template>
    <div>
        <div v-for="(logEntry, index) in diceRollerLog.reverse()" :key="index">
            <!-- <pre>{{ JSON.stringify(logEntry.roll) }}</pre> -->
            <p>
                {{ logEntry.date.toLocaleString() }} - {{ logEntry.statName }} -
                {{ logEntry.roll }}
            </p>
        </div>
    </div>
</template>
