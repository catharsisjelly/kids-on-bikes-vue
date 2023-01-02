<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'

const adversityToken = ref(0)

</script>

<template>
    <div>
        <Fieldset legend="Adversary Tokens">
            <div class="field col-12 md:col-3">
                <InputNumber inputId="vertical" v-model="adversityToken" mode="decimal" showButtons
                    decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary"
                    incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div>
        </Fieldset>
    </div>
</template>