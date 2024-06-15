<script>
export default {
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

<template>
      <td>
        <div class="placement-logo" id="google1">
          <p>GOOGLE</p>
          <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte('google1')" class="copie">
        </div>
      </td>
      <td>
        <div class="placement-logo" id="google2">
          <p>GOOGLE</p>
          <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte('google2')" class="copie">
        </div>
      </td>
      <td>
        <div class="placement-logo" id="google3">
          <p>GOOGLE</p>
          <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte('google3')" class="copie">
        </div>
      </td>
      <td>
        <div class="placement-logo" id="google4">
          <p>GOOGLE</p>
          <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte('google4')" class="copie">
        </div>
      </td>
      <td>
        <div class="placement-logo" id="google5">
          <p>GOOGLE</p>
          <img src="./../assets/img/copie.webp" alt="copie" @click="copierTexte('google5')" class="copie">
        </div>
      </td>
</template>

<style scoped>
p {
  color: rgb(0, 0, 0);
}

.placement-logo {
  display: flex;
  align-items: center;
}

.copie {
  height: 50px;
  cursor: pointer; /* Ajoute un curseur pour indiquer que l'élément est cliquable */
}

table, th, td {
  border: 1px solid rgb(0, 0, 0);
  border-collapse: collapse;
}
</style>
