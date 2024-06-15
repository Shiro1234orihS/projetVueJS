<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute();
const hiddenButtonsVisible = ref(false);

const isConnexionView = computed(() => {
  return route.name !== 'connexion';
});

const toggleHiddenButtons = () => {
  hiddenButtonsVisible.value = !hiddenButtonsVisible.value;
};
</script>

<template>
 <div>
    <header v-if="isConnexionView">
        <nav>
            <button @click="toggleHiddenButtons">Ajouter un mots de passe</button>
            <div class="recherche">
                <input type="text">
                <button>Recherche</button>
            </div>
            <button class="profile-button">Profil</button>
        </nav>
        <div v-show="hiddenButtonsVisible" id="hidden-pass">
            <div>
                <p>Nom de l'application</p>
                <input type="text">
                <p>Lien</p>
                <input type="text">
                <p>Nom d'utilisateur</p>
                <input type="text">
                <p>Mot de passe</p>
                <input type="password" id="input-pass">
                <div class="input">
                    <input type="checkbox"><p>Caractères spéciaux</p>
                    <input type="checkbox"><p>Majuscule</p>
                    <input type="checkbox"><p>Nombre</p>
                </div>
                <div class="input">
                    <input id="nb" type="number"><p>Nombre de caractères</p>
                </div>
                <p id="comment">Commentaire</p>
                <input type="text">
            </div>
            <button>Nouveau mot de passe</button>
        </div>
    </header>
    <RouterView/>
 </div>
 <div v-show="hiddenButtonsVisible" class="overlay"></div>
</template>

<style scoped>
/* Global Styles */
header {
    background: rgb(76, 76, 212);
    z-index: 1;
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

.menu {
    display: flex;
    gap: 20px;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
}

/* Profile Button Styles */
.profile-button {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 100%;
    border-color: #E74C3C;
}

/* Hidden Password Section Styles */
#hidden-pass {
    text-align: center;
    margin-left: 30%;
    width: 40%;
    background-color: rgba(198, 45, 45, 0.84);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
}

/* Overlay Styles */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
}

/* Input and Form Styles */
#input-pass {
    margin: 0;
}

.input {
    margin: 0 0 0 1px;
    display: flex;
}



#comment {
    margin-top: 0;
}

#nb {
    width: 30px;
    height: 30px;
}
</style>
