<template>
  <body>

    <div id="particles-js"></div>
    <div>


      <section class="banner contenedor">
        <div class="img">
          <img src="../assets/logo3.jpg" srcset="" width="90" height="90" class="banner_img">
          <img src="../assets/logo-unicasinos.png" srcset="" width="99" height="99" class="banner_img">
        </div>
      </section>

      <section class="section">

        <!-- <div class="row "> -->
        <!--DIVISION DE LA PARTE QUIENES SOMOS -->
        <div class="col-lg-8 ">
          <h2 class="animate-charcter">Quienes somos :</h2>
          <p class="mb-0 text-start-defineapp">
            Es una empresa dedicada a prestar servicios y entretenimientos de juegos de suerte y azar, esta
            compuesta por cuatros casinos en la ciudad de Popayán, Pasto e Ipiales, Marcada bajo el Logo TANGO,
            creada por sus socios y accionistas en el año 2007, su sede principal está ubicada Carrera 9 N° 24 AN-21
            Centro comercial Campanario Local 53, en la ciudad de Popayán-Cauca.</p>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="custom-text-box mb-lg-0">
                <h5 class="animate-charcter ">Misión</h5>
                <p class="text-start-mision"> Somos una empresa competitiva en el manejo de casinos a nivel nacional
                  que día a día lucha por superar las
                  expectativas de nuestros clientes optimizando todos nuestros procesos y procedimientos, para dar el
                  mejor
                  servicio
                  de entretenimiento y diversión personalizado a través de la excelencia y el compromiso de nuestro
                  personal
                  para con
                  la organización y nuestros clientes.
                </p>

              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-10">
              <div class="custom-text-box mb-lg-0">
                <h5 class="animate-charcter ">Visión</h5>

                <p class="text-start-vision">
                  Llegar a ser una empresa Reconocida a nivel nacional por manejo e innovación en el mercado y por la
                  lucha
                  constante
                  por mantener una cultura de juego a la que actualmente se vive en nuestro país además ser
                  reconocidos por
                  nuestro
                  buen servicio, amabilidad, cordialidad, respeto y atención personalizada hacia nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </section>
      <div class="confirmar">
        <router-link to="/inicio" class="glow-on-hover">Aceptar</router-link>
        <router-link type="button" to="/" class="glow-on-hover">Cancelar</router-link>
      </div>
    </div>
    <div class="burbujas">
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
    </div>
  </body>
</template>
  
<script>
export default {
  name: 'Mision_visionA',
  props: {
    msg: String
  },
}
</script>
  
<style scoped>
/* animacion de titulo */
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 280% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 18s linear infinite;
  display: inline-block;
  font-size: 30px;

}

@keyframes textclip {
  to {
    background-position: 700% center;
  }
}

/* fin animacion de titulo */

/*comienzo animacion */
body {
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(to bottom right, #1b1b1b 0%, #ead178 100%);
  min-height: 100vh;
}


/* fin de animacion */

.img {
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid black; */
  margin: 9px
}

.confirmar {
  display: flex;
  justify-content: space-around;
}

.section {
  display: flex;
  justify-content: center;
}

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
  width: 20px;
  height: 20px;
  left: 15%;
  animation-duration: 7s;
  animation-delay: 3s;
}

.burbuja:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 90%;
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
}



.banner_img {
  animation: movimiento 2.5s linear infinite;
  border-radius: 50%;
}

@keyframes movimiento {
  0% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(30px);
  }

  100% {
    transform: translatey(30);
  }
}</style>