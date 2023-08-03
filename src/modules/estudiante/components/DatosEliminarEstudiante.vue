<template>
    <label for="">Id</label>
    <input v-model="id" type="text">
    <button @click="eliminarEstudiante">Consultar: </button>

</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
    data() {
        return {
            id: null,
        };
    },
    methods: {
        async eliminarEstudiante() {
            const data = await eliminarEstudianteFachada(this.id);
            console.log(data)
        }
    }
}
</script>

<style></style>