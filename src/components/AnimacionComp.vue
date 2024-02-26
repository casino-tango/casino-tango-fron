<template>
 <!-- ANIMACION -->
 <div class="burbujas">
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>


  </div>
</template>

<script>
export default {
  name: "AnimacionComponent",
  methods: {

  }
}
</script>

<style scoped>

/*burbujas*/
.burbuja {
  border-radius: 50%;
  background-image: url('../assets/chip.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  position: absolute;
  bottom: -150;
  animation: burbujas 0.1s linear infinite;
}

.burbuja:nth-child(1) {
  width: 80px;
  height: 80px;
  left: 5%;
  animation-duration: 3s;
  animation-delay: 0.1s;
}

.burbuja:nth-child(2) {
  width: 100px;
  height: 100px;
  left: 35%;
  animation-duration: 3s;
  animation-delay: 0.1s;
}

.burbuja:nth-child(3) {
  width: 10px;
  height: 10px;
  left: 15%;
  animation-duration: 7s;
  animation-delay: 3s;
}


.burbuja:nth-child(4) {
  width: 30px;
  height: 30px;
  left: 80%;
  animation-duration: 6s;
  animation-delay: 3s;
}

.burbuja:nth-child(5) {
  width: 70px;
  height: 70px;
  left: 65%;
  animation-duration: 3s;
  animation-delay: 1s;
}

.burbuja:nth-child(6) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 0.1s;

}

.burbuja:nth-child(7) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 0.1s;

}

@keyframes burbujas {
  0% {
    bottom: 0;
    opacity: 0;
  }

  30% {
    transform: translateX(30px);
  }

  50% {
    opacity: .2;
  }

  100% {
    bottom: 100vh;
    opacity: 0;
  }
}</style>