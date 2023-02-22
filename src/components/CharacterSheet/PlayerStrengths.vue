<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Fieldset from 'primevue/fieldset'
import { useCharacterSheet } from '@/stores/characterSheet'
import { storeToRefs } from 'pinia'

const store = useCharacterSheet()
const { strengths } = storeToRefs(store)

const strengthsAvailable = [
    {
        label: 'Cool Under Pressure',
        description:
            'May spend 1 Adversity Token to take half of your die&apos;s value instead of rolling on a Snap Decision.',
    },
    {
        label: 'Easygoing',
        description: 'Gain 2 Adversity Tokens when you fail, instead of 1.',
    },
    {
        label: 'Gross',
        description:
            'You have some kind of gross bodily trick (loud, quiet, smelly... up to you) that you can do on command.',
    },
    {
        label: 'Heroic',
        description:
            'You do not need the GM&apos;s permission to spend Adversity Tokens to ignore fears.',
    },
    {
        label: 'Intuitive',
        description:
            'May spend 1 Adversity Token to ask the GM about your surroundings, an NPC, or the like. The GM must answer honestly.',
    },
    {
        label: 'Loyal',
        description:
            'Each of the Adversity Tokens you spend to help your friends gives them a +2 instead of a +1. Lucky May spend 2 Adversity Tokens to reroll a stat check.',
    },
    {
        label: 'Prepared',
        description:
            'May spend 2 Adversity Tokens to just happen to have one commonplace item with you (GM&apos;s discretion).',
    },
    { label: 'Protective', description: 'Add + 3 to rolls when defending one of your friends.' },
    {
        label: 'Quick Healing',
        description:
            'You recover from injuries more quickly, and don&apos;t suffer lasting effects from most injuries.',
    },
    {
        label: 'Rebellious',
        description:
            'Add +3 to rolls when persuading or resisting persuasion from children.Add + 3 to rolls when resisting persuasion from adults.',
    },
    {
        label: 'Skilled at',
        description:
            'Choose a skill(GM&apos;s discretion).You are assumed to succeed when making even moderately difficult checks(9 or less) involving this skill.If the GM determines that you do need to roll for a more difficult check, add up to + 3 to your roll.',
    },
    {
        label: 'Tough',
        description:
            'If you lose a combat roll, add +3 to the negative number.You still lose the roll no matter what, but could reduce your loss to - 1.',
    },
    {
        label: 'Treasure Hunter',
        description: 'May spend 1 Adversity Token to find a useful item in your surroundings.',
    },
    {
        label: 'Unassuming',
        description:
            'May spend 2 Adversity Tokens to not be seen, within reason (GM&apos;s discretion).',
    },
    {
        label: 'Wealthy',
        description:
            'May spend money as though you were in a higher age bracket.For example, a wealthy child is considered to have the disposable income of a typical teen, and a wealthy teen is considered to have the disposable income of a typical adult.A wealthy adult is considered to not have to worry too much about money — they would certainly be able to buy anything they need, and likely able to spend their way out of a lot of situations.',
    },
]
</script>

<template>
    <div>
        <div>
            <Fieldset legend="Strengths">
                <div
                    class="field-checkbox"
                    v-for="(strength, index) in strengthsAvailable"
                    :key="index"
                >
                    <label :for="'skill' + index">{{ strength.label }}</label>
                    <Checkbox v-model="strengths" :name="'skill' + index" :value="strength.label" />
                    <InputText v-if="strength.label === 'Skilled at'" />
                    <div style="display: none">{{ strength.description }}</div>
                </div>
            </Fieldset>
        </div>
    </div>
</template>
