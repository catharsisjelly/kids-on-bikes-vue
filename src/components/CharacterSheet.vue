<script setup lang="ts">
import { ref, unref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Fieldset from 'primevue/fieldset'
import Textarea from 'primevue/textarea'

const availableDice: any = [
    { name: 'D4', value: 'd4' },
    { name: 'D6', value: 'd6' },
    { name: 'D8', value: 'd8' },
    { name: 'D10', value: 'd10' },
    { name: 'D12', value: 'd12' },
    { name: 'D20', value: 'd20' },
]

const adversityToken = ref(0)
const characterDetails = ref({
    name: '',
    age: undefined,
    fear: '',
    motivation: '',
    flaws: '',
    description: ''
})
const skills = ref([])
const stats = ref({
    flight: undefined,
    fight: undefined,
    brains: undefined,
    brawn: undefined,
    charm: undefined,
    grit: undefined,
})
const notes = ref()
const inventory = ref()

</script>

<template>
    <div class="card">
        <Fieldset legend="Character Details" style="width:100px">
            <div class="field grid">
                <label for="name" class="col-fixed">Name</label>
                <InputText id="name" type="text" v-model="characterDetails.name" />
            </div>
            <div class="field grid">
                <label for="age">Age</label>
                <InputNumber id="age" v-model="characterDetails.age" />
            </div>
            <div class="field grid">
                <label for="fear">Fear</label>
                <InputText id="fear" type="text" v-model="characterDetails.fear" />
            </div>
            <div class="field grid">
                <label for="motivation">Motivation</label>
                <InputText id="motivation" type="text" v-model="characterDetails.motivation" />
            </div>
            <div class="field grid">
                <label for="flaws">Flaws</label>
                <InputText id="flaws" type="text" v-model="characterDetails.flaws" />
            </div>
            <div class="field grid">
                <label for="description">Description</label>
                <Textarea id="description" v-model="characterDetails.description" />
            </div>
        </Fieldset>
    </div>
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
    <div>
        <Fieldset legend="Inventory">
            <Textarea v-model="inventory"/>
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Adversary Tokens">
            <div class="field col-12 md:col-3">
                <InputNumber inputId="vertical" v-model="adversityToken" mode="decimal" showButtons
                    decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary"
                    incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div>
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Notes">
            <Textarea v-model="notes"/>
        </Fieldset>
    </div>
</template>