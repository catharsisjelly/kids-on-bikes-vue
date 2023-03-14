import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StrengthCheckbox from '@/components/CharacterSheet/StrengthCheckbox.vue'

describe('Dice Roller', () => {
  it('Displays the Button', async () => {
    const wrapper = mount(StrengthCheckbox, {
      props: {
        inputName: 'wealthy',
        label: 'test',
        description: 'Foo',
        value: false
      }
    })

    const label = wrapper.get('label')
    const checkbox = wrapper.get('input[type="checkbox"]')
    console.log(checkbox, checkbox)

    expect(label.text()).toContain('test')
  })
})
