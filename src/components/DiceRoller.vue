<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import Button from 'primevue/button'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import { useDiceRollerLog } from '@/stores/diceRoller'

const store = useDiceRollerLog()

const props = defineProps<{
  notation: string
  statName: string
}>()
const error = ref('')
const lastResult: Ref<DiceRoll | null> = ref(null)

const roll = () => {
  error.value = ''

  try {
    lastResult.value = new DiceRoll(props.notation)

    store.addToLog({
      statName: props.statName,
      date: new Date(),
      roll: lastResult.value
    })
  } catch (e: any) {
    error.value = `There was an error`
  }
}
</script>

<template>
  <Button label="Roll" @click="roll()" />
  <div>{{ lastResult?.total }}</div>
</template>
