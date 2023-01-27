<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { inventory } = storeToRefs(store)

const removeItem = (index: number) => {
    inventory.value.splice(index, 1)
}

const addItem = (event: Event) => {
    const target = event.target ?? null;
    if (target !== null) {
        inventory.value.push(target?.value)
    }
}

</script>

<template>
    <div>
        <Fieldset legend="Inventory">
            <ul>
                <li v-for="(item, index) in inventory" :key="index">
                    {{ item }}
                    <button @click="removeItem(index)">Remove</button>
                </li>
            </ul>
            <div class="field grid">
                <label for="name" class="col-fixed">Add Item</label>
                <InputText id="name" type="text" @keyup.enter="addItem" />
            </div>
        </Fieldset>
    </div>
</template>
