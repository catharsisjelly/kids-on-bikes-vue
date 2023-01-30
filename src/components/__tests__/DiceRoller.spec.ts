import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import DiceRoller from '@/components/DiceRoller.vue'
import { useDiceRollerLog } from '@/stores/diceRoller'

describe('Dice Roller', () => {
    it('Displays the Button', async () => {
        const wrapper = mount(DiceRoller, {
            global: { plugins: [createTestingPinia({ createSpy: vi.fn })] },
            props: {
                notation: "d6"
            },
        })

        const rollButton = wrapper.get('button')
        expect(rollButton.text()).toContain('Roll')        
    })

    // it('Displays the player results after clicking Roll', async () => {
    //     const wrapper = mount(DiceRoller, {
    //         notation: "d6"
    //     })
    //     await wrapper.get('button').trigger('click')

    //     const rollResults = wrapper.get('[data-test-id=rollResults]')
    //     expect(rollResults.text()).toContain('Player Results')
    //     expect(wrapper.text()).toContain('Number of Dice to roll')
    // })
})
