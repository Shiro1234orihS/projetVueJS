import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export const useServerStore = defineStore('server', () => {
    // Liste des serveurs
    const listServer = ref([]);
    
    // Fonction pour récupérer tous les serveurs
    async function getAllServer() {
      try {
        const response = await axios.get('http://localhost:3000/games');
        listServer.value = response.data; // Mettez à jour listServer avec les données de la réponse
      } catch (error) {
        console.error("Erreur lors de la récupération des serveurs :", error);
      }
    }
    
    return { listServer, getAllServer };
})