<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Fieldset from 'primevue/fieldset'

const skills = ref([])
</script>

<template>
    <div class="card">
        <Fieldset legend="Skills">
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill1" value="Cool Under Pressure" />
                <label for="skill1">Cool Under Pressure</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill2" value="Easygoing" />
                <label for="skill2">Easygoing</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill3" value="Gross" />
                <label for="skill3">Gross</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill4" value="Heroic" />
                <label for="skill4">Heroic</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill5" value="Intuitive" />
                <label for="skill5">Intuitive</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill6" value="Loyal" />
                <label for="skill6">Loyal</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill7" value="Lucky" />
                <label for="skill7">Lucky</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill8" value="Prepared" />
                <label for="skill8">Prepared</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill9" value="Protective" />
                <label for="skill9">Protective</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill10" value="Quick Healing" />
                <label for="skill10">Quick Healing</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill11" value="Skilled At:" />
                <label for="skill11">Skilled At:</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill12" value="Tough" />
                <label for="skill12">Tough</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill13" value="Treasure Hunter" />
                <label for="skill13">Treasure Hunter</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill14" value="Unassuming" />
                <label for="skill14">Unassuming</label>
            </div>
            <div class="field-checkbox">
                <Checkbox v-model="skills" name="skill15" value="Wealthy" />
                <label for="skill15">Wealthy</label>
            </div>
        </Fieldset>
    </div>
</template>