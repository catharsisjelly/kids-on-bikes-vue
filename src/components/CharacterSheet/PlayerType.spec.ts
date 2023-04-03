import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerType from './PlayerType.vue'
import { createTestingPinia } from '@pinia/testing'
import PrimeVue from 'primevue/config'

document.body.innerHTML = `
  <div>
    <h1>Non Vue app</h1>
    <div id="app"></div>
  </div>
`

describe('Display and set one of the three Character types', () => {
    it('has a visible dropdown', async () => {
        const testing = createTestingPinia({ createSpy: vi.fn })
        const wrapper = mount(PlayerType, {
            global: {
                plugins: [
                    testing,
                    PrimeVue
                ]
            },
        })

        const dropdown = wrapper.get('.p-dropdown')
        expect(dropdown.html()).toContain('Select a Character Type')
        expect(dropdown.isVisible()).toBeTruthy()
    })

    it('has the three expected options', async () => {
        const testing = createTestingPinia({ createSpy: vi.fn })
        const wrapper = mount(PlayerType, {
            attachTo: document.getElementById('app'),
            global: {
                plugins: [
                    testing,
                    PrimeVue,
                ]
            },
        })

        await wrapper.get('.p-dropdown').trigger('click')
        const dropdownItems = document.body.getElementsByClassName('p-dropdown-item')
        expect(dropdownItems.length).toEqual(3)
        expect(document.body.innerHTML).toContain('Kid')
        expect(document.body.innerHTML).toContain('Teen')
        expect(document.body.innerHTML).toContain('Adult')
    })
})
