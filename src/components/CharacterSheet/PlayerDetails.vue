<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'

const characterDetails = ref({
    name: '',
    age: undefined,
    fear: '',
    motivation: '',
    flaws: '',
    description: '',
})
</script>

<template>
    <div class="card">
        <Fieldset legend="Character Details" style="width: 100px">
            <div class="field grid">
                <label for="name" class="col-fixed">Name</label>
                <InputText
                    id="name"
                    type="text"
                    v-model="characterDetails.name"
                />
            </div>
            <div class="field grid">
                <label for="age">Age</label>
                <InputNumber id="age" v-model="characterDetails.age" />
            </div>
            <div class="field grid">
                <label for="fear">Fear</label>
                <InputText
                    id="fear"
                    type="text"
                    v-model="characterDetails.fear"
                />
            </div>
            <div class="field grid">
                <label for="motivation">Motivation</label>
                <InputText
                    id="motivation"
                    type="text"
                    v-model="characterDetails.motivation"
                />
            </div>
            <div class="field grid">
                <label for="flaws">Flaws</label>
                <InputText
                    id="flaws"
                    type="text"
                    v-model="characterDetails.flaws"
                />
            </div>
            <div class="field grid">
                <label for="description">Description</label>
                <Textarea
                    id="description"
                    v-model="characterDetails.description"
                />
            </div>
        </Fieldset>
    </div>
</template>
