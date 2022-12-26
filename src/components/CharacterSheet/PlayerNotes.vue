<script setup lang="ts">
import { ref } from 'vue'
import Editor from 'primevue/editor'
import Fieldset from 'primevue/fieldset'

const notes = ref()
</script>

<template>
    <Fieldset legend="Notes">
        <Editor class="my-4" v-model="notes" editorStyle="height: 320px">
            <template #toolbar>
                <span class="ql-formats">
                    <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                    <button
                        class="ql-italic"
                        v-tooltip.bottom="'Italic'"
                    ></button>
                    <button
                        class="ql-underline"
                        v-tooltip.bottom="'Underline'"
                    ></button>
                </span>
            </template>
        </Editor>
    </Fieldset>
</template>
