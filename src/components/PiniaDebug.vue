<script setup lang="ts">
import { useAdversityTokens } from '@/stores/adversityTokens'
import { useCharacterSheet } from '@/stores/characterSheet'
import { useInventory } from '@/stores/inventory'

const characterSheetStore = useCharacterSheet()
const adversityTokenStore = useAdversityTokens()
const inventoryStore = useInventory()
</script>

<template>
  <div class="card">
    <div class="col-12">
      <h2>Pinia Debug</h2>
    </div>
    <div class="card-container">
      <dl>
        <dt>CharacterSheet Store</dt>
        <dd>
          <pre><code class="JSON">{{ JSON.stringify(characterSheetStore, null, 2) }}</code></pre>
        </dd>
        <dt>Adversity Tokens Store</dt>
        <dd>
          <pre><code class="JSON">{{ JSON.stringify(adversityTokenStore, null, 2) }}</code></pre>
        </dd>
        <dt>Inventory Store</dt>
        <dd>
          <pre><code class="JSON">{{ JSON.stringify(inventoryStore, null, 2) }}</code></pre>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style></style>
