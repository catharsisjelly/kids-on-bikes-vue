<script setup lang="ts">
import { ref, unref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import DiceRoller from '../DiceRoller.vue'
import { useCharacterSheet } from '@/stores/characterSheet';
import { storeToRefs } from 'pinia';

const store = useCharacterSheet()
const { diceAvailable, statDice } = storeToRefs(store)

const displayError = ref(false)

const changeAvailableDice = () => {
    const values = Object.values(unref(stats))

    const duplicates = values.filter(
        (currentValue: undefined, currentIndex: number) =>
            typeof currentValue === 'string' && values.indexOf(currentValue) !== currentIndex
    )

    if (duplicates.length >= 1) {
        displayError.value = true
    }
}
</script>

<template>
    <div>
        <div v-if="displayError">You should only have one of each dice</div>
        <div>
            <Fieldset legend="Stats">
                <div>
                    <div>Fight</div>
                    <Dropdown
                        inputId="fight"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                    <div>
                        <DiceRoller notation="d4" />
                    </div>
                </div>
                <div>
                    <div>Flight</div>
                    <Dropdown
                        inputId="flight"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                </div>
                <div>
                    <div>Brains</div>
                    <Dropdown
                        inputId="brains"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                </div>
                <div>
                    <div>Brawn</div>
                    <Dropdown
                        inputId="brawn"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                </div>
                <div>
                    <div>Charm</div>
                    <Dropdown
                        inputId="charm"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                </div>
                <div>
                    <div>Grit</div>
                    <Dropdown
                        inputId="grit"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                    />
                </div>
            </Fieldset>
        </div>
    </div>
</template>
