import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Character } from '@/lib/Character'

export const useCharacterSheet = defineStore('characterSheet', () => {
  const adversityTokens = ref(0)

  const inventory = ref([])
  const notes = ref()
  let character = ref(null);
  let characterType = ref(null)

  const changeCharacterType = (event: any) => {
    character.value = new Character({
      type: event?.value
    })
    characterType.value = event.value
  }

  const inventoryRemoveItem = (index: number) => {
    inventory.value.splice(index, 1)
  }

  const inventoryAddItem = (event: any) => {
    console.log('inventory', event);

    const target = event.target ?? null
    if (target !== null) {
      inventory.value.push(target?.value)
    }
  }

  return {
    adversityTokens,
    character,
    inventory,
    notes,
    characterType,
    changeCharacterType,
    inventoryAddItem,
    inventoryRemoveItem
  }
})
