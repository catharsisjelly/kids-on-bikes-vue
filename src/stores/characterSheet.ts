import { unref, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterSheet = defineStore('characterSheet', () => {
    const adversityTokens = ref(0)

    const characterTypeBonuses = {
        kid: {
            strengths: ['Quick Healing'],
            stats: {
                flight: '+1',
                charm: '+1',
            },
        },
        teen: {
            strengths: ['Rebellious'],
            stats: {
                fight: '+1',
                brawn: '+1',
            },
        },
        adult: {
            strengths: ['Skilled at'],
            stats: {
                brains: '+1',
                grit: '+1',
            },
        },
    }

    const chosenCharacterType = ref()

    const characterDetails = ref({
        name: '',
        age: undefined,
        fear: '',
        motivation: '',
        flaws: '',
        description: '',
    })
    const inventory: Ref<string[]> = ref([])
    const notes = ref()
    const strengths = ref([])
    const statDice = ref({
        flight: undefined,
        fight: undefined,
        brains: undefined,
        brawn: undefined,
        charm: undefined,
        grit: undefined,
    })

    const diceAvailable = [
        { name: 'D4', value: 'd4' },
        { name: 'D6', value: 'd6' },
        { name: 'D8', value: 'd8' },
        { name: 'D10', value: 'd10' },
        { name: 'D12', value: 'd12' },
        { name: 'D20', value: 'd20' },
    ]

    const checkDuplicateDice = (): Boolean => {
        const values = Object.values(unref(statDice))

        const duplicates = values.filter(
            (currentValue, currentIndex) =>
                typeof currentValue === 'string' && values.indexOf(currentValue) !== currentIndex
        )

        if (duplicates.length >= 1) {
            return true
        }
        return false
    }

    const changeCharacterType = (event: any) => {
        chosenCharacterType.value = event.value
        const bonuses = characterTypeBonuses[event.value]
        strengths.value = bonuses.strengths
    }

    return {
        characterDetails,
        chosenCharacterType,
        adversityTokens,
        inventory,
        notes,
        strengths,
        statDice,
        checkDuplicateDice,
        changeCharacterType,
    }
})
