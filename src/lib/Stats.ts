export interface Strength {
  label: string
  description: string
}

export const statLabels: string[] = ['fight', 'flight', 'charm', 'grit', 'brains', 'brawn']
export const strengthValues: string[] = [
  'cool-under-pressure',
  'easygoing',
  'gross',
  'heroic',
  'intuitive',
  'loyal',
  'prepared',
  'protective',
  'quick-healing',
  'rebellious',
  'skilled-at',
  'tough',
  'treasure-hunter',
  'unassuming',
  'wealthy'
]

export type CharacterType = 'kid' | 'teen' | 'adult'
export type CharacterStatLabel = (typeof statLabels)[number]
export type StrengthValue = (typeof strengthValues)[number]

enum CharacterStatDescription {
  FIGHT = 'This stat determines how good a combatant a character is with whatever weapons or fighting skills you decide your character knows. While a character with a high Fight stat won’t be able to pick up a gun and use it effectively if they have never fired one before, this stat will make them good with weapons that they do have experience with. Also, they&apos;ll be able to learn how to use new weapons and fighting skills more easily, if given proper training.',
  FLIGHT = 'This stat determines how fast a character is — as well as how skilled they are at evading their problems (both literally and figuratively). Characters with a high Flight stat will be fast and tough to trap both physically and verbally.',
  CHARM = 'This stat determines how socially adept a character is and how good they are at reading the emotions of another person or group of people. Characters with a high Charm stat will be able to talk themselves out of tough situations and into good ones with relative ease — within reason.',
  GRIT = 'This stat determines how hard it is to break a character emotionally or physically. Characters with a high Grit stat will be able to keep a level head in the worst of situations and will be able to keep their cool even when pushed hard. Finally, this stat also determines how street-smart a character is.',
  BRAINS = 'This stat determines how book-smart a character is. This will determine how well they understand problems, how well they did or are doing in school, and how quickly they’re able to solve academic problems.',
  BRAWN = 'This stat determines how much brute strength a character has. It does not determine how well they can fight — just how well they can lift things and how much physical damage they can take. It also determines how physically intimidating a character is.'
}

export type Die = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20'

export class CharacterStat {
  public name: CharacterStatLabel
  public die: Die | null = null

  constructor(name: CharacterStatLabel) {
    this.name = name
  }

  setDie(die: Die | null) {
    this.die = die
  }

  getDie(): Die | null {
    return this.die
  }

  getLabel(): string | undefined {
    return this.name?.charAt(0).toLocaleUpperCase() + this.name?.slice(1)
  }

  getDescription(): string | undefined {
    switch (this.name) {
      case 'fight':
        return CharacterStatDescription.FIGHT
      case 'flight':
        return CharacterStatDescription.FLIGHT
      case 'brains':
        return CharacterStatDescription.BRAINS
      case 'brawn':
        return CharacterStatDescription.BRAWN
      case 'charm':
        return CharacterStatDescription.CHARM
      case 'grit':
        return CharacterStatDescription.GRIT
    }
  }
}
