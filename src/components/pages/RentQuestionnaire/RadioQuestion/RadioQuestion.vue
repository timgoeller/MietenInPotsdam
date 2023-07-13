<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

defineProps({
    label: String,
    name: {
        type: String,
        default: 'name'
    },
    explanation: {
        type: String,
        optional: true,
    },
    options: [Object],
})

const validateCheckbox = async (radio) => {
    if(radio || radio == 0) {
        return true
    }
    return "Bitte wähle eine Option aus"
}
</script>

<template>
    <div class="flex items-center justify-center flex-col break-words text-center px-4">
        <label :for="name" class=" text-dark-purple font-semibold text-2xl max-w-[600px]">
            {{label}}
            <span class="text-sm block font-normal">{{ explanation }}</span>
        </label>
        <div class="flex flex-col w-full gap-2 mt-4">
            <div class="w-full flex justify-center" v-for="option, index in options" :key="option.value">
                <Field  :id="name + index" :name="name" type="radio" :value="option.value"  class="hidden peer" :rules="validateCheckbox"/>

                <label :for="name + index"  class="w-full max-w-[450px] h-auto min-h-[40px] flex items-center justify-center text-center text-xl rounded-full border border-dark-purple text-dark-purple bg-transparent peer-checked:bg-dark-purple peer-checked:text-background cursor-pointer">
                    {{ option.name }}
                </label>
            </div>
            <ErrorMessage name="drink" />
        </div>
    </div>
</template>
