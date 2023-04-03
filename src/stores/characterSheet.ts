import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { CharacterStat, CharacterStatLabel, CharacterType } from '@/lib/Stats'

export const useCharacterSheet = defineStore('characterSheet', () => {
  const notes: Ref<string> = ref('')
  const characterType: Ref<CharacterType | null> = ref(null)
  const name: Ref<string> = ref('')
  const bonuses = ref({
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
  const stats: Ref<Record<CharacterStatLabel, CharacterStat> | undefined> = ref()
  const fears: Ref<string[]> = ref([])
  const flaws: Ref<string[]> = ref([])
  const strengths: Ref<string[]> = ref([])

  const changeCharacterType = (event: any) => {
    characterType.value = event.value
    setDefaults()
  }

  const setDefaults = () => {
    switch (characterType.value) {
      case 'kid':
        bonuses.value.flight = 1
        bonuses.value.charm = 1
        // strengths: ['Quick Healing'],
        ageMin.value = 7
        ageMax.value = 12
        break;
      case 'teen':
        bonuses.value.fight = 1
        bonuses.value.brawn = 1
        // strengths: ['Rebellious'],
        ageMin.value = 13
        ageMax.value = 19
        break;
      case 'adult':
        bonuses.value.brains = 1
        bonuses.value.grit = 1
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
    flaws,
    fears,
    bonuses,
    changeCharacterType,
  }
})
