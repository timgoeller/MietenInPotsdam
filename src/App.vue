<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import { supabase } from '../utils/supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="flex flex-col h-full">
    <Navbar></Navbar>
    <div class="overflow-scroll flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
