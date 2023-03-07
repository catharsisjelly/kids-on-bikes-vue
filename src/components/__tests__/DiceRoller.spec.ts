import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import DiceRoller from '@/components/DiceRoller.vue'
import { useDiceRollerLog } from '@/stores/diceRoller'

describe('Dice Roller', () => {
  it('Displays the Button', async () => {
    const testing = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(DiceRoller, {
      global: {
        plugins: [testing]
      },
      props: {
        notation: 'd6',
        statName: 'test'
      }
    })

    const store = useDiceRollerLog()

    const rollButton = wrapper.get('button')
    rollButton.trigger('click')
    expect(rollButton.text()).toContain('Roll')
    expect(store.addToLog).toBeCalledTimes(1)
  })
})
