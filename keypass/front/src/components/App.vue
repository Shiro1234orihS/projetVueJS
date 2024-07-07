<template>
  <td>
    <div class="placement-logo" :id="`app-name-${app.IDAPP}`">
      <p>{{ app.NOMAPP }}</p>
      <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte(`app-name-${app.IDAPP}`)" class="image">
    </div>
  </td>
  <td>
    <div class="placement-logo" :id="`app-user-${app.IDAPP}`">
      <p>{{ app.UTILISATEURAPP }}</p>
      <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte(`app-user-${app.IDAPP}`)" class="image">
    </div>
  </td>
  <td>
    <div class="placement-logo" :id="`app-password-${app.IDAPP}`">
      <p>{{ app.MOTPASSAPP }}</p>
      <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte(`app-password-${app.IDAPP}`)" class="image">
    </div>
  </td>
  <td>
    <div class="placement-logo" :id="`app-comment-${app.IDAPP}`">
      <p>{{ app.COMMENTAIRE || 'N/A' }}</p>
      <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte(`app-comment-${app.IDAPP}`)" class="image">
    </div>
  </td>
  <td>
    <div class="placement-logo">
      <img src="./../assets/img/supIcone.webp" alt="supprimer" class="image" @click="suppIcone">
      <img src="./../assets/img/removeIcone.webp" alt="supprimer" class="image">
    </div>
  </td>

  <div v-show="hiddenButtonsVisible" id="hidden-pass">
    <label>Voulez-vous vraiment supprimer votre mot de passe ?</label>
    <button @click="deleteApp">OUI</button>
    <button @click="annuler">Non</button>
  </div>
  <div v-show="hiddenButtonsVisible" class="overlay"></div>
</template>

<script>
import { ref } from 'vue';
import { useAppStore } from './../stores/app';
import { useRouter } from 'vue-router';

export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const hiddenButtonsVisible = ref(false);
    const appStore = useAppStore();
    const router = useRouter();

    const suppIcone = () => {
      hiddenButtonsVisible.value = !hiddenButtonsVisible.value;
    };

    const deleteApp = () => {
      appStore.delectepass(props.app.IDAPP, () => {
        alert('Mot de passe supprimé !');
        hiddenButtonsVisible.value = false;
        router.push({ name: 'loader' });
      });
    };

    const annuler = () => {
      hiddenButtonsVisible.value = false;
    };

    return {
      hiddenButtonsVisible,
      suppIcone,
      deleteApp,
      annuler,
    };
  },
  methods: {
    copierTexte(id) {
      const texte = document.querySelector(`#${id} p`).innerText;
      navigator.clipboard.writeText(texte).then(() => {
        alert('Texte copié avec succès!');
      }).catch(err => {
        console.error('Erreur lors de la copie du texte : ', err);
      });
    }
  }
}
</script>

<style scoped>
p {
  color: rgb(0, 0, 0);
}

.placement-logo {
  display: flex;
  align-items: center;
}

.image {
  height: 50px;
  cursor: pointer;
}

table, th, td {
  border: 1px solid rgb(0, 0, 0);
  border-collapse: collapse;
}

#hidden-pass {
  position: fixed;
  text-align: center;
  top: 0%;
  left: 25%;
  width: 50%;
  background-color: rgba(52, 152, 219, 0.84); /* Bleu clair */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrer horizontalement les éléments */
  z-index: 2;
  padding: 20px;
  border-radius: 10px;
}

/* Overlay Styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
</style>
