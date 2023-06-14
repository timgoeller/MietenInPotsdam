<script setup>
import InputField from '../../../generic/InputField/InputField.vue'
import RadioQuestion from '../RadioQuestion/RadioQuestion.vue';

const validateField = (value) => {  
    return 'some error';
  };

  const emit = defineEmits(['submit'])
</script>

<template>
    <div class="flex-1 overflow-y-auto">
        <InputField label="Frage" name="test"></InputField>
        <RadioQuestion label="Welche sfdfd sdf?" name="bathroom-question-1" :options="[{
            name: 'Erste Antwort',
            value: 'answer1'
        },{
            name: 'Zweite Antwort',
            value: 'answer2'
        }]"></RadioQuestion>
    </div>
</template>