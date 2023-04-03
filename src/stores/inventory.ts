import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useInventory = defineStore('inventory', () => {
    const inventory: Ref<string[]> = ref([])

    const removeItem = (index: number) => {
        inventory.value.splice(index, 1)
    }

    const addItem = (event: any) => {
        if (event.target.value !== null) {
            inventory.value.push(event.target.value)
        }
    }

    return {
        inventory,
        addItem,
        removeItem
    }
})
