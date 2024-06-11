<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
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
