<script setup>
import { ref, watch } from 'vue'

defineProps({
    label: String,
    name: String,
    placeholder: {
        type: String,
        default: '',
    },
    rules: Function,
})
</script>

<template>

<div class="relative flex-col">
    <label for="search" class="text-sm text-gray-500">
        {{ label }}
    </label>
    
    <div class="relative" ref="parentContainer">
        <Field type="text" class="border border-black" :placeholder="placeholder" :rules="rules" :name="name">
        </Field>
    </div>

    <ErrorMessage :name="name" />
</div>

</template>