<script setup lang="ts">
import Dropdown from 'primevue/dropdown'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog'
import { useConfirm } from 'primevue/useconfirm'

const confirm = useConfirm()
const store = useCharacterSheet()
const { characterType } = storeToRefs(store)
const options = [
  { value: 'kid', label: 'Kid' },
  { value: 'teen', label: 'Teen' },
  { value: 'adult', label: 'Adult' }
]
const confirmChangeCharacterType = () => {
  confirm.require({
    message: 'Are you sure you want to lose all of your settings?',
    header: 'Confirmation changing character type',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      characterType.value = null
    }
  })
}
</script>

<template>
  <div class="card">
    <div class="flex card-container">
      <Dropdown
        :disabled="characterType !== null"
        v-model="characterType"
        :options="options"
        optionLabel="label"
        optionValue="value"
        placeholder="Select a Character Type"
        @change="store.changeCharacterType"
      />
      <ConfirmDialog></ConfirmDialog>
      <div v-if="characterType !== null" class="card flex flex-wrap gap-2 justify-content-center">
        <Button
          @click="confirmChangeCharacterType()"
          icon="pi pi-check"
          label="Change Character Type"
        ></Button>
      </div>
    </div>
  </div>
</template>
