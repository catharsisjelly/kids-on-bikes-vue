import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { CharacterStat, type CharacterStatLabel, type CharacterType } from '@/lib/Stats'

export const useCharacterSheet = defineStore('characterSheet', () => {
  const notes: Ref<string> = ref('')
  const characterType: Ref<CharacterType | null> = ref(null)
  const name: Ref<string> = ref('')
  const statBonuses: Ref<Record<CharacterStatLabel, number>> = ref({
    flight: 0,
    fight: 0,
    charm: 0,
    brawn: 0,
    brains: 0,
    grit: 0,
  })
  const age: Ref<number> = ref(0)
  const ageMin: Ref<number | undefined> = ref()
  const ageMax: Ref<number | undefined> = ref()
  const ageError: Ref<string | undefined> = ref()
  const motivation: Ref<string> = ref('')
  const description: Ref<string> = ref('')
  const stats: Ref<Record<CharacterStatLabel, CharacterStat>> = ref({
    flight: new CharacterStat('flight'),
    fight: new CharacterStat('fight'),
    charm: new CharacterStat('charm'),
    brawn: new CharacterStat('brawn'),
    brains: new CharacterStat('brains'),
    grit: new CharacterStat('grit'),
  })
  const fears: Ref<string> = ref('')
  const flaws: Ref<string> = ref('')
  const strengths: Ref<string[]> = ref([])

  const changeCharacterType = (event: any) => {
    characterType.value = event.value
    setDefaults()
  }

  const setStatValue = (event: any) => {
    console.log(event.originalEvent.target.id)
    const statClicked = event.originalEvent.target.id
    const underscoreIndex = statClicked.indexOf('_')
    const statToChange: CharacterStatLabel = statClicked.substring(0, underscoreIndex)

    stats.value[statToChange].setDie(event.value)
  }

  const setDefaults = () => {
    switch (characterType.value) {
      case 'kid':
        statBonuses.value.flight = 1
        statBonuses.value.charm = 1
        // strengths: ['Quick Healing'],
        ageMin.value = 7
        ageMax.value = 12
        break;
      case 'teen':
        statBonuses.value.fight = 1
        statBonuses.value.brawn = 1
        // strengths: ['Rebellious'],
        ageMin.value = 13
        ageMax.value = 19
        break;
      case 'adult':
        statBonuses.value.brains = 1
        statBonuses.value.grit = 1
        // strengths: ['Skilled at'],
        ageMin.value = 20
        ageMax.value = undefined
        break;
    }
    if (
      (ageMin.value !== undefined) &&
      (age.value < ageMin.value || age.value > ageMax.value)
    ) {
      age.value = ageMin.value
    }

  }

  return {
    name,
    age,
    ageMin,
    ageMax,
    ageError,
    notes,
    description,
    motivation,
    characterType,
    stats,
    strengths,
    flaws,
    fears,
    statBonuses,
    changeCharacterType,
    setStatValue
  }
})
