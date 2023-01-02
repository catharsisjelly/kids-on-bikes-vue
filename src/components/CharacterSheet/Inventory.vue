<script setup lang="ts">
import { ref } from 'vue'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'

const inventory = ref()

</script>

<template>
    <div>
        <Fieldset legend="Inventory">
            <Textarea v-model="inventory" />
        </Fieldset>
    </div>
</template>