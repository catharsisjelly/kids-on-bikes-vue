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
    const wrapper = mount(PlayerInventory, {
      global: {
        plugins: [testing, PrimeVue]
      }
    })

    const store = useInventory()

    const input = wrapper.get('.p-inputtext')
    input.setValue('hello')
    input.trigger('keyup.enter')
    expect(store.addItem).toBeCalledTimes(1)
  })
})
