import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterSheet = defineStore('characterSheet', () => {
    const adversityTokens = ref()
    const characterDetails = ref({
        name: '',
        age: undefined,
        fear: '',
        motivation: '',
        flaws: '',
        description: '',
    })
    const arr: Array<string> = []
    const inventory = ref(arr)
    const notes = ref()
    const skills = ref([])
    const statDice = ref({
        flight: undefined,
        fight: undefined,
        brains: undefined,
        brawn: undefined,
        charm: undefined,
        grit: undefined,
    })

    const availableDice = computed(() => {
        const diceAvailable = [
            { name: 'D4', value: 'd4' },
            { name: 'D6', value: 'd6' },
            { name: 'D8', value: 'd8' },
            { name: 'D10', value: 'd10' },
            { name: 'D12', value: 'd12' },
            { name: 'D20', value: 'd20' },
        ];

        const values = Object.values(statDice)

        for (let value of values) {
            if (value === undefined) {
                continue
            }
            const index = diceAvailable.findIndex((element) => element.value === value);
            if (index != -1) {
                console.log('index', index)
                diceAvailable.splice(index, 1);
            } 
        }
        
        console.log('diceAvailable', diceAvailable);

        return diceAvailable;
    });

    return { characterDetails, adversityTokens, inventory, notes, skills, statDice, availableDice }
})
