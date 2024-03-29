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
    grit: 0
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
    grit: new CharacterStat('grit')
  })
  const fears: Ref<string> = ref('')
  const flaws: Ref<string> = ref('')
  const strengths: Ref<string[]> = ref([])
  const skilledAtSkill: Ref<string> = ref('')

  const changeCharacterType = (event: any) => {
    characterType.value = event.value
    setDefaults()
  }

  const setStatDiceValue = (event: any, statClicked: CharacterStatLabel) => {
    stats.value[statClicked].setDie(event.value)
  }

  const setDefaults = () => {
    skilledAtSkill.value = ''
    switch (characterType.value) {
      case 'kid':
        setBonuses(['flight', 'charm'], 1)
        setBonuses(['fight', 'brawn', 'brains', 'grit'], 0)
        strengths.value = ['quick-healing']
        ageMin.value = 7
        ageMax.value = 12
        break
      case 'teen':
        setBonuses(['fight', 'brawn'], 1)
        setBonuses(['flight', 'charm', 'brains', 'grit'], 0)
        strengths.value = ['rebellious']
        ageMin.value = 13
        ageMax.value = 19
        break
      case 'adult':
        setBonuses(['brains', 'grit'], 1)
        setBonuses(['flight', 'fight', 'charm', 'brawn'], 0)
        strengths.value = ['skilled-at']
        ageMin.value = 20
        ageMax.value = undefined
        break
    }
    if (ageMin.value !== undefined && age.value < ageMin.value) {
      age.value = ageMin.value
    }
  }

  const setBonuses = (stats: CharacterStatLabel[], bonus: number) => {
    for (const stat of stats) {
      statBonuses.value[stat] = bonus
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
    skilledAtSkill,
    flaws,
    fears,
    statBonuses,
    changeCharacterType,
    setStatDiceValue
  }
})
