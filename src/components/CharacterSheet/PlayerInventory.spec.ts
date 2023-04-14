import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PrimeVue from 'primevue/config'
import PlayerInventory from './PlayerInventory.vue'
import { useInventory } from '@/stores/inventory'

describe('Display and set one of the three Character types', () => {
  it('has a visible textbox', () => {
    const testing = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(PlayerInventory, {
      global: {
        plugins: [testing, PrimeVue]
      }
    })

    const input = wrapper.get('.p-inputtext')
    expect(input.isVisible()).toBeTruthy()
  })

  it('adds an item to the inventory', () => {
    const testing = createTestingPinia({ createSpy: vi.fn })
    const store = useInventory()

    const wrapper = mount(PlayerInventory, {
      global: {
        plugins: [testing, PrimeVue]
      }
    })

    const input = wrapper.get('.p-inputtext')
    input.setValue('hello')

    const button = wrapper.get("button[aria-label='Add Item']")
    button.trigger('click')
    expect(store.addItem).toBeCalledTimes(1)
  })

  it('removes an item to the inventory', () => {
    const testing = createTestingPinia({ createSpy: vi.fn })
    const store = useInventory()
    store.inventory = ['Apple']

    const wrapper = mount(PlayerInventory, {
      global: {
        plugins: [testing, PrimeVue]
      }
    })

    const button = wrapper.get("button[aria-label='Remove Item Apple']")
    button.trigger('click')
    expect(store.removeItem).toBeCalledTimes(1)
  })
})
