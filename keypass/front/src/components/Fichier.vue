<script>
export default {
  props: {
    dossier: {
      type: Object,
      required: true
    }
  },
  mounted() {
    
  }
};
</script>

<template>
  <div id="placement">
    <img src="./../assets/img/fichierOuvert.png" alt="fichierOuvert" class = "image">
    <p>{{ dossier.NOMDOSSIER }}</p>
  </div>
 
</template>
  
<style scoped>
.image {
  height: 50px;
  cursor: pointer;
}

#placement{
  display: flex;
  align-items: center;
}
</style>
  