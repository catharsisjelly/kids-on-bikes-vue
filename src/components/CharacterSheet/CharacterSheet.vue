<script setup lang="ts">
import PlayerType from './PlayerType.vue'
import PlayerDetails from './PlayerDetails.vue'
// import PlayerStrengths from './PlayerStrengths.vue'
// import PlayerStats from './PlayerStats.vue'
// import DiceResults from '../DiceResults.vue'
import PlayerInventory from './PlayerInventory.vue'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia';
// import AdversityTokens from './AdversityTokens.vue'
// import PlayerNotes from './PlayerNotes.vue'

const store = useCharacterSheet()
const { characterType } = storeToRefs(store)
</script>

<template>
  <PlayerType />
  <div v-if="characterType">
    <PlayerDetails />
    <!-- <PlayerStats /> -->
    <!-- <PlayerStrengths /> -->
    <PlayerInventory />
    <!-- <AdversityTokens /> -->
    <!-- <PlayerNotes /> -->
    <!-- <DiceResults /> -->
  </div>
</template>
