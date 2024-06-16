<script>
import { onMounted } from 'vue';
import App from '@/components/App.vue';
import { useAppStore } from '@/stores/app';

export default {
  components: {
    App
  },
  setup() {
    const appStore = useAppStore();
    let { getappbyuser } = appStore;

    onMounted(() => {
      setTimeout(() => {
        getappbyuser()
      }, 1000);
    });

    return { appStore };
  }
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nom de l'application</th>
        <th>Liens</th>
        <th>Nom d'utilisateur</th>
        <th>Mots de passe</th>
        <th>Commentaire</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <App/>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table, th, td {
  border: 1px solid rgb(0, 0, 0);
  border-collapse: collapse;
}
</style>
