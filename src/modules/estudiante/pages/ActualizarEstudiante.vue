<template>
  <div class="container">
    <h1>Actualizar estudiantes</h1>
    <DatosActualizarEstudianteVue />
  </div>
</template>
    
<script>
import DatosActualizarEstudianteVue from '../components/DatosActualizarEstudiante.vue'

export default {
  components: {
    DatosActualizarEstudianteVue
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