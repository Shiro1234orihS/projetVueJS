<script>
import { useServerStore } from '@/stores/apiServeurGame';

const serverStore = useServerStore();

export default {
    name: 'AppList',
    components:{

    },
    setup(){
        const userId = ref(null);

        const fetchserveur = () =>{
            serverStore.getAllServer();
        };

        return {
          state,
          searchTerm,
          toggleHiddenButtons,
          hiddenButtonsVisible,
          nomNewDossier,
          userApp,
          updateApp,
          fetchPasswords,
          fetchData,
          filterPasswords,
          filteredPasswords,
        };
    }
    
}
</script>

<template>
    <div>
        <div v-for="serveur in ">

        </div>
    </div>

</template>

<style scoped>
</style>
