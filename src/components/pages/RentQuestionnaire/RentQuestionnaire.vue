<script setup>
import { ref } from 'vue'
import BasicInformationForm from './BasicInformationForm/BasicInformationForm.vue'
import BathroomForm from './BathroomForm/BathroomForm.vue'
import questions from './../../../../questions.json'

const formResults = ref({
  basicInformation: {}
})

console.log(questions)

const currentFormPage = ref(0)

const formPages = [
  BasicInformationForm,
  BathroomForm
]

const onSubmit = (values) => {
  console.log(currentFormPage.value)
  currentFormPage.value += 1;
  console.log(values)
}

const prevStep = () => {
  console.log(currentFormPage.value)
  currentFormPage.value -= 1;
}

</script>

<template>



<div class="flex justify-center h-full">
  <div class="md:my-5 md:border-black md:border-solid md:border-2 md:overflow-scroll w-full md:w-[500px]">
    <Form @submit="onSubmit" keep-values v-slot="{ handleSubmit, values }" class="flex flex-col h-full">
      <template v-if="currentFormPage == 0">
        <BasicInformationForm></BasicInformationForm>
      </template>
      <template v-if="currentFormPage == 1">
        <BathroomForm :questions="questions.bathroom"></BathroomForm>
      </template>

      <div class="">
        <button type="submit">Weiter</button>
        <button @click.prevent="prevStep">Zurück</button>
      </div>
    </Form>
  </div>
</div>

</template>