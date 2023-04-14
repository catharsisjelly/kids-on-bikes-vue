import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useInventory } from './inventory'

describe('Character Sheet', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('adds an item to the inventory', () => {
    const store = useInventory()
    const item = 'Apple'
    expect(store.inventory).toHaveLength(0)
    store.addItem(item)
    expect(store.inventory).toHaveLength(1)
    expect(store.inventory).toEqual([item])
  })

  it('removes the selected item from the inventory', () => {
    const store = useInventory()
    const items = ['Apple', 'Orange', 'Banana']
    store.inventory = items

    expect(store.inventory).toHaveLength(3)
    store.removeItem(1)
    expect(store.inventory).toHaveLength(2)
    expect(store.inventory).toEqual(['Apple', 'Banana'])
  })
})
