import { describe, it, expect } from 'vitest'
import { CharacterStat } from './Stats'

describe('Character Stats', () => {
  it('Requires you to provide a stat on construction', async () => {
    const stat = new CharacterStat('brains')
    expect(stat.getLabel()).toMatch('Brains')
    expect(stat.getDescription()).toBeDefined()
  })
})
