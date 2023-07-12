<script setup>
import LandingPageLinks from './LandingPageLinks/LandingPageLinks.vue';
import bottomImg from '../../../assets/Quadratmieter Leistengrafik blau-09.svg'
import bottomImgMobile from '../../../assets/Quadratmieter Leistengrafik blau-10.svg'
</script>

<template>
    <div class="flex flex-col h-full">
        <p class="text-light-blue text-4xl sm:text-5xl font-extrabold text-center mt-6 mx-8">Hallo!</p>
        <p class="text-light-blue sm:text-md text-sm font-semibold text-center mt-6  mx-8">Schön, dass Deine Miete Dich nicht kalt lässt.<br>
Hier kannst Du Deine Miete mit dem lokalen Mietspiegel in Potsdam vergleichen - schnell, einfach und transparent. <br>Wir freuen uns, dass Du hergefunden hast.</p>
        <div class="flex-1 mx-8">
            <LandingPageLinks></LandingPageLinks>
        </div>
        <img :src="bottomImg" alt="" class="sm:block hidden">
        <img :src="bottomImgMobile" alt="" class="sm:hidden">
    </div>
</template>