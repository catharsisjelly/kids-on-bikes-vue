<script setup lang="ts">
import { useCharacterSheet } from '@/stores/characterSheet';
const characterSheetStore = useCharacterSheet();
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <h2>Pinia Debug</h2>
        </div>
        <div class="col-12">
            <dl>
                <dt>CharacterSheet Store</dt>
                <dd>
                    <pre>{{ JSON.stringify(characterSheetStore) }}</pre>
                </dd>
            </dl>
        </div>
    </div>
</template>