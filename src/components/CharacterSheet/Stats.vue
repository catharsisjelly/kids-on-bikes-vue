<script setup lang="ts">
import { ref, unref } from 'vue'
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

const displayError = ref(false)

const changeAvailableDice = ({originalEvent, value}: {originalEvent: Event, value: any}) => {
    const values = Object.values(unref(stats))
    const hasDuplicates = values.filter((item: any, index: number) => {
        if (item === undefined) {
            return
        }
        return values.indexOf(item) !== index
    })
    if (hasDuplicates.length >= 1) {
        displayError.value = true
    } else {
        displayError.value = false
    }
}

</script>

<template>
    <div v-if="displayError">You should only have one of each dice</div>
    <div class="card">
        <Fieldset legend="Stats">
            <div>
                <div>Fight</div>
                <Dropdown v-model="stats.fight" inputId="fight" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
            <div>
                <div>Flight</div>
                <Dropdown v-model="stats.flight" inputId="flight" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
            <div>
                <div>Brains</div>
                <Dropdown v-model="stats.brains" inputId="brains" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
            <div>
                <div>Brawn</div>
                <Dropdown v-model="stats.brawn" inputId="brawn" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
            <div>
                <div>Charm</div>
                <Dropdown v-model="stats.charm" inputId="charm" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
            <div>
                <div>Grit</div>
                <Dropdown v-model="stats.grit" inputId="grit" :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" @change="changeAvailableDice"/>
            </div>
        </Fieldset>
    </div>
</template>