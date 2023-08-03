<template>
    <div class="container">
        <router-link class="nombres" to="/consultar" >Consultar</router-link>
        <router-link class="nombres" to="/guardar" >Guardar</router-link>
        <router-link class="nombres" to="/actualizar">Actualizar</router-link>
        <router-link class="nombres" to="/eliminar" >Eliminar</router-link>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #d01414;
        padding: 20px;
    }
    .nombres {
        display: flex;
        align-items: center;
        background-color: #f1a2a2;
        padding: 15px;
        border-radius: 20px
    }

    

</style>