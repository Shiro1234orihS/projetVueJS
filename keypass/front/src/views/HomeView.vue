<template>
  <div id="Global">
    <div id="gauche"> 
      <Fichier/>
    </div>
    <div id="droite">
      <table>
        <thead>
          <tr>
            <th>Lien</th>
            <th>Nom d'utilisateur</th>
            <th>Mots de passe</th>
            <th>Commentaire</th>
            <th>Gestion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pass in state.app" :key="pass.IDAPP">
            <App :app="pass" />
          </tr>
          <tr v-if="state.app.length === 0">
            <td colspan="4">Aucune application trouvée.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import App from '@/components/App.vue'; // Assurez-vous que le chemin est correct
import Fichier from '@/components/Fichier.vue'; // Assurez-vous que le chemin est correct

export default {
  name: 'AppList',
  components: {
    App,
    Fichier,
  },
  setup() {
    const yuserId = ref(null);
    const state = reactive({
      app: [],
    });

    const fetchData = () => {
      yuserId.value = localStorage.getItem('userId');
      if (yuserId.value) {
        axios.get(`http://ricardonunesemilio.fr:8005/getappid/${yuserId.value}`)
          .then(response => {
            state.app = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        console.error('yuserId is null');
      }
    };

    onMounted(() => {
      fetchData();
    });

    const refreshData = () => {
      fetchData();
    };

    return {
      state,
      refreshData,
    };
  },
};
</script>

<style scoped>
table {
  border: 1px solid #2C3E50; /* Bleu Foncé */
  border-collapse: collapse;
  width: 100%;
  background-color: #ECF0F1; /* Gris Clair */
  color: #2C3E50; /* Bleu Foncé */
}

th, td {
  border: 1px solid #2C3E50; /* Bleu Foncé */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #3498DB; /* Bleu Clair */
  color: white;
}

#Global {
  width: 100%;
}

#Global #gauche {
  float: left;
  width: 14%;
  background-color: #2C3E50; /* Bleu Foncé */
  color: white;
  padding: 1px;
  margin-top: 1px;
}

#Global #droite {
  margin-left: 15%;
  background-color: #ECF0F1; /* Gris Clair */
  padding: 1px;
  margin-top: 10px;
}


</style>
