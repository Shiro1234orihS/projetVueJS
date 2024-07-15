<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute();
const hiddenButtonsVisible = ref(false);

const isConnexionView = computed(() => {
  return !(route.name === 'connexion' || route.name === 'accountcreation');
});
</script>


<template>
  <div>
    <header v-if="isConnexionView">
        <nav>
            <div class="recherche">
                <input type="text">
                <button>Recherche</button>
            </div>
            <button class="profile-button">Profil</button>
        </nav>
    </header>
    <RouterView/>
  </div>
  <div v-show="hiddenButtonsVisible" class="overlay"></div>
</template>
 

<style scoped>
/* Global Styles */
header {
  background: #2C3E50; /* Bleu Foncé */
  height: 75px;
  position: relative;
}

/* Navigation Styles */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}


</style>
