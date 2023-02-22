<script setup lang="ts">
import { ref, unref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Fieldset from 'primevue/fieldset'
import DiceRoller from '../DiceRoller.vue'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { diceAvailable, statDice } = storeToRefs(store)
const stats = [
    {
        name: 'Fight',
        description: 'This stat determines how good a combatant a character is with whatever weapons or fighting skills you decide your character knows. While a character with a high Fight stat won’t be able to pick up a gun and use it effectively if they have never fired one before, this stat will make them good with weapons that they do have experience with. Also, they&apos;ll be able to learn how to use new weapons and fighting skills more easily, if given proper training.',
    },
    {
        name: 'Flight',
        description: 'Flight: This stat determines how fast a character is — as well as how skilled they are at evading their problems (both literally and figuratively). Characters with a high Flight stat will be fast and tough to trap both physically and verbally.'
    },
    {
        name: 'Brains',
        description: 'This stat determines how book-smart a character is. This will determine how well they understand problems, how well they did or are doing in school, and how quickly they’re able to solve academic problems.'
    },
    {
        name: 'Brawn',
        description: 'This stat determines how much brute strength a character has. It does not determine how well they can fight — just how well they can lift things and how much physical damage they can take. It also determines how physically intimidating a character is.'
    },
    {
        name: 'Charm',
        description: 'This stat determines how socially adept a character is and how good they are at reading the emotions of another person or group of people. Characters with a high Charm stat will be able to talk themselves out of tough situations and into good ones with relative ease — within reason.'
    },
    {
        name: 'Grit',
        description: 'This stat determines how hard it is to break a character emotionally or physically. Characters with a high Grit stat will be able to keep a level head in the worst of situations and will be able to keep their cool even when pushed hard. Finally, this stat also determines how street-smart a character is.'
    }
]

const toggleDialog = (item) => {
    const dialogs = unref(displayDialogs)
    Object.entries(dialogs).forEach((key, value) => {
        console.log('Key:' + key, 'Value:' + value);
    })
}

const displayDialogs = ref({
    flight: false,
    fight: false,
    brains: false,
    brawn: false,
    grit: false,
    charm: false,
});

const displayError = ref(false)
</script>

<template>
    <div>
        <div v-if="displayError">You should only have one of each dice</div>
        <div>
            <Fieldset legend="Stats">
                <div v-for="(item, index) in stats" :key="index">
                    <div>{{ item.name }}</div>
                    <Dropdown v-model="statDice.fight" inputId="fight" :options="diceAvailable" optionLabel="name"
                        optionValue="value" placeholder="Select a Dice" @change="store.checkDuplicateDice" />
                    <div v-if="statDice.fight">
                        <DiceRoller :notation="statDice.fight" />
                    </div>
                    <Button label="Show" icon="pi pi-external-link" @click="toggleDialog(item.name)" />
                    <Dialog :header="item.name" v-model:visible="displayDialogs[item.name]">
                        <div>{{ item.description }}</div>
                        <template #footer>
                            <Button label="Close" icon="pi pi-times" @click="toggleDialog(item.name)" class="p-button-text" />
                        </template>
                    </Dialog>
                </div>
            </Fieldset>
        </div>
        <div>
            <h2>Dice Results</h2>
            <p></p>
        </div>
    </div>
</template>
