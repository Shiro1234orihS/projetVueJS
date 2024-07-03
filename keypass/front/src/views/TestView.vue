<template>
    <div id="containt">
        <img src="https://github.com/favicon.ico" alt="test">
        <h1>Github</h1>
    </div>

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
</template>

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
}

#containt:hover {
    background-color: #1b1a1a4f;
    border-color: rgb(114, 75, 75);
}


</style>
