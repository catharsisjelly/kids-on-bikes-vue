<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'

defineEmits<{
  (e: 'input', value: boolean): void
}>()

const props = defineProps<{
  label: string
  description: string
  inputName: string
  value: string
}>()

console.log(props);


const display: any = ref(false)

const openDialog = () => {
  display.value = true
}

const changeValue = (value: any) => {
  console.log('inside StrengthCheckbox', value)
}
</script>

<template></template>
