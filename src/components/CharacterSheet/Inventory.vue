<script setup lang="ts">
import { ref } from 'vue'
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'

const inventory = ref([])

const removeItem = (index: number) => {
    inventory.value.splice(index, 1)
}

const addItem = (event: Event) => {
    if (event.target !== null) {
        inventory.value.push(event.target.value)
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
                <InputText id="name" type="text" @keyup.enter="addItem"/>
            </div>
        </Fieldset>
    </div>
</template>