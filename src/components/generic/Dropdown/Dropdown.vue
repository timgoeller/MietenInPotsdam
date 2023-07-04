<script setup>
defineProps({
    label: String,
    name: String,
    options: [Object],
    rules: Function,
})
</script>

<template>
    <div class="relative flex flex-col">
        <label for="search" class="text-sm text-gray-500">
            {{ label }}
        </label>

        <Field :name="name" as="select">
            <option v-for="option in options" :value="option.value">{{option.label}}</option>
        </Field>

    <ErrorMessage :name="name" />
    </div>
</template>