<script setup>
import AdressField from './AddressField/AddressField.vue'
import InputField from '../../../generic/InputField/InputField.vue'

const validateField = (value) => {  
    return 'some error';
  };

  const onSubmit = () => {

  }
</script>

<template>
    <Form @submit="onSubmit">
        <AdressField></AdressField>
        <InputField label="Test" :rules="validateField" name="test"></InputField>
    </Form>
</template>