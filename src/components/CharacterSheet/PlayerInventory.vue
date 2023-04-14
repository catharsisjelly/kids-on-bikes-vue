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
          <label for="add-intentory-item" class="col-fixed">Add Item</label>
          <InputText id="add-intentory-item" type="text" v-model.trim="inventoryItem" />
          <Button aria-label="Add Item" @click="addItem" icon="pi pi-plus" />
        </div>
        <ul class="card-container">
          <li v-for="(item, index) in inventory" :key="index" class="block">
            {{ item }}
            <Button
              :aria-label="'Remove Item ' + item"
              icon="pi pi-minus"
              @click="store.removeItem(index)"
            />
          </li>
        </ul>
      </Fieldset>
    </div>
  </div>
</template>
