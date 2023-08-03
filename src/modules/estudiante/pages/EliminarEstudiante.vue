<template>
    <div class="container">
        <h1>ELIMINAR ESTUDIANTE</h1>
        <DatosEliminarEstudiante />

    </div>
</template>

<script>
import DatosEliminarEstudiante from '../components/DatosEliminarEstudiante.vue';
export default {
    components: {
        DatosEliminarEstudiante
    }
}
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #707070;
    border-radius: 10px;
    background-color: #ffcbcb;
    margin-top: 40px;
}
</style>