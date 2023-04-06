import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCharacterSheet } from './characterSheet'

describe('Character Sheet', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('sets the character type & defaults', () => {
    const characterSheet = useCharacterSheet()
    const characterType = 'kid'
    characterSheet.changeCharacterType({ value: characterType })
    expect(characterSheet.characterType).toEqual(characterType)
    expect(characterSheet.statBonuses).toEqual({ brains: 0, brawn: 0, grit: 0, fight: 0, flight: 1, charm: 1 })
  })
})
