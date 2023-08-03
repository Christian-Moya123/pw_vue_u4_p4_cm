<template>
  <div class="container">
    <h1>CONSULTAR ESTUDIANTE</h1>
    <DatosEstudiante />
  </div>
</template>

<script>
import DatosEstudiante from '../components/DatosEstudiante.vue'

export default {
  components: {
    DatosEstudiante
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