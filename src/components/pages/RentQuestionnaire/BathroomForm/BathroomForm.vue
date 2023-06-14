<script setup>
import InputField from '../../../generic/InputField/InputField.vue'
import RadioQuestion from '../RadioQuestion/RadioQuestion.vue';

defineProps({
    questions: [Object],
})

const emit = defineEmits(['submit'])
</script>

<template>
    <div class="flex-1 overflow-y-auto">
        <RadioQuestion v-for="question in questions" :label="question.text" :name="question.name" :options="question.answers"></RadioQuestion>
    </div>
</template>