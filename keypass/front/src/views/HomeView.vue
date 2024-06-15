<template>
  <table>
    <tr>
      <td>
        <p>Nom de l'application</p>
      </td>
      <td>
        <p>Liens</p>
      </td>
      <td>
        <p>Nom d'utilisateur</p>
      </td>
      <td>
        <p>Mots de passe</p>
      </td>
      <td>
        <p>Commentaire</p>
      </td>
    </tr>
    <tr>
      <td><div class="placement-logo"><p>GOOGLE</p><img src="./../assets/img/copie.webp" alt="copie" id="google1" @click="copierTexte('google1')" class="copie"></div></td>
      <td><div class="placement-logo"><p>GOOGLE</p><img src="./../assets/img/copie.webp" alt="copie" id="google2" @click="copierTexte('google2')" class="copie"></div></td>
      <td><div class="placement-logo"><p>GOOGLE</p><img src="./../assets/img/copie.webp" alt="copie" id="google3" @click="copierTexte('google3')" class="copie"></div></td>
      <td><div class="placement-logo"><p>GOOGLE</p><img src="./../assets/img/copie.webp" alt="copie" id="google4" @click="copierTexte('google4')" class="copie"></div></td>
      <td><div class="placement-logo"><p>GOOGLE</p><img src="./../assets/img/copie.webp" alt="copie" id="google5" @click="copierTexte('google5')" class="copie"></div></td>
    </tr>
  </table>
</template>

<script>
export default {
  methods: {
    copierTexte(id) {
      const texte = document.getElementById(id).innerText;
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
table, th, td {
  border: 1px solid rgb(0, 0, 0);
  border-collapse: collapse;
}

p {
  color: rgb(0, 0, 0);
}

.placement-logo{
  display: flex;
}

.copie{
  height: 50px;
  cursor: pointer; /* Ajoute un curseur pour indiquer que l'élément est cliquable */
}
</style>
