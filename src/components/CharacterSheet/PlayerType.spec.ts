import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerType from './PlayerType.vue'
import { createTestingPinia } from '@pinia/testing'
import PrimeVue from 'primevue/config'

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
})
