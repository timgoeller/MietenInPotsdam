<script setup>
console.log('hello script setup')
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-full pb-6">

    <div class="pb-4">
        <router-link to="/mietspiegel">
            <div class="mt-2 w-64 flex items-center justify-center h-12 text-center text-3xl rounded-2xl border bg-light-blue text-background">
                Mietrechner
            </div>
        </router-link>
    </div>

    <div class="flex flex-col justify-center">
        <span class="text-light-blue font-semibold text-xl text-center">Neugierig geworden?</span>
        <div class="flex gap-4 flex-col mt-2">
            <router-link to="/map">
                <div class="w-64 flex items-center justify-center h-9 text-center text-xl rounded-full border bg-light-blue text-background">
                    Karte
                </div>
            </router-link>
            <router-link to="/forum">
                <div class="w-64 flex items-center justify-center h-9 text-center text-xl rounded-full border bg-light-blue text-background">
                    Forum
                </div>
            </router-link>
            <router-link to="/rights">
                <div class="w-64 flex items-center justify-center h-9 text-center text-xl rounded-full border bg-light-blue text-background">
                    Anlaufstellen
                </div>
            </router-link>
            <router-link to="/about_us">
                <div class="w-64 flex items-center justify-center h-9 text-center text-xl rounded-full border bg-light-blue text-background">
                    Unsere Idee
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>