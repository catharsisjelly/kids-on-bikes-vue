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

const adversityToken = ref(0);
</script>

<template>
    <div>
        <Fieldset legend="Character Details">
            <div class="field">
                <label for="name">Name</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field">
                <label for="name">Age</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field">
                <label for="name">Fear</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field">
                <label for="name">Motivation</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field">
                <label for="name">Flaws</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field">
                <label for="name">Description</label>
                <InputText type="text"></InputText>
            </div>
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Skills">
            <div class="field-checkbox">
                <Checkbox name="skill" value="Cool Under Pressure" />
                <label for="skill">Cool Under Pressure</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Easygoing" />
                <label for="skill">Easygoing</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Gross" />
                <label for="skill">Gross</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Heroic" />
                <label for="skill">Heroic</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Intuitive" />
                <label for="skill">Intuitive</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Loyal" />
                <label for="skill">Loyal</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Lucky" />
                <label for="skill">Lucky</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Prepared" />
                <label for="skill">Prepared</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Protective" />
                <label for="skill">Protective</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Quick Healing" />
                <label for="skill">Quick Healing</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Skilled At:" />
                <label for="skill">Skilled At:</label>
                <InputText type="text"></InputText>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Tough" />
                <label for="skill">Tough</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Treasure Hunter" />
                <label for="skill">Treasure Hunter</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Unassuming" />
                <label for="skill">Unassuming</label>
            </div>
            <div class="field-checkbox">
                <Checkbox name="skill" value="Wealthy" />
                <label for="skill">Wealthy</label>
            </div>
        </Fieldset>
    </div>
    <div class="card">
        <Fieldset legend="Stats">
            <div>
                <div>Fight</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Flight</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Brains</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Brawn</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Charm</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
            <div>
                <div>Grit</div>
                <Dropdown :options="availableDice" optionLabel="name" optionValue="value" placeholder="Select a Dice" />
            </div>
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Inventory">
            <Textarea />
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Adversary Tokens">
            <div class="field col-12 md:col-3">
                <InputNumber inputId="vertical" v-model="adversityToken" mode="decimal" showButtons
                    decrementButtonClass="p-button-secondary"
                    incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus" />
            </div>
        </Fieldset>
    </div>
    <div>
        <Fieldset legend="Notes">
            <Textarea />
        </Fieldset>
    </div>
</template>