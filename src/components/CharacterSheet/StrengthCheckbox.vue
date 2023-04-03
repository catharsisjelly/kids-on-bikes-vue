<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'

const props = defineProps<{
  label: string
  description: string
  inputName: string
  modelValue?: boolean
}>()
const display: any = ref(false)

const openDialog = () => {
  display.value = true
}
</script>

<template>
  <label :for="'skill' + props.inputName">{{ props.label }}</label>
  <Checkbox :name="'strength' + props.inputName" :modelValue="props.modelValue" />
  <slot></slot>
  <div>
    <i class="pi pi-info-circle" @click="openDialog"></i>
  </div>
  <Dialog :header="props.label" v-model:visible="display">
    <div>{{ props.description }}</div>
  </Dialog>
</template>
