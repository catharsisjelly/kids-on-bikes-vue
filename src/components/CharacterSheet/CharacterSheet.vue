<script setup lang="ts">
import { ref } from 'vue'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'
import Details from './Details.vue'
import Skills from './Skills.vue'
import Stats from './Stats.vue'
import Inventory from './Inventory.vue'
import AdversityTokens from './AdversityTokens.vue'

const notes = ref()

</script>

<template>
    <!-- <Details /> -->
    <!-- <Skills /> -->
    <Stats />
    <!-- <Inventory /> -->
    <!-- <AdversityTokens /> -->
    <div>
        <Fieldset legend="Notes">
            <Textarea v-model="notes" />
        </Fieldset>
    </div>
</template>