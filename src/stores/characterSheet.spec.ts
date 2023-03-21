import { describe, it, vi, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCharacterSheet } from './characterSheet'

describe('Character Sheet', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('sets the character type & defaults', () => {
    const characterSheet = useCharacterSheet()
    const characterType = 'kid'
    expect(characterSheet.character).toBe(null)
    characterSheet.changeCharacterType({ value: characterType })
    expect(characterSheet.character.type).toEqual(characterType)
    expect(characterSheet.characterType).toEqual(characterType)
    expect(characterSheet.character.bonuses).toEqual({ flight: 1, charm: 1 })
  })

  it('adds an item to the inventory', () => {
    const characterSheet = useCharacterSheet()
    const item = 'Apple'
    expect(characterSheet.inventory).toHaveLength(0)
    characterSheet.inventoryAddItem({ value: item })
    expect(characterSheet.inventory).toHaveLength(1)
    expect(characterSheet.inventory).toEqual([item])
  })

  it('removes the selected item from the inventory', () => {
    const characterSheet = useCharacterSheet()
    const items = ['Apple', 'Orange', 'Banana']
    characterSheet.inventory = items

    expect(characterSheet.inventory).toHaveLength(3)
    characterSheet.inventoryRemoveItem(1)
    expect(characterSheet.inventory).toHaveLength(2)
    expect(characterSheet.inventory).toEqual(['Apple', 'Banana'])
  })
})
