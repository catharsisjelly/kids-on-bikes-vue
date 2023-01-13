<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { adversityTokens } = storeToRefs(store)
</script>

<template>
    <div>
        <Fieldset legend="Adversary Tokens">
            <div class="field col-12 md:col-3">
                <InputNumber
                    inputId="vertical"
                    v-model="adversityTokens"
                    mode="decimal"
                    showButtons
                    decrementButtonClass="p-button-secondary"
                    incrementButtonClass="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                />
            </div>
        </Fieldset>
    </div>
</template>
