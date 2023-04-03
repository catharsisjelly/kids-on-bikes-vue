<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { inventory } = storeToRefs(store)

</script>

<template>
  <div>
    <Fieldset legend="Inventory">
      <ul>
        <li v-for="(item, index) in inventory" :key="index">
          {{ item }}
          <button @click="store.inventoryRemoveItem(index)">Remove</button>
        </li>
      </ul>
      <div class="field grid">
        <label for="name" class="col-fixed">Add Item</label>
        <InputText id="name" type="text" @keyup.enter="store.inventoryAddItem" />
      </div>
    </Fieldset>
  </div>
</template>
