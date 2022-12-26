<script setup lang="ts">
import { ref, unref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'

const numberOfDice = ref(1)
const playerResults = ref()
const computerResult = ref()
const error = ref('')

const roll = () => {
    error.value = ''

    try {
        playerResults.value = new DiceRoll(`${unref(numberOfDice)}d6>=6`)
        computerResult.value = new DiceRoll(`1d6>=6`)
    } catch (e: any) {
        error.value = `There was an error`
    }
}
</script>

<template>
    <div class="grid formgrid">
        <div class="field">
            <label for="numberOfDice">Number of Dice to roll</label>
            <InputNumber
                inputId="numberOfDice"
                v-model="numberOfDice"
                mode="decimal"
                min="1"
            />
        </div>
    </div>
    <Button label="Roll" @click="roll()" />
    <div v-if="playerResults">
        <div>
            <p>
                You got {{ playerResults?.rolls[0].value }} Success{{
                    playerResults?.rolls[0].value == 1 ? '' : 'es'
                }}
            </p>
            <ul>
                <li
                    v-for="(roll, index) in playerResults?.rolls[0].rolls"
                    :key="index"
                >
                    Result: {{ roll.value }} -
                    {{ roll.calculationValue == 1 ? 'Success' : 'Fail' }}
                </li>
            </ul>
        </div>
        <div>
            Friend Computer
            {{
                computerResult.rolls[0].value == 1
                    ? `Noticed you`
                    : `Didn't notice you`
            }}
        </div>
    </div>
</template>
