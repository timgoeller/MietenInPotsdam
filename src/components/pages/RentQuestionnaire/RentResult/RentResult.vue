<script setup>
import calculationTable from './../../../../../calculationTable.json'
import {computed} from 'vue'

const lerp = (start, end, amt) => {
  return (1-amt)*start+amt*end
}

const props = defineProps({
    formValue: Object,
})

const rangeValues = computed(() => {
    const yearTable = calculationTable[props.formValue['flat-size']][props.formValue['building-age']]
    if(props.formValue['sanitation']) {
        return yearTable[props.formValue['sanitation']]
    }
    return yearTable
})

const questionResult = computed(() => {
    let sum = 0
    Object.values(Object.fromEntries(Object.entries(props.formValue).filter(([key]) => key.includes('question')))).map(x => sum += x);
    return sum
})

const rent = computed(() => {
    if(questionResult.value < 0) {
        return lerp(rangeValues.value['base'], rangeValues.value['min'], -questionResult.value / 100)
    }
    return lerp(rangeValues.value['base'], rangeValues.value['max'], questionResult.value / 100)
}) 
</script>

<template>
        <div class="flex justify-center flex-col h-full pt-8 px-4">
            <p class="text-light-blue text-2xl font-semibold text-center mt-6">Die Durchschnittsmiete für Wohnungen wie deine beträgt</p>
            <p class="text-light-blue text-5xl font-extrabold text-center mt-6">{{  rent.toFixed(2) }}€/m²</p>
            <p class="text-light-blue text-2xl font-semibold text-center mt-6">Du zahlst über 20% mehr, also {{ (rent * 1.2).toFixed(2) }}€/m²? Dann könnte es sich lohnen, gegen deine Miete vorzugehen!</p>
            <div class="flex-1 flex flex-col justify-end items-center pb-8">
                <router-link to="/rights">
                    <div class="mt-2 w-full max-w-[450px] min-w-[256px] flex items-center justify-center h-12 text-center text-2xl rounded-2xl border bg-light-blue text-background">
                        Was nun?
                    </div>
                </router-link>
            </div>
        </div>
</template>