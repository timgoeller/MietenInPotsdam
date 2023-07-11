<script setup>
import { useIsFormDirty, useIsFormValid } from "vee-validate";
import RadioQuestion from '../RadioQuestion/RadioQuestion.vue';
import {computed} from 'vue'

defineProps({
    questions: [Object],
})

const emit = defineEmits(['submit'])

const isDirty = useIsFormDirty();
const isValid = useIsFormValid();

const isDisabled = computed(() => {
return !isDirty.value || !isValid.value;
});
</script>

<template>
    <div class="flex-1 overflow-y-auto py-8">
        <div class="mx-8">
            <div class="flex flex-col gap-12">
                <RadioQuestion v-for="question in questions" :label="question.text" :name="question.name" :options="question.answers" :explanation="question?.explanation"></RadioQuestion>
            </div>
            <div class="w-full flex justify-center mt-8 px-4">
                <button type="submit" class="mt-2 w-full max-w-[450px] flex items-center justify-center h-12 text-center text-3xl rounded-2xl border bg-light-blue text-background" :class="{'opacity-30' : isDisabled}">
                    Weiter
                </button>
            </div>
        </div>
    </div>
</template>