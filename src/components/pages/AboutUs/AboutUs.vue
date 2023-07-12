<script setup>
import usImg from '../../../assets/wir.png'
import InfoPageComponent from '../InfoPageComponent/InfoPageComponent.vue'
</script>

<template>
    <div class="flex justify-center flex-col items-center w-full text-light-blue my-6 px-8">
        <InfoPageComponent title="Über Uns" text="texts.us">
            <slot>
                <img :src="usImg" class="w-[400px]">
            </slot>
        </InfoPageComponent>
    </div>
</template>