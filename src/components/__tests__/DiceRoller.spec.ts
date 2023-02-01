import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import DiceRoller from '@/components/DiceRoller.vue'

describe('Dice Roller', () => {
    it('Displays the Button', async () => {
        const wrapper = mount(DiceRoller, {
            global: {
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            },
            props: {
                notation: 'd6',
            },
        })

        const rollButton = wrapper.get('button')
        expect(rollButton.text()).toContain('Roll')
    })
})
