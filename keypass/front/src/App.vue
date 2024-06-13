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
    
      <div class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <button class="profile-button">Profil</button>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  background: rgb(76, 76, 212);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.menu {
  display: flex;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.profile-button {
  width:60px ;
  height:60px ;
  margin-right: 20px; /* Adjust as needed */
  border-radius: 100% ;
  border-color:  #E74C3C;
}



</style>
