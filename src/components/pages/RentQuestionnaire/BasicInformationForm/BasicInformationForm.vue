<script setup>
import RadioQuestion from '../RadioQuestion/RadioQuestion.vue';
import { useIsFormDirty, useIsFormValid } from "vee-validate";
import {computed} from 'vue'

const props = defineProps({
    formValue: Object,
    valid: Boolean,
})

console.log(props.formValue)

const showSanitized = computed(() => {
    if(['1948', '1949-1970', '1971-1990'].includes(props.formValue["building-age"])) {
        return true
    }
    return false
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
        <div class="px-8">
            <RadioQuestion label="Wohnfläche" name="flat-size" :options="[
                 {
                    name: '< 45m²',
                    value: '45'
                },
                {
                    name: '45-60m²',
                    value: '45-60'
                },
                {
                    name: '60-75m²',
                    value: '60-75'
                },
                {
                    name: '75-90m²',
                    value: '75-90'
                },
                {
                    name: '> 90m²',
                    value: '90'
                }
            ]"></RadioQuestion>
            <RadioQuestion v-if="showSanitized" class="mt-8" label="Saniert" name="sanitation" :options="[
                {
                    name: 'Unsaniert',
                    value: 'non-sanitized'
                },
                {
                    name: 'Vollsaniert (ohne EnEV 2002)',
                    value: 'fully-sanitized'
                },
                {
                    name: 'Vollsaniert (mit EnEV 2002)',
                    value: 'fully-sanitized-enev'
                },
            ]"
            explanation="Vollsaniert (mindestens drei von vier Punkten): neue Fenster, modernisiertes Bad, moderne Öl oder Gasheizung, modernisierte Elektrik in Haus und Wohnung"
            ></RadioQuestion>
            <div class="w-full flex justify-center mt-8 px-4">
                <button type="submit" class="mt-2 w-full max-w-[450px] flex items-center justify-center h-12 text-center text-3xl rounded-2xl border bg-light-blue text-background" :class="{'opacity-30' : isDisabled}">
                    Weiter
                </button>
            </div>
        </div>
    </div>
</template>