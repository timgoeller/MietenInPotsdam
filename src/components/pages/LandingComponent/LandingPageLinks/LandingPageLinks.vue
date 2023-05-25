<script setup>
console.log('hello script setup')
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-full">
    <router-link to="/mietspiegel">
        <div class="border-cyan-300 border-2 w-32 text-center text-lg">
            Fragebogen
        </div>
    </router-link>

      
    <router-link to="/">
        <div class="border-red-300 border-2 w-32 text-center text-lg">
            Karte
        </div>
    </router-link>

    <router-link to="/">
        <div class="border-green-300 border-2 w-32 text-center text-lg">
            FAQ
        </div>
    </router-link>
  </div>
</template>