<template>
    <div class="container">
        <label for="">Cedula</label>
        <input v-model="cedula" type="text">
        <label for="">Nombre</label>
        <input v-model="nombre" type="text">
        <label for="">Apellido</label>
        <input v-model="apellido" type="text">
        <button @click="guardarEstudiante">Guardar: </button>

    </div>
</template>

<script>
import { ingresarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            provincia: null,
            fechaNacimiento: null,
        };
    },
    methods: {
        async guardarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                provincia: this.provincia,
                fechaNacimiento: this.fechaNacimiento,
            }
            await ingresarEstudianteFachada(data);
        }
    }
}
</script>

<style scoped>

.container {
    max-width: 400px;
    padding: 50px;
    border-radius: 66px;

}

label {
    font-size: 15px;
    font-weight: bolder;
    margin-right: 10px;
}

input {
    width: 90%;
    padding: 10px;
    border: 5px solid #545454;
    border-radius: 4px;
    margin-bottom: 15px;
}


button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    background-color: #e62f2f;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>