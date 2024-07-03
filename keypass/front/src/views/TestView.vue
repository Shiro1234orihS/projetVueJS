<template>
    <div id="containt">
        <img src="https://github.com/favicon.ico" alt="test">
        <h1>Github</h1>
        <div>
            <p>Copy le nom d'utilisateur</p>
            <p>Copy le mots de passe</p>
        </div>
    </div>
    <div v-show="visible">
        <div class="hoverable">
            <p>test</p>
            <img src="./../assets/img/copie.webp" alt="copie" class="copie">
        </div>

        <div class="hoverable">
            <p>test</p>
            <img src="./../assets/img/copie.webp" alt="copie"class="copie">
        </div>

        <div class="hoverable">
            <p>test</p>
            <img src="./../assets/img/copie.webp" alt="copie"  class="copie">
        </div>

        <div class="hoverable">
            <p>test</p>
            <img src="./../assets/img/copie.webp" alt="copie"  class="copie">
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';


const visible = ref(false); 
</script>

<style scoped>
img {
    height: 50px;
}
#containt {
    height: 10%;
    width: 30%;

    display: flex;
    align-items: center;

    background-color: #4d4d4d4f;

    border: solid;
    border-radius: 20px;

    transition: background-color 0.3s, border-color 0.3s;
}

#containt:hover{
    background-color: #1b1a1a4f;
    border-color:  rgb(114, 75, 75);
}


</style>
