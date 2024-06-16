import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'  // Importez useRouter de Vue Router


export const useAppStore  = defineStore('app', () => {

    const router = useRouter()  // Créez une instance de useRouter
    const iduser = localStorage.getItem('userId')
    const url = "http://ricardonunesemilio.fr:8005/"
    let app = ref([])


    function getappbyuser(auth, onSuccess){
        axios.get(url+"getappid/"+iduser).then(response =>{
            if(response.data){
              console.log(response.data);
              app = response.data.results;
              if (onSuccess) onSuccess();
            }
        }).catch(error =>{
            console.error("Erreur de connexion", error);
        })
    }





 

    return {app,getappbyuser }
})
