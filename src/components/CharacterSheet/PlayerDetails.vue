<script setup lang="ts">
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { character } = storeToRefs(store)
</script>

<template>
  <div class="flex-1 flex">
    <Fieldset legend="Character Details">
      <div>
        <label for="name" class="col-fixed">Name</label>
        <InputText id="name" type="text" v-model="character.name" />
      </div>
      <div>
        <label for="age">Age</label>
        <InputNumber id="age" v-model="character.age" />
      </div>
      <div>
        <label for="fear">Fear</label>
        <InputText id="fear" type="text" v-model="character.fear" />
      </div>
      <div>
        <label for="motivation">Motivation</label>
        <InputText id="motivation" type="text" v-model="character.motivation" />
      </div>
      <div>
        <label for="flaws">Flaws</label>
        <InputText id="flaws" type="text" v-model="character.flaws" />
      </div>
      <div>
        <label for="description">Description</label>
        <Textarea id="description" v-model="character.description" />
      </div>
    </Fieldset>
  </div>
</template>
