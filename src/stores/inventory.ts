import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useInventory = defineStore('inventory', () => {
  const inventory: Ref<string[]> = ref([])

  const removeItem = (index: number) => {
    inventory.value.splice(index, 1)
  }

  const addItem = (item: string) => {
    if (item !== null) {
      inventory.value.push(item)
    }
  }

  return {
    inventory,
    addItem,
    removeItem
  }
})
