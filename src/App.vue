<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/layout/Navbar.vue';

const session = ref()
</script>

<template>
  <div class="flex flex-col h-full font-kanit bg-background">
<!--     <Navbar></Navbar> -->
    <div class="overflow-scroll flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
