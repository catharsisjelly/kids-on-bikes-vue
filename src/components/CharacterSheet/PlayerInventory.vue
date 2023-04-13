<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { storeToRefs } from 'pinia'
import { useInventory } from '@/stores/inventory'
import { ref } from 'vue'

const store = useInventory()
const { inventory } = storeToRefs(store)
const inventoryItem = ref('')
const addItem = () => {
  if (inventoryItem.value != '') {
    store.addItem(inventoryItem.value)
    inventoryItem.value = ''
  }
}
</script>

<template>
  <div class="card">
    <div class="flex card-container">
      <Fieldset legend="Inventory">
        <div class="field grid">
          <label for="name" class="col-fixed">Add Item</label>
          <InputText id="name" type="text" v-model.trim="inventoryItem" />
          <Button @click="addItem">Add Item</Button>
        </div>
        <ul class="card-container">
          <li v-for="(item, index) in inventory" :key="index" class="block">
            {{ item }}
            <Button @click="store.removeItem(index)">Remove</Button>
          </li>
        </ul>
      </Fieldset>
    </div>
  </div>
</template>
