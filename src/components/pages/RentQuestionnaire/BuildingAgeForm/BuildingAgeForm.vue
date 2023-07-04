<script setup>
import RadioQuestion from '../RadioQuestion/RadioQuestion.vue';
import {computed} from 'vue'

const props = defineProps({
    formValue: Object,
})

console.log(props.formValue)

const showSanitized = computed(() => {
    if(['1948', '1949-1970', '1971-1990'].includes(props.formValue["building-age"])) {
        return true
    }
    return false
})

const emit = defineEmits(['submit'])
</script>

<template>
    <div class="flex-1 overflow-y-auto pb-8">
        <div class="flex flex-col mb-8">
            <p class="text-light-blue text-5xl font-extrabold text-center mt-6">Grundmiete</p>
            <p class="text-light-blue text-2xl font-semibold text-center mt-6">Also die Miete, die sich aus Eigenschaften des gesamten Hauses ergibt.</p>
        </div>
        <RadioQuestion label="Baujahr" name="building-age" :options="[
            {
                name: '< 1948',
                value: '1948'
            },
            {
                name: '1949 - 1970',
                value: '1949-1970'
            },
            {
                name: '1971 - 1990',
                value: '1971-1990'
            },
            {
                name: '1991 - 2008',
                value: '1991-2008'
            },
            {
                name: '2009 - 2012',
                value: '2009-2012'
            },
            {
                name: '> 2013',
                value: '2013'
            }
        ]"></RadioQuestion>

        <div class="w-full flex justify-center mt-8 px-4">
            <button type="submit" class="mt-2 w-full max-w-[450px] flex items-center justify-center h-12 text-center text-3xl rounded-2xl border bg-light-blue text-background">
                Weiter
            </button>
        </div>
    </div>
</template>