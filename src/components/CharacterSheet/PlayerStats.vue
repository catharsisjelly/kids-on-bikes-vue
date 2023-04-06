<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import DiceRoller from '../DiceRoller.vue'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'
import { type CharacterStatLabel, statLabels } from '@/lib/Stats'

const store = useCharacterSheet()
const { stats, statBonuses } = storeToRefs(store)

const diceAvailable = [
  { value: 'd4', name: 'd4' },
  { value: 'd6', name: 'd6' },
  { value: 'd8', name: 'd8' },
  { value: 'd10', name: 'd10' },
  { value: 'd12', name: 'd12' },
  { value: 'd20', name: 'd20' },
]

const displayDialogs: Ref<Record<CharacterStatLabel, boolean>> = ref({
  flight: false,
  fight: false,
  brains: false,
  brawn: false,
  grit: false,
  charm: false
})

const openDialog = (item: string) => {
  for (const key of statLabels) {
    if (key === item) {
      displayDialogs.value[key] = true
    } else {
      displayDialogs.value[key] = false
    }
  }
}

const getNotation = (item: string) => {
  return `${stats.value[item]}! +${statBonuses.value[item]}`
}
</script>

<template>
  <div class="card">
    <Fieldset legend="Stats">
      <div v-for="key in statLabels" :key="key">
        <div class="card-container">
          <label :for="stats[key].getLabel()">{{ stats[key].getLabel() }} Dice Selection</label>
          <i class="pi pi-info-circle" @click="openDialog(key)"></i>
          <Dropdown :id="key" :inputId="key" :options="diceAvailable" optionLabel="name" optionValue="value"
            placeholder="Select a Dice" @change="store.setStatValue" :model-value="stats[key].getDie()" />
        </div>
        <div class="card-container">
          <label :for="key + '_bonus'">{{ stats[key].getLabel() }} Bonus</label>
          <InputNumber inputId="horizontal" v-model="statBonuses[key]" showButtons buttonLayout="horizontal"
            decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
            incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="decimal" />
        </div>
        <Dialog :header="stats[key].getLabel()" v-model:visible="displayDialogs[key]">
          <div>{{ stats[key].getDescription() }}</div>
        </Dialog>
        <div v-if="stats[key].getDie()">
          <DiceRoller :notation="getNotation(key)" :statName="key" />
        </div>
      </div>
    </Fieldset>
  </div>
</template>
