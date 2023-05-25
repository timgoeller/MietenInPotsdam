<script setup>
import AdressField from './AddressField/AddressField.vue'
import InputField from '../../generic/InputField/InputField.vue'

const validateField = (value) => {  
    return 'some error';
  };

  const onSubmit = () => {

  }

</script>

<template>
<div class="flex justify-center h-full">
  <div class="md:my-5 md:border-black md:border-solid md:border-2 md:overflow-scroll w-full md:w-[500px]">
    <Form @submit="onSubmit">
    <AdressField></AdressField>
    </Form>
    <Form @submit="onSubmit">
      <InputField label="Test" :rules="validateField" name="test"></InputField>
    </Form>
    <AdressField></AdressField>
    <AdressField></AdressField>
    <AdressField></AdressField>

    <AdressField></AdressField>
    <AdressField></AdressField>
    <AdressField></AdressField>
    <AdressField></AdressField>
  </div>
</div>

</template>