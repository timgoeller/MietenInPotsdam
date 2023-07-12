<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const switchLocale = () => {
    if(locale.value == "de_easy")
        locale.value = "de"
    else
        locale.value = "de_easy"
}
</script>

<template>
    <div class="flex justify-center flex-col items-center w-full text-light-blue my-6 px-8">
        <div class="max-w-3xl flex flex-col items-center relative gap-4">
            <router-link to="/#">
                <span class="text-light-blue text-6xl block h-1 overflow-hidden pb-20 absolute left-0">
                    ×
                </span>
            </router-link>
            <span class="text-light-blue text-3xl block h-1 overflow-hidden pb-10 absolute right-0 mt-4" @click="switchLocale">
                ?
            </span>
            <h2 class="text-3xl  font-semibold">Forum</h2>
            <div class="flex flex-col h-full gap-4 text-justify" v-html="$t('texts.forum')">
            </div>
        </div>
    </div>
</template>