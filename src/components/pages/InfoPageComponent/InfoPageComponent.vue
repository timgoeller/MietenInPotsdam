<script setup>
import easyLanguage from '../../../assets/leichteSprache.png'
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const switchLocale = () => {
    if(locale.value == "de_easy")
        locale.value = "de"
    else
        locale.value = "de_easy"
}

defineProps({
    title: String,
    text: String,
})
</script>

<template>
    <div class="max-w-3xl flex flex-col items-center relative gap-4">
        <router-link to="/#">
            <span class="text-light-blue text-6xl block h-1 overflow-hidden pb-20 absolute left-0">
                ×
            </span>
        </router-link>
        <span class="text-light-blue text-3xl block h-1 overflow-hidden pb-10 absolute right-0 mt-4 w-[80px] cursor-pointer" @click="switchLocale">
            <img :src="easyLanguage">
        </span>
        <h2 class="text-3xl  font-semibold">{{ title }}</h2>
        <div class="flex flex-col h-full gap-4 text-justify" v-html="$t(text)">
        </div>
        <slot></slot>
    </div>
</template>