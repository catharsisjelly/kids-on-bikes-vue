<script setup lang="ts">
import { ref, unref } from 'vue'
import Button from 'primevue/button'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'

const props = defineProps<{
    notation: string
}>()
const results = ref()
const error = ref('')

const roll = () => {
    error.value = ''

    console.log(props.notation);
    try {
        results.value = new DiceRoll(`${props.notation}!`)
    } catch (e: any) {
        error.value = `There was an error`
    }
}

</script>

<template>
    <Button label="Roll" @click="roll()" />
    <div data-test-id="rollResults" v-if="results">
        <div>
            <h2>Player Results</h2>
            <p>
                You got <span>{{ results?.rolls[0].value }}</span>
            </p>
            <ul>
                <li v-for="(roll, index) in results?.rolls[0].rolls" :key="index">
                    Result: {{ roll.value }}
                </li>
            </ul>
        </div>
    </div>
</template>
