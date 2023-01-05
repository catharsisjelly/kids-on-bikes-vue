import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerInventory from '@/components/CharacterSheet/PlayerInventory.vue'

describe('Player Inventory', () => {
    it('Adds to the inventory', async () => {
        const wrapper = mount(PlayerInventory)
        await wrapper.get('input').setValue('foo')
        await wrapper.get('input').trigger('keyup.enter')

        const rollResults = wrapper.findAll('[data-test-id=inventory] > li')
        expect(rollResults).toHaveLength(1)
    })

    it('Removes from the inventory', async () => {
        const wrapper = mount(PlayerInventory)
        await wrapper.get('input').setValue('foo')
        await wrapper.get('input').trigger('keyup.enter')

        await wrapper.get('button').trigger('click')

        const rollResults = wrapper.findAll('[data-test-id=inventory] > li')
        expect(rollResults).toHaveLength(0)
    })
})
