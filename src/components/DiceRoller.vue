<script setup lang="ts">
import { ref, unref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'

const result = ref()
const error = ref('')

const props = defineProps({
    notation: String,
})

const roll = () => {
    error.value = ''

    try {
        result.value = new DiceRoll(`${props.notation}`)
    } catch (e: any) {
        error.value = `There was an error`
        console.error(e)
    }
}
</script>

<template>
    <Button label="Roll" @click="roll()" />
    <div data-test-id="rollResults" v-if="result">
        <slot>
            <div>
                <h2>Result</h2>
                <p>
                    You got <span>{{ result?.rolls[0].value }}</span>
                </p>
            </div>
        </slot>
    </div>
</template>
