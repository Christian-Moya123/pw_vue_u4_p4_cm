<template>
  <div class="container">
    <h1>GUARDAR ESTUDIANTE</h1>
    <DatosGuardarEstudiante />

  </div>
</template>

<script>
import DatosGuardarEstudiante from '../components/DatosGuardarEstudiante.vue';

export default {
  components: {
    DatosGuardarEstudiante
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin:  auto;
  padding: 20px;
  border: 1px solid #707070;
  border-radius: 10px;
  background-color: #ffcbcb;
  margin-top: 40px;
}
</style>