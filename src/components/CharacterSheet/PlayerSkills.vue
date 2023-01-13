<script setup lang="ts">
import { ref, unref } from 'vue'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Fieldset from 'primevue/fieldset'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { skills } = storeToRefs(store)
const displayError = ref(false)

const changeSkill = () => {
    if (unref(skills).length > 3) {
        displayError.value = true
    } else {
        displayError.value = false
    }
}
</script>

<template>
    <div>
        <div v-if="displayError">
            <p>The maximum number of skills are 3</p>
        </div>
        <div>
            <Fieldset legend="Skills">
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill1"
                        value="Cool Under Pressure"
                        @input="changeSkill"
                    />
                    <label for="skill1">Cool Under Pressure</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill2"
                        value="Easygoing"
                        @input="changeSkill"
                    />
                    <label for="skill2">Easygoing</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill3"
                        value="Gross"
                        @input="changeSkill"
                    />
                    <label for="skill3">Gross</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill4"
                        value="Heroic"
                        @input="changeSkill"
                    />
                    <label for="skill4">Heroic</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill5"
                        value="Intuitive"
                        @input="changeSkill"
                    />
                    <label for="skill5">Intuitive</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill6"
                        value="Loyal"
                        @input="changeSkill"
                    />
                    <label for="skill6">Loyal</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill7"
                        value="Lucky"
                        @input="changeSkill"
                    />
                    <label for="skill7">Lucky</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill8"
                        value="Prepared"
                        @input="changeSkill"
                    />
                    <label for="skill8">Prepared</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill9"
                        value="Protective"
                        @input="changeSkill"
                    />
                    <label for="skill9">Protective</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill10"
                        value="Quick Healing"
                        @input="changeSkill"
                    />
                    <label for="skill10">Quick Healing</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill11"
                        value="Skilled At:"
                        @input="changeSkill"
                    />
                    <label for="skill11">Skilled At:</label>
                    <InputText type="text"></InputText>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill12"
                        value="Tough"
                        @input="changeSkill"
                    />
                    <label for="skill12">Tough</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill13"
                        value="Treasure Hunter"
                        @input="changeSkill"
                    />
                    <label for="skill13">Treasure Hunter</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill14"
                        value="Unassuming"
                        @input="changeSkill"
                    />
                    <label for="skill14">Unassuming</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox
                        v-model="skills"
                        name="skill15"
                        value="Wealthy"
                        @input="changeSkill"
                    />
                    <label for="skill15">Wealthy</label>
                </div>
            </Fieldset>
        </div>
    </div>
</template>
