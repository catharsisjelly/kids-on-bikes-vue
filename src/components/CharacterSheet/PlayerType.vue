<script setup lang="ts">
import Dropdown from 'primevue/dropdown'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { characterType } = storeToRefs(store)
const options = [
  { value: 'kid', label: 'Kid' },
  { value: 'teen', label: 'Teen' },
  { value: 'adult', label: 'Adult' }
]
</script>

<template>
  <Dropdown v-model="characterType" :options="options" optionLabel="label" optionValue="value"
    placeholder="Select a Character Type" @change="store.changeCharacterType" />
</template>
