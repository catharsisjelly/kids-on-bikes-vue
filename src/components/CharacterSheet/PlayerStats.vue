<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import DiceRoller from '../DiceRoller.vue'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { diceAvailable, statDice, statBonus }: any = storeToRefs(store)
const stats = [
  {
    name: 'fight',
    title: 'Fight',
    description:
      'This stat determines how good a combatant a character is with whatever weapons or fighting skills you decide your character knows. While a character with a high Fight stat won’t be able to pick up a gun and use it effectively if they have never fired one before, this stat will make them good with weapons that they do have experience with. Also, they&apos;ll be able to learn how to use new weapons and fighting skills more easily, if given proper training.'
  },
  {
    name: 'flight',
    title: 'Flight',
    description:
      'Flight: This stat determines how fast a character is — as well as how skilled they are at evading their problems (both literally and figuratively). Characters with a high Flight stat will be fast and tough to trap both physically and verbally.'
  },
  {
    name: 'brains',
    title: 'Brains',
    description:
      'This stat determines how book-smart a character is. This will determine how well they understand problems, how well they did or are doing in school, and how quickly they’re able to solve academic problems.'
  },
  {
    name: 'brawn',
    title: 'Brawn',
    description:
      'This stat determines how much brute strength a character has. It does not determine how well they can fight — just how well they can lift things and how much physical damage they can take. It also determines how physically intimidating a character is.'
  },
  {
    name: 'charm',
    title: 'Charm',
    description:
      'This stat determines how socially adept a character is and how good they are at reading the emotions of another person or group of people. Characters with a high Charm stat will be able to talk themselves out of tough situations and into good ones with relative ease — within reason.'
  },
  {
    name: 'grit',
    title: 'Grit',
    description:
      'This stat determines how hard it is to break a character emotionally or physically. Characters with a high Grit stat will be able to keep a level head in the worst of situations and will be able to keep their cool even when pushed hard. Finally, this stat also determines how street-smart a character is.'
  }
]

const displayDialogs: any = ref({
  flight: false,
  fight: false,
  brains: false,
  brawn: false,
  grit: false,
  charm: false
})

const openDialog = (item: string) => {
  for (const [key] of Object.entries(displayDialogs.value)) {
    if (key === item) {
      displayDialogs.value[key] = true
    } else {
      displayDialogs.value[key] = false
    }
  }
}

const getNotation = (item: string) => {
  return `${statDice.value[item]}! +${statBonus.value[item]}`
}
</script>

<template>
  <Fieldset legend="Stats">
    <div v-for="(item, index) in stats" :key="index">
      <div>
        {{ item.title }} -
        <i class="pi pi-info-circle" @click="openDialog(item.name)"></i>
      </div>
      <Dialog :header="item.title" v-model:visible="displayDialogs[item.name]">
        <div>{{ item.description }}</div>
      </Dialog>
      <Dropdown
        v-model="statDice[item.name]"
        :inputId="item.name"
        :options="diceAvailable"
        optionLabel="name"
        optionValue="value"
        placeholder="Select a Dice"
      />
      <InputNumber
        v-if="statDice[item.name]"
        inputId="horizontal"
        v-model="statBonus[item.name]"
        showButtons
        buttonLayout="horizontal"
        decrementButtonClass="p-button-danger"
        incrementButtonClass="p-button-success"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        mode="decimal"
      />
      <div v-if="statDice[item.name]">
        <DiceRoller :notation="getNotation(item.name)" :statName="item.title" />
      </div>
    </div>
  </Fieldset>
</template>
