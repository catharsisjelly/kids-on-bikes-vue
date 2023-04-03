<script setup lang="ts">
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { name, age, ageMin, ageMax, motivation, description } = storeToRefs(store)

</script>

<template>
  <div class="card">
  <div class="card-container">
      <Fieldset legend="Character Details">
        <div>
          <label for="name" class="col-fixed">Name</label>
          <InputText id="name" type="text" v-model="name" />
        </div>
      <div>
        <label for="age">Age</label>
        <InputNumber id="age" mode="decimal" showButtons v-model="age" :min="ageMin" :max="ageMax" />
        </div>
        <!-- <div>
                                                <label for="fear">Fears</label>
                                                <InputText id="fear" type="text" v-model="character?.fears?.join(',')" />
                                                                    </div> -->
        <div>
          <label for="motivation">Motivation</label>
          <InputText id="motivation" type="text" v-model="motivation" />
        </div>
        <!-- <div>
                                                                      <label for="flaws">Flaws</label>
                                                                      <InputText id="flaws" type="text" v-model="character?.flaws?.join(',')" />
                                                                    </div> -->
        <div>
          <label for="description">Description</label>
          <Textarea id="description" v-model="description" />
        </div>
      </Fieldset>
    </div>
  </div>
</template>
