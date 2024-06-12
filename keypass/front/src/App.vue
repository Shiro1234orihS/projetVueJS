<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const isConnexionView = computed(() => {
  return route.name !== 'connexion';
});
</script>

<template>
  <header v-if="isConnexionView">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>
header{
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 50px;
  background: rgb(76, 76, 212);
}
</style>
