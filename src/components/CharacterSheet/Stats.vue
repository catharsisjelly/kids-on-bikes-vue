<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'

const availableDice: any = [
    { name: 'D4', value: 'd4' },
    { name: 'D6', value: 'd6' },
    { name: 'D8', value: 'd8' },
    { name: 'D10', value: 'd10' },
    { name: 'D12', value: 'd12' },
    { name: 'D20', value: 'd20' },
]

const stats = ref({
    flight: undefined,
    fight: undefined,
    brains: undefined,
    brawn: undefined,
    charm: undefined,
    grit: undefined,
})
</script>

<template>
    <div class="card">
        <Fieldset legend="Stats">
            <div>
                <div>Fight</div>
                <Dropdown v-model="stats.fight" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Flight</div>
                <Dropdown v-model="stats.flight" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Brains</div>
                <Dropdown v-model="stats.brains" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Brawn</div>
                <Dropdown v-model="stats.brawn" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Charm</div>
                <Dropdown v-model="stats.charm" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Grit</div>
                <Dropdown v-model="stats.grit" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
        </Fieldset>
    </div>
</template>