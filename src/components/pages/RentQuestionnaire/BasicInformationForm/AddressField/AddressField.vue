<script setup>
import {ref, watch} from 'vue'
import { onClickOutside } from '@vueuse/core'

let searchTerm = ref()
let parentContainer = ref()

let suggestions = ref([])

let visible = ref(false)

const clickSuggestion = (suggestion) => {
  searchTerm.value = suggestion
}

/*  watch(searchTerm, async (newTerm, oldTerm) => {
  if(newTerm.length >= 3) {
    const { data, error } = await supabase
        .from('distinct_street')
        .select()
        .textSearch('street', newTerm.replace(' ', ' & ') + ':*')
    suggestions.value = data;
  }
  else {
    suggestions.value = [];
  }
}) */

const validateAddress = async (address) => {
    if(address) {
        const { data, error } = await supabase
        .from('distinct_street')
        .select()
        .textSearch('street', address.replace(' ', ' & '))

        if(!data) {
            return "Keine Straße mit diesem Namen gefunden!"
        }

        if(data.length < 1) {
            return "Keine Straße mit diesem Namen gefunden!"
        }
        return true
    }
    return ""
}

onClickOutside(parentContainer, (event) => visible.value = false)
</script>

<template>

<div class="relative flex flex-col">
    <label for="search" class="text-sm text-gray-500">
        Strasse:
    </label>
    
    <div class="relative flex flex-1" ref="parentContainer">
        <Field name="addressSearch" type="text" class="border border-black flex-1" placeholder="Type here..." v-model="searchTerm" @click="visible = true" :rules="validateAddress">
        </Field>

        <ul class="absolute border-black-300 border-2 bg-white z-10" v-if="visible">
            <li v-for="suggestion in suggestions" @click="clickSuggestion(suggestion.street)">
                <p>{{ suggestion.street }}</p>
            </li>
        </ul>
    </div>

    <ErrorMessage name="addressSearch" />
</div>

</template>