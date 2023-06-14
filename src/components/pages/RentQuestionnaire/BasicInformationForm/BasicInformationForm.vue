<script setup>
import AdressField from './AddressField/AddressField.vue'
import InputField from '../../../generic/InputField/InputField.vue'

const validateField = (value) => {  
    return 'some error';
  };


  const emit = defineEmits(['submit'])
</script>

<template>
    <div class="flex-1 overflow-y-auto">
        <AdressField></AdressField>
        <InputField label="Hausnummer" name="test"></InputField>
    </div>
</template>