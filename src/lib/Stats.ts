export interface Strength {
  label: string
  name: string
  description: string
}

export enum CharacterStatLabel {
  FIGHT = 'fight',
  FLIGHT = 'flight',
  CHARM = 'charm',
  GRIT = 'grit',
  BRAINS = 'brains',
  BRAWN = 'brawn',
}

enum CharacterStatDescription {
  FIGHT = 'This stat determines how good a combatant a character is with whatever weapons or fighting skills you decide your character knows. While a character with a high Fight stat won’t be able to pick up a gun and use it effectively if they have never fired one before, this stat will make them good with weapons that they do have experience with. Also, they&apos;ll be able to learn how to use new weapons and fighting skills more easily, if given proper training.',
  FLIGHT = 'This stat determines how fast a character is — as well as how skilled they are at evading their problems (both literally and figuratively). Characters with a high Flight stat will be fast and tough to trap both physically and verbally.',
  CHARM = 'This stat determines how socially adept a character is and how good they are at reading the emotions of another person or group of people. Characters with a high Charm stat will be able to talk themselves out of tough situations and into good ones with relative ease — within reason.',
  GRIT = 'This stat determines how hard it is to break a character emotionally or physically. Characters with a high Grit stat will be able to keep a level head in the worst of situations and will be able to keep their cool even when pushed hard. Finally, this stat also determines how street-smart a character is.',
  BRAINS = 'This stat determines how book-smart a character is. This will determine how well they understand problems, how well they did or are doing in school, and how quickly they’re able to solve academic problems.',
  BRAWN = 'This stat determines how much brute strength a character has. It does not determine how well they can fight — just how well they can lift things and how much physical damage they can take. It also determines how physically intimidating a character is.',
}

export enum Die {
  D4 = 'd4',
  D6 = 'd6',
  D8 = 'd8',
  D10 = 'd10',
  D12 = 'd12',
  D20 = 'd20'
}

export class CharacterStat {
  private name: CharacterStatLabel
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
    return this.name?.charAt(0).toLocaleUpperCase() + this.name?.slice(1);
  }

  getDescription(): string | undefined {
    switch (this.name) {
      case CharacterStatLabel.FIGHT:
        return CharacterStatDescription.FIGHT
      case CharacterStatLabel.FLIGHT:
        return CharacterStatDescription.FLIGHT
      case CharacterStatLabel.BRAINS:
        return CharacterStatDescription.BRAINS
      case CharacterStatLabel.BRAWN:
        return CharacterStatDescription.BRAWN
      case CharacterStatLabel.CHARM:
        return CharacterStatDescription.CHARM
      case CharacterStatLabel.GRIT:
        return CharacterStatDescription.GRIT
    }
  }
}