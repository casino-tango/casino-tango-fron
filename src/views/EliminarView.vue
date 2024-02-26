<template>
  <!-- <navbarComponent></navbarComponent> -->
  <Eliminar />
  <AnimacionComponent></AnimacionComponent>
</template>
  
<script>
// @ is an alias to /src
import Eliminar from '@/components/Eliminar.vue'
// import navbarComponent from '@/components/NavbarComp.vue';

import AnimacionComponent from '@/components/AnimacionComp.vue'
export default {
  name: 'EliminarView',
  components: {
    Eliminar,
    // navbarComponent,
    AnimacionComponent
  }
}
</script>
  
  
  
  