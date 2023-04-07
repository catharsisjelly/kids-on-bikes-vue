import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdversityTokens = defineStore('adversityTokens', () => {
  const adversityTokens: Ref<number> = ref(0)

  return {
    adversityTokens
  }
})
