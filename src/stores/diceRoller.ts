import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface RollLogEntry {
  statName: any
  date: Date
  roll: any
}

export const useDiceRollerLog = defineStore('DiceRollerLog', () => {
  const diceRollerLog: Ref<Array<RollLogEntry>> = ref([])

  const addToLog = (entry: RollLogEntry) => {
    diceRollerLog.value.push(entry)
  }

  const clearLog = () => {
    diceRollerLog.value = []
  }

  return {
    diceRollerLog,
    addToLog,
    clearLog
  }
})
