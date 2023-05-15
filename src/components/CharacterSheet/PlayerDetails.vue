<script setup lang="ts">
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { name, age, ageMin, ageMax, motivation, description, fears, flaws } = storeToRefs(store)
</script>

<template>
  <Fieldset legend="Character Details" class="card">
    <div class="field grid">
      <label for="name" class="col-fixed" style="width: 100px;">Name</label>
      <div class="col">
        <InputText id="name" type="text" v-model.trim="name" class="w-full" />
      </div>
    </div>
    <div class="field grid">
      <label for="age" class="col-fixed" style="width: 100px;">Age</label>
      <div class="col">
        <InputNumber id="age" mode="decimal" showButtons v-model.trim="age" :min="ageMin" :max="ageMax" class="w-full" />
      </div>
    </div>
    <div class="field grid">
      <label for="fear" class="col-fixed" style="width: 100px;">Fears</label>
      <div class="col">
        <InputText id="fear" type="text" v-model="fears" class="w-full" />
      </div>
    </div>
    <div class="field grid">
      <label for="motivation" class="col-fixed" style="width: 100px;">Motivation</label>
      <div class="col">
        <InputText id="motivation" type="text" v-model.trim="motivation" class="w-full" />
      </div>
    </div>
    <div class="field grid">
      <label for="flaws" class="col-fixed" style="width: 100px;">Flaws</label>
      <div class="col">
        <InputText id="flaws" type="text" v-model="flaws" class="w-full" />
      </div>
    </div>
    <div class="field grid">
      <label for="description" class="col-fixed" style="width: 100px;">Description</label>
      <div class="col">
        <Textarea id="description" v-model.trim="description" class="w-full" />
      </div>
    </div>
  </Fieldset>
</template>
