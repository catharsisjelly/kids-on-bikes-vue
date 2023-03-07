<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { storeToRefs } from 'pinia'
import { useInventory } from '@/stores/inventory'

const store = useInventory()
const { inventory } = storeToRefs(store)

</script>

<template>
  <div class="card">
    <div class="flex card-container">
      <Fieldset legend="Inventory">
        <div class="field grid">
          <label for="name" class="col-fixed">Add Item</label>
          <InputText id="name" type="text" @keyup.enter="store.addItem" />
        </div>
        <ul>
          <li v-for="(item, index) in inventory" :key="index">
            {{ item }}
            <Button @click="store.removeItem(index)">Remove</Button>
          </li>
        </ul>
      </Fieldset>
    </div>
  </div>
</template>
