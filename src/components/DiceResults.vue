<script setup lang="ts">
import { useDiceRollerLog } from '@/stores/diceRoller'
import { computed } from 'vue'

const store = useDiceRollerLog()
const log: any = computed(() => {
  return store.diceRollerLog.slice().reverse()
})
</script>

<template>
  <div>
    <div v-for="(logEntry, index) in log" :key="index">
      <p>
        {{ logEntry.date.toLocaleString() }} - {{ logEntry.statName }} -
        {{ logEntry.roll }}
      </p>
    </div>
  </div>
</template>
