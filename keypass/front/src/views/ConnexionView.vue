<script setup>
import { userStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const user = userStore()
const router = useRouter();

const name = ref("")
const password = ref("")

const nameError = ref("")
const passwordError = ref("")
const confirmPasswordError = ref("")

function validateForm() {
  let isValid = true

  if (name.value.trim() === "") {
    nameError.value = "Le nom d'utilisateur est requis."
    isValid = false
  } else {
    nameError.value = ""
  }

  if (password.value.trim() === "") {
    passwordError.value = "Le mot de passe est requis."
    isValid = false
  } else {
    passwordError.value = ""
  }

  return isValid
}

function login() {
  if (validateForm()) {
    user.login({
      name: name.value,
      password: password.value
    }, () => {
      router.push({ name: 'home' }); // Redirection après la connexion
    });
  }
}

function logout() {
  user.logout();
}
</script>

<template>
  <main>
    <div class="login-box">
      <span v-if="nameError" class="error">{{ nameError }}</span>
      <div class="user-box">
        <input type="text" required  v-model="name">
        <label>Nom utilisateur</label>
      </div>
      <span v-if="passwordError" class="error">{{ passwordError }}</span>
      <div class="user-box">
        <input type="password" required  v-model="password">
        <label>Mot de passe</label>
      </div>
      <center>
        <a @click="login">
          Connexion
          <span></span>
        </a>
      </center>
      <label class="inscription">Vous n’avez pas de compte ?</label>
      <a class="inscriptiona" href="/accountcreation">Inscrivez-vous</a>
    </div>
  </main>
</template>

<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #2C3E50; /* Bleu Foncé */
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #95A5A6; /* Gris Moyen */
  font-size: 12px;
}

.login-box a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #3498DB; /* Bleu Clair */
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #3498DB,
              0 0 25px #3498DB,
              0 0 50px #3498DB,
              0 0 100px #3498DB;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%, 100% {
    left: 100%;
  }
}

.login-box a span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3498DB); /* Bleu Clair */
  animation: btn-anim1 2s linear infinite;
}

.inscription {
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.inscriptiona {
  color: #3498DB; /* Bleu Clair */
}

.error {
  color: #E74C3C; /* Rouge */
  font-size: 12px;  
  bottom: -20px;
  left: 0;

}
</style>
