import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerType from './PlayerType.vue'
import { createTestingPinia } from '@pinia/testing'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

describe('Display and set one of the three Character types', () => {
  it('has a visible dropdown in the default state', async () => {
    const testing = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(PlayerType, {
      global: {
        plugins: [testing, PrimeVue, ConfirmationService]
      }
    })

    const dropdown = wrapper.get('.p-dropdown')
    expect(dropdown.html()).toContain('Select a Character Type')
    expect(dropdown.isVisible()).toBeTruthy()
  })

  it('disables the dropdown if the characterType is set', async () => {
    const testing = createTestingPinia({
      createSpy: vi.fn,
      initialState: {
        characterSheet: {
          characterType: 'kid'
        }
      }
    })
    const wrapper = mount(PlayerType, {
      global: {
        plugins: [testing, PrimeVue, ConfirmationService]
      }
    })

    const dropdown = wrapper.get('.p-dropdown')
    expect(dropdown.classes('p-disabled')).toBeTruthy()

    const changeButton = wrapper.get('button[aria-label="Change Character Type"]')
    expect(changeButton).toBeDefined()
  })

  // @todo Figure out how to make this work
  // it('has a visible dropdown', async () => {
  //   const root = document.createElement('div')
  //   root.id = 'root'

  //   const testing = createTestingPinia({ createSpy: vi.fn, initialState: { characterType: 'kid' } })
  //   const store = useCharacterSheet()
  //   const wrapper = mount(PlayerType, {
  //     attachTo: root,
  //     global: {
  //       plugins: [testing, PrimeVue, ConfirmationService],
  //     }
  //   })

  //   const dropdown = wrapper.get('.p-dropdown-trigger')
  //   dropdown.trigger('click')
  //   console.log(root.outerHTML)
  // })
})
