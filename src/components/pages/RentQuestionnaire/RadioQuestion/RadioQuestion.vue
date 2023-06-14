<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

defineProps({
    label: String,
    name: {
        type: String,
        default: 'name'
    },
    options: [Object],
})

const validateCheckbox = async (radio) => {
    if(radio) {
        return true
    }
    return "Bitte wähle eine Option aus"
}
</script>

<template>
    <label :for="name" class="text-sm text-gray-500">
        {{label}}
    </label>
    <div class="flex">
        <div v-for="option in options" :key="option.value">
            <Field  :id="option.value" :name="name" type="radio" :value="option.value"  class="hidden peer" :rules="validateCheckbox"/>
            <label :for="option.value" class="text-sm text-gray-500 border border-red-400 peer-checked:bg-slate-300">
                {{ option.name }}
            </label>
        </div>

        <ErrorMessage name="drink" />
    </div>
</template>
