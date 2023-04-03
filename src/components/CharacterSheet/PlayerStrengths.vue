<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import StrengthCheckbox from './StrengthCheckbox.vue'
import { ref } from 'vue'
import { useCharacterSheet } from '@/stores/characterSheet'

const store = useCharacterSheet()
// const { strengths } = storeToRefs(store)

const strengthsAvailable = ref({})
</script>

<template>
  <div>
    <div>
      <Fieldset legend="Strengths">
        <div class="field-checkbox" v-for="(strength, index) in strengthsAvailable" :key="index">
          <StrengthCheckbox :description="strength.description" :input-name="strength.label" :label="strength.label"
            :modelValue="strengths[strength.label]" />
          <!-- <label  :for="'skill' + index">{{ strength.label }}</label>
              <Checkbox v-model="strengths" :name="'skill' + index" :value="strength.label" />
              <InputText v-if="strength.label === 'Skilled at'" />
              <div style="display: none">{{ strength.description }}</div> -->
        </div>
      </Fieldset>
    </div>
  </div>
</template>
