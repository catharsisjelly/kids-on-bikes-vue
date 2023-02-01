<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import { useDiceRollerLog } from '@/stores/diceRoller'
import { storeToRefs } from 'pinia'

const store = useDiceRollerLog()

const props = defineProps<{
    notation: string
}>()
const error = ref('')

const roll = () => {
    error.value = ''

    try {
        const results = new DiceRoll(`${props.notation}!`)
        store.addToLog({
            date: new Date(),
            roll: results,
        })
    } catch (e: any) {
        error.value = `There was an error`
    }
}
</script>

<template>
    <Button label="Roll" @click="roll()" />
</template>
