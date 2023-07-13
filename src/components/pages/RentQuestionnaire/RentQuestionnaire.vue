<script setup>
import { ref } from 'vue'
import BasicInformationForm from './BasicInformationForm/BasicInformationForm.vue'
import BuildingAgeForm from './BuildingAgeForm/BuildingAgeForm.vue'
import RoomForm from './RoomForm/RoomForm.vue'
import RentResult from './RentResult/RentResult.vue'
import FormBar from './FormBar/FormBar.vue'
import questions from './../../../../questions.json'

const formResults = ref({
  basicInformation: {}
})

console.log(questions)

const currentFormPage = ref(0)

const formPages = [
  BasicInformationForm,
  RoomForm
]

const onSubmit = (values) => {
  console.log(currentFormPage.value)
  currentFormPage.value += 1;
  console.log(values)
}

const prevStep = () => {
  console.log('prev')
  currentFormPage.value -= 1;
}


</script>

<template>
<div class="flex justify-center h-full">
  <div class="w-full">
    <Form @submit="onSubmit" keep-values v-slot="{ handleSubmit, values }" class="flex flex-col h-full">
      <template v-if="currentFormPage == 0">
        <BuildingAgeForm></BuildingAgeForm>
      </template>
      <template v-if="currentFormPage == 1">
        <BasicInformationForm :formValue="values" valid=""></BasicInformationForm>
      </template>
      <template v-if="currentFormPage == 2">
        <RoomForm :questions="questions.bathroom"></RoomForm>
      </template>
      <template v-if="currentFormPage == 3">
        <RoomForm :questions="questions.kitchen"></RoomForm>
      </template>
      <template v-if="currentFormPage == 4">
        <RoomForm :questions="questions.apartment"></RoomForm>
      </template>
      <template v-if="currentFormPage == 5">
        <RoomForm :questions="questions.building"></RoomForm>
      </template>
      <template v-if="currentFormPage == 6">
        <RoomForm :questions="questions.area"></RoomForm>
      </template>
      <template v-if="currentFormPage == 7">
        <RoomForm :questions="questions.special"></RoomForm>
      </template>
      <template v-if="currentFormPage == 8">
        <RentResult :formValue="values"></RentResult>
      </template>

      <div v-if="currentFormPage != 8">
        <FormBar @back="prevStep" :currentPage="currentFormPage"></FormBar>
      </div>
    </Form>
  </div>
</div>

</template>