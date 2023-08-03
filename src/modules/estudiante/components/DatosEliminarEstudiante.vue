<template>
    <div class="container">

        <div class="grupos">

            <label for="">Id</label>
            <input v-model="id" type="text">
            <button @click="eliminarEstudiante">Consultar: </button>
        </div>

        <div class="grupos">

            <label for="">Cedula</label>
            <input v-model="cedula" type="text">
        </div>

        <div class="grupos">

            <label for="">Nombre</label>
            <input v-model="nombre" type="text">
        </div>

        <div class="grupos">

            <label for="">Provincia</label>
            <input v-model="provincia" type="text">
        </div>

        <div class="grupos">

            <label for="">Fecha de nacimiento</label>
            <input v-model="nacimiento" type="text">
        </div>


    </div>
</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
    data() {
        return {
            id:null,
            cedula: null,
            nombre: null,
            apellido: null,
            provincia: null,
            fechaNacimiento: null,
        };
    },
    methods: {
        async eliminarEstudiante() {
    const data = await eliminarEstudianteFachada(this.id);
    this.cedula = data.cedula;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.provincia = data.provincia;
    this.fechaNacimiento = data.fechaNacimiento;
    console.log(data);
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