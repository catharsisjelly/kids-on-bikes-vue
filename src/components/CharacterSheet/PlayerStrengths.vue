<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import { useCharacterSheet } from '@/stores/characterSheet'
import strengthsAvailable from '../../data/strengths.json'
import { ref, type Ref } from 'vue'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import { storeToRefs } from 'pinia'
import { strengthValues, type StrengthValue } from '@/lib/Stats'

const store = useCharacterSheet()
const { strengths } = storeToRefs(store)

const displayDialogs: Ref<Record<StrengthValue, boolean>> = ref({
  'cool-under-pressure': false,
  easygoing: false,
  gross: false,
  heroic: false,
  intuitive: false,
  loyal: false,
  prepared: false,
  protective: false,
  'quick-healing': false,
  rebellious: false,
  'skilled-at': false,
  tough: false,
  'treasure-hunter': false,
  unassuming: false,
  wealthy: false
})

const openDialog = (item: string) => {
  for (const key of strengthValues) {
    if (key === item) {
      displayDialogs.value[key] = true
    } else {
      displayDialogs.value[key] = false
    }
  }
}
</script>

<template>
  <div>
    <div>
      <Fieldset legend="Strengths">
        <div v-for="(strength, index) in strengthsAvailable" :key="index">
          <label :for="'strength-' + index">{{ strength.label }}</label>
          <Checkbox v-model="strengths" :value="index" name="strength" :inputId="'strength-' + index" />
          <div v-if="strengths.includes('skilled-at') && index === 'skilled-at'">
            <label for="skilled-at-skill">Skilled At skill</label>
            <InputText name="skilled-at-skill" />
          </div>
          <div>
            <i class="pi pi-info-circle" @click="openDialog(index)"></i>
          </div>
          <Dialog :header="strength.label" v-model:visible="displayDialogs[index]">
            <div>{{ strength.description }}</div>
          </Dialog>
        </div>
      </Fieldset>
    </div>
  </div>
</template>
