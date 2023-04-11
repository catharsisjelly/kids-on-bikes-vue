<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import { useCharacterSheet } from '@/stores/characterSheet'
import strengthsAvailable from '../../data/strengths.json'
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { strengths } = storeToRefs(store)

const display: any = ref(false)

const openDialog = () => {
  display.value = true
}
</script>

<template>
  <div>
    <div>
      <Fieldset legend="Strengths">
        <div v-for="(strength, index) in strengthsAvailable" :key="index">
          <label :for="'strength-' + index">{{ strength.label }}</label>
          <Checkbox
            v-model="strengths"
            :value="index"
            name="strength"
            :inputId="'strength-' + index"
          />
          <div v-if="strengths.includes('skilled-at') && index === 'skilled-at'">
            <label for="skilled-at-skill">Skilled At skill</label>
            <InputText name="skilled-at-skill" />
          </div>
          <div>
            <i class="pi pi-info-circle" @click="openDialog"></i>
          </div>
          <Dialog :header="strength.label" v-model:visible="display">
            <div>{{ strength.description }}</div>
          </Dialog>
        </div>
      </Fieldset>
    </div>
  </div>
</template>
