<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { useAppStore } from './stores/app';

const route = useRoute();
const hiddenButtonsVisible = ref(false);
const nombredelettre = ref(12);
const includeSpecialChars = ref(false);
const includeUppercase = ref(false);
const includeNumbers = ref(false);
const app = useAppStore();


const linkApp = ref("");
const userApp = ref("");
const passApp = ref("");
const commentApp = ref("");




const isConnexionView = computed(() => {
  return route.name !== 'connexion';
});

const toggleHiddenButtons = () => {
  hiddenButtonsVisible.value = !hiddenButtonsVisible.value;
};

// Function to generate a random password
const generatePassword = () => {
  const length = nombredelettre.value; // Use the reactive variable for length
  let charset = "abcdefghijklmnopqrstuvwxyz";
  
  if (includeUppercase.value) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers.value) {
    charset += "0123456789";
  }
  if (includeSpecialChars.value) {
    charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};

// Function to set the generated password to the input field
const setPassword = () => {
  const passwordInput = document.getElementById("input-pass");
  passwordInput.value = generatePassword();
};

function newApp  ()  {
  const yuserId = ref(null)
  yuserId.value = localStorage.getItem('userId');
  console.log( yuserId.value,linkApp.value,commentApp.value,passApp.value);
  app.postapp({
    IDUTILISTEUR : localStorage.getItem('userId'),
    NOMAPP: linkApp.value,
    COMMENTAIRE : commentApp.value,
    MOTPASSAPP : passApp.value
  })
  
}
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
    </header>
    <div v-show="hiddenButtonsVisible" id="hidden-pass">
            <button @click="toggleHiddenButtons">❌</button>
            <div>
                <p>Lien</p>
                <input v-model="linkApp" type="text">
                <p>Nom d'utilisateur</p>
                <input v-model="userApp"type="text">
                <p>Mot de passe</p>
                <input type="password" v-model ="passApp" id="input-pass">
                <div class="input">
                    <input type="checkbox" v-model="includeSpecialChars"><p>Caractères spéciaux</p>
                    <input type="checkbox" v-model="includeUppercase"><p>Majuscule</p>
                    <input type="checkbox" v-model="includeNumbers"><p>Nombre</p>
                    <input id="nb" type="number" v-model="nombredelettre"><p>Nombre de caractères</p>
                </div>
                <button @click="setPassword">Génerer un mots de passe</button>
                <p id="comment">Commentaire</p>
                <input type="text" v-model="commentApp">
            </div>
            <button @click="newApp">Nouveau mot de passe</button>
        </div>
    <RouterView/>
 </div>
 <div v-show="hiddenButtonsVisible" class="overlay"></div>
</template>

<style scoped>
/* Global Styles */
header {
    background: rgb(76, 76, 212);
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
    position: fixed;
    text-align: center;
    margin-left: 25%;
    width: 50%;
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
