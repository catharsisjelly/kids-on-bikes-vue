import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface RollLogEntry {
    date: Date
    roll: any
}

export const useDiceRollerLog = defineStore('DiceRollerLog', () => {
    const diceRollerLog: Ref<Array<RollLogEntry>> = ref([])

    const addToLog = (result: RollLogEntry) => {
        diceRollerLog.value.push(result)
    }

    const clearLog = () => {
        diceRollerLog.value = []
    }

    return {
        diceRollerLog,
        addToLog,
        clearLog,
    }
})
