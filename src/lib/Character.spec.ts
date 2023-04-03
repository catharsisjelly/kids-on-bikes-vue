import { describe, it, expect } from 'vitest'
import { Character } from './Character'

describe('Character construction requires a type', () => {
  it('Requires you to provide a type on construction', () => {
    const character = new Character({
      type: 'kid',
    })

    expect(character.type).toMatch('kid')
    expect(character.name).toBeUndefined()
    expect(character.getBonuses()).toEqual({ flight: 1, charm: 1 })
  })
});

describe('Character age is restricted by type', () => {
  it('Restricts the age of a kid >= 7 or < 12', () => {
    const character = new Character({
      type: 'kid'
    })

    expect(() => { character.setAge(6) }).toThrowError(/Kid/)
    expect(() => { character.setAge(13) }).toThrowError(/Kid/)
  })

  it('Restricts the age of a teen >= 13 or < 20', () => {
    const character = new Character({
      type: 'teen'
    })

    expect(() => { character.setAge(12) }).toThrowError(/Teen/)
    expect(() => { character.setAge(20) }).toThrowError(/Teen/)
  })

  it('Restricts the age of a teen >= 13 or < 20', () => {
    const character = new Character({
      type: 'adult'
    })

    expect(() => { character.setAge(19) }).toThrowError(/Adult/)
  })

  it('Restricts the age of a teen >= 13 or < 20', () => {
    const character = new Character({
      type: 'adult'
    })

    character.setAge(20)
    expect(character.getAge()).toEqual(20)
  })
})
