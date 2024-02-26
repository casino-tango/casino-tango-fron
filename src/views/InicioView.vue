<template>

  <login-comp></login-comp>
  <AnimacionComponent></AnimacionComponent>
</template>

<script>

import LoginComp from '@/components/inicioComp.vue'
import AnimacionComponent from '@/components/AnimacionComp.vue'

export default {
  name: 'LoginView',
  components: {
    LoginComp,

    AnimacionComponent
  },

}
</script>
