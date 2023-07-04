<script setup>
defineEmits(['back'])

defineProps({
    currentPage: {
        type: Number,
        default: 1,
    }
})
</script>

<template>
    <div class="h-14 bg-light-blue border border-t-2 border-t-background flex">
        <button @click.prevent="$emit('back')" class="w-14  rotate-180  flex items-center justify-center">
            <span class="text-background" v-if="currentPage != 0">
                ➤
            </span>
            <span class="text-background text-5xl block h-1 overflow-hidden pb-14" v-else>
                ×
            </span>
        </button>
        <div class="flex justify-center items-center flex-1 gap-2  border-l-background border-l">
            <div v-for="index in 8" class="w-5 h-3 bg-background rounded-lg border" :class="{ 'opacity-50': index - 1 != currentPage}">

            </div>
        </div>
    </div>
</template>