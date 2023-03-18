<script setup lang="ts">
import { useCharacterSheet } from '@/stores/characterSheet';
import { storeToRefs } from 'pinia'

const characterSheetStore = useCharacterSheet();
</script>

<template>
    <div class="card">
        <div class="flex card-container">
            <h2>Pinia Debug</h2>
        </div>
        <div class="flex card-container">
            <dl>
                <dt>CharacterSheet Store</dt>
                <dd>
                    <pre>{{ JSON.stringify(characterSheetStore) }}</pre>
                </dd>
            </dl>
        </div>
    </div>
</template>