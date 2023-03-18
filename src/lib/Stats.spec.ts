import { describe, it, expect, vi } from 'vitest'
import { CharacterStat, CharacterStatLabel } from './Stats'

describe('Character Stats', () => {
  it('Requires you to provide a stat on construction', async () => {
    const stat = new CharacterStat(CharacterStatLabel.BRAINS)
    expect(stat.getLabel()).toMatch('Brains')
    expect(stat.getDescription()).toBeDefined()
  })
})
