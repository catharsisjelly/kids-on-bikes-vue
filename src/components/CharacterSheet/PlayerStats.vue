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
  { value: 'd4', name: 'D4' },
  { value: 'd6', name: 'D6' },
  { value: 'd8', name: 'D8' },
  { value: 'd10', name: 'D10' },
  { value: 'd12', name: 'D12' },
  { value: 'd20', name: 'D20' }
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
  <Fieldset legend="Stats" class="card">
    <div v-for="key in statLabels" :key="key" class="card-container flex align-items bg-blue-100 mb-2">
      <div class="col">
        <label class="mr-2" :for="stats[key].getLabel()">{{ stats[key].getLabel() }}</label>
        <i class="pi pi-info-circle" @click="openDialog(key)"></i>
        <Dropdown :id="key" :inputId="key" :options="diceAvailable" optionLabel="name" optionValue="value"
          placeholder="Select a Dice" @change="store.setStatDiceValue($event, key)" :model-value="stats[key].getDie()"
          :show-clear="true" class="" />
      </div>
      <div class="col">
        <label :for="key + '_bonus'">{{ stats[key].getLabel() }} Bonus</label>
        <InputNumber inputId="horizontal" v-model="statBonuses[key]" showButtons buttonLayout="horizontal"
          decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus" mode="decimal" />
      </div>
      <Dialog modal :header="stats[key].getLabel()" v-model:visible="displayDialogs[key]">
        <div>{{ stats[key].getDescription() }}</div>
      </Dialog>
      <div class="col flex" v-if="stats[key].getDie()">
        <DiceRoller :notation="getNotation(key)" :statName="key" />
      </div>
    </div>
  </Fieldset>
</template>
