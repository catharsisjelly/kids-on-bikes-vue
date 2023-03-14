import type { CharacterStatLabel, CharacterStat, Strength } from './Stats'


export class Character {
  public type?: string
  public stats: Record<CharacterStatLabel, CharacterStat> | null = null
  public strengths: Array<Strength> = []
  public name: string = ''
  public age: number | null = null
  public fears: Array<string> = []
  public motivation: string = ''
  public flaws: Array<string> = []
  public description: string = ''

  addStrength(strength: Strength) {
    this.strengths.push(strength);
  }

  getStrengthsAvailable(): Array<Strength> {
    return [
      {
        name: 'cool-under-pressure',
        label: 'Cool Under Pressure',
        description:
          'May spend 1 Adversity Token to take half of your die&apos;s value instead of rolling on a Snap Decision.'
      },
      {
        name: 'easygoing',
        label: 'Easygoing',
        description: 'Gain 2 Adversity Tokens when you fail, instead of 1.'
      },
      {
        name: 'gross',
        label: 'Gross',
        description:
          'You have some kind of gross bodily trick (loud, quiet, smelly... up to you) that you can do on command.'
      },
      {
        name: 'heroic',
        label: 'Heroic',
        description:
          'You do not need the GM&apos;s permission to spend Adversity Tokens to ignore fears.'
      },
      {
        name: 'intuitive',
        label: 'Intuitive',
        description:
          'May spend 1 Adversity Token to ask the GM about your surroundings, an NPC, or the like. The GM must answer honestly.'
      },
      {
        name: 'loyal',
        label: 'Loyal',
        description:
          'Each of the Adversity Tokens you spend to help your friends gives them a +2 instead of a +1. Lucky May spend 2 Adversity Tokens to reroll a stat check.'
      },
      {
        name: 'prepared',
        label: 'Prepared',
        description:
          'May spend 2 Adversity Tokens to just happen to have one commonplace item with you (GM&apos;s discretion).'
      },
      {
        name: 'protective',
        label: 'Protective',
        description: 'Add + 3 to rolls when defending one of your friends.'
      },
      {
        name: 'quick-healing',
        label: 'Quick Healing',
        description:
          'You recover from injuries more quickly, and don&apos;t suffer lasting effects from most injuries.'
      },
      {
        name: 'rebellious',
        label: 'Rebellious',
        description:
          'Add +3 to rolls when persuading or resisting persuasion from children.Add + 3 to rolls when resisting persuasion from adults.'
      },
      {
        name: 'skilled-at',
        label: 'Skilled at',
        description:
          'Choose a skill(GM&apos;s discretion).You are assumed to succeed when making even moderately difficult checks(9 or less) involving this skill.If the GM determines that you do need to roll for a more difficult check, add up to + 3 to your roll.'
      },
      {
        name: 'tough',
        label: 'Tough',
        description:
          'If you lose a combat roll, add +3 to the negative number.You still lose the roll no matter what, but could reduce your loss to -1.'
      },
      {
        name: 'trasure-hunter',
        label: 'Treasure Hunter',
        description: 'May spend 1 Adversity Token to find a useful item in your surroundings.'
      },
      {
        name: 'unassuming',
        label: 'Unassuming',
        description:
          'May spend 2 Adversity Tokens to not be seen, within reason (GM&apos;s discretion).'
      },
      {
        name: 'wealthy',
        label: 'Wealthy',
        description:
          'May spend money as though you were in a higher age bracket.For example, a wealthy child is considered to have the disposable income of a typical teen, and a wealthy teen is considered to have the disposable income of a typical adult.A wealthy adult is considered to not have to worry too much about money — they would certainly be able to buy anything they need, and likely able to spend their way out of a lot of situations.'
      }
    ]
  }
}
