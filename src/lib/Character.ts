import type { CharacterStat, Strength } from './Stats'


type CharacterConstructor = {
  type: CharacterType
  name?: string
  fears?: Array<string>
  motivation?: string
  flaws?: Array<string>
  description?: string
}

export class Character {
  public type: string
  private stats: any = {}
  public bonuses: any = {}
  public strengths: any = {}
  public name?: string = ''
  private age?: number | undefined
  public fears?: Array<string> = []
  public motivation?: string = ''
  public flaws?: Array<string> = []
  public description?: string = ''

  constructor(options: CharacterConstructor) {
    const { type, name, fears, motivation, flaws, description } = options
    this.type = type
    this.name = name
    this.fears = fears
    this.motivation = motivation
    this.flaws = flaws
    this.description = description

    this.setDefaults()
  }

  private setDefaults() {
    switch (this.type) {
      case 'kid':
        this.bonuses.flight = 1
        this.bonuses.charm = 1
        // strengths: ['Quick Healing'],
        break;
      case 'teen':
        this.bonuses.fight = 1
        this.bonuses.brawn = 1
        // strengths: ['Rebellious'],
        break;
      case 'adult':
        this.bonuses.brains = 1
        this.bonuses.grit = 1
        // strengths: ['Skilled at'],
        break;
    }
  }

  getBonuses() {
    return this.bonuses;
  }

  public setAge(age: number): void | never {
    switch (this.type) {
      case 'kid':
        if (age < 7 || age > 12) {
          throw new Error('Kid age must be >= 7 or < 13')
        }
        break
      case 'teen':
        if (age < 13 || age > 19) {
          throw new Error('Teen age must be >= 13 or < 20')
        }
        break
      case 'adult':
        if (age < 20) {
          throw new Error('Adult age must be >= 20')
        }
        this.age = age
        break
    }
  }

  public getAge(): number | undefined {
    return this.age
  }

  addStrength(strength: Strength) {
    this.strengths[strength.label] = strength
  }

  setStat(stat: CharacterStat) {
    this.stats[stat.name] = stat;
  }
}
