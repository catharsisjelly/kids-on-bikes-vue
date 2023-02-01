<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import DiceRoller from '../DiceRoller.vue'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { diceAvailable, statDice } = storeToRefs(store)
const { } = store

const displayError = ref(false)

</script>

<template>
    <div>
        <div v-if="displayError">You should only have one of each dice</div>
        <div>
            <Fieldset legend="Stats">
                <div>
                    <div>Fight</div>
                    <Dropdown
                        v-model="statDice.fight"
                        inputId="fight"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.fight">
                        <DiceRoller :notation="statDice.fight" />
                    </div>
                </div>
                <div>
                    <div>Flight</div>
                    <Dropdown
                        v-model="statDice.flight"
                        inputId="flight"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.flight">
                        <DiceRoller :notation="statDice.flight" />
                    </div>
                </div>
                <div>
                    <div>Brains</div>
                    <Dropdown
                        v-model="statDice.brains"
                        inputId="brains"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.brains">
                        <DiceRoller :notation="statDice.brains" />
                    </div>
                </div>
                <div>
                    <div>Brawn</div>
                    <Dropdown
                        v-model="statDice.brawn"
                        inputId="brawn"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.brawn">
                        <DiceRoller :notation="statDice.brawn" />
                    </div>
                </div>
                <div>
                    <div>Charm</div>
                    <Dropdown
                        v-model="statDice.charm"
                        inputId="charm"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.charm">
                        <DiceRoller :notation="statDice.charm" />
                    </div>
                </div>
                <div>
                    <div>Grit</div>
                    <Dropdown
                        v-model="statDice.grit"
                        inputId="grit"
                        :options="diceAvailable"
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select a Dice"
                        @change="store.checkDuplicateDice"
                    />
                    <div v-if="statDice.grit">
                        <DiceRoller :notation="statDice.grit" />
                    </div>
                </div>
            </Fieldset>
        </div>
        <div>
            <h2>Dice Results</h2>
            <p></p>
        </div>
    </div>
</template>
