import { describe, it, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import DiceRoller from '@/components/DiceRoller.vue'

describe('Dice Roller', () => {
    it('Displays the Form', async () => {
        const wrapper = mount(DiceRoller, {
            global: { plugins: [createTestingPinia({ createSpy: fn })] },
            props: {},
            notation: "d6"
        })

        const rollResults = wrapper.find('[data-test-id=rollResults]')
        expect(rollResults.exists()).toBe(false)
    })

    it('Displays the player results after clicking Roll', async () => {
        const wrapper = mount(DiceRoller, {
            notation: "d6"
        })
        await wrapper.get('button').trigger('click')

        const rollResults = wrapper.get('[data-test-id=rollResults]')
        expect(rollResults.text()).toContain('Player Results')
        expect(wrapper.text()).toContain('Number of Dice to roll')
    })
})
