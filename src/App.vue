<template>
  <Estudiante />
  <br>
  <br>
  <br>
  <GuardaEstudiante />
  <ActualizarEstudiante/>
  <EliminarEstudiante/>
</template>

<script>
import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue'
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';

export default {
  name: 'App',
  components: {
    Estudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
