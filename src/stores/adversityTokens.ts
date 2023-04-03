import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdversityTokens = defineStore('adversityTokens', () => {
  const adversityTokens = ref(0)

  return {
    adversityTokens,
  }
})
