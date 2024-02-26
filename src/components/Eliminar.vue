<template>


  <div class="caja">
    <div class="input-wrapper">
      <input v-model="searchInput" class="input-field" type="text"
        placeholder="Ingresa el número de serie u numero de coljuegos" />
      <button class="btn-search" @click="eliminar">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
  
  <hr>
  <div v-if="maquinas.length === 0 && ruletas.length === 0  && pokers.length==0 ">

    <section class="banner contenedor">
      <section class="banner_title">
        <h2 class="animate-charcter"> No se han registrados datos</h2>
      </section>
      <div class="banner_img">
        <img src="../assets/logo2.jpg" alt="">
      </div>
    </section>
  </div>

  <div v-else>
   <!-- maquina poker -->
   <div class="card " style="width: 18rem;" v-for="poker in pokers" :key="poker.id">
    <h4 class="animate-charcter">{{ poker.nombre_de_maquina }} </h4>
    <img :src="imagenUrl(poker.fotografia_de_maquina)" class="card-img-top" alt="cargando..">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <h7 class="card-text">
        <p class="text-warning">Nombre de maquina: </p>{{ poker.nombre_de_maquina }}
      </h7>
      <h7 class="card-text">
        <p class="text-warning">Número serial:</p>{{ poker.N_serial }}
      </h7>
      <h7 class="card-text">
        <p class="text-warning">ubicación de la maquina:</p>{{ poker.ubicacion_del_elemento }}
      </h7>
      <h7 class="card-text">
        <p class="text-warning">Número de coljuegos:</p>{{ poker.Nuc }}
      </h7>
      <h7 class="card-text">
        <p class="text-warning">Número de maquina:</p>{{ poker.n_maquina }}
      </h7>
    </div>
  </div>
    <!-- ruleta -->
    <div class="card" style="width: 18rem;" v-for="ruleta in ruletas" :key="ruleta.id">
      <h4 class="animate-charcter">{{ ruleta.nombre_de_ruleta }}</h4>
      <img :src="imagenUrl(ruleta.fotografia_de_ruleta)" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h7 class="card-text">
          <p class="text-warning">Nombre de Ruleta: </p>{{ ruleta.nombre_de_ruleta }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número  serial:</p>{{ ruleta.N_serial }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Ubicación de la ruleta:</p>{{ ruleta.ubicacion_del_elemento }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Cantidad de módulos:</p>{{ ruleta.N_modulos }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número  de coljuegos:</p>{{ ruleta.Nuc_1 }}
        </h7>
      </div>
    </div>

    <!-- maquina -->
    <div class="card " style="width: 18rem;" v-for="maquina in maquinas" :key="maquina.id">
      <h4 class="animate-charcter">{{ maquina.nombre_de_maquina }} </h4>
      <img :src="imagenUrl(maquina.fotografia_de_maquina_poker)" class="card-img-top" alt="cargando..">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h7 class="card-text">
          <p class="text-warning">Nombre de maquina: </p>{{ maquina.nombre_de_maquina }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número serial:</p>{{ maquina.N_serial }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Ubicación de la maquian:</p>{{ maquina.ubicacion_del_elemento }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número de coljuegos:</p>{{ maquina.Nuc }}
        </h7>

        <h7 class="card-text">
          <p class="text-warning">Número de maquina:</p>{{ maquina.n_maquina }}
        </h7>
      </div>

    </div>
<!-- maquina ainswor -->
    <div class="card " style="width: 18rem;" v-for="ainswor in ainswors" :key="ainswor.id">
      <h4 class="animate-charcter">{{ ainswor.nombre_de_maquina }} </h4>
      <img :src="imagenUrl(ainswor.fotografia_de_maquina_ainsword)" class="card-img-top" alt="cargando..">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h7 class="card-text">
          <p class="text-warning">Nombre de maquina: </p>{{ ainswor.nombre_de_maquina }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número  serial:</p>{{ ainswor.N_serial }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Ubicación  de la maquina:</p>{{ ainswor.ubicacion_del_elemento }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número de coljuegos:</p>{{ ainswor.Nuc }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número de maquina:</p>{{ ainswor.n_maquina }}
        </h7>
      </div>
    </div>
<!-- maquinas franco -->
    <div class="card " style="width: 18rem;" v-for="franco in franco" :key="franco.id">
      <h4 class="animate-charcter">{{ franco.nombre_de_maquina }} </h4>
      <img :src="imagenUrl(franco.fotografia_de_maquina_franco)" class="card-img-top" alt="cargando..">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h7 class="card-text">
          <p class="text-warning">Nombre de maquina: </p>{{ franco.nombre_de_maquina }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número serial:</p>{{ franco.N_serial }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Ubicación de la maquina:</p>{{ franco.ubicacion_del_elemento }}
        </h7>
        <h7 class="card-text">
          <p class="text-warning">Número de coljuegos:</p>{{ franco.Nuc }}
        </h7>

        <h7 class="card-text">
          <p class="text-warning">Número de maquina:</p>{{ franco.n_maquina }}
        </h7>
      </div>

    </div>


  </div>
  
</template>
    
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from "js-cookie";

let timerInterval

export default {
  name: 'EliminaR',
  props: {
    msg: String
  },
  data() {
    return {
      searchInput: '',
      id: '',
      N_serial: '',
      maquinas: [],
      ruletas: [],
      pokers: [],
      ainswors: [],
      franco:[],

    }
  },
  mounted() {
    this.getmaquina();
    this.getruleta()
    this.getmaquinapoker();
    this.getmaquina_ainswor()
    this.getmaquinafranco()

  },
  methods: {
    descargarPDF() {
      // Reemplaza la siguiente URL con el enlace directo del archivo en tu servidor
      const enlaceDescarga = 'https://drive.google.com/drive/folders/1f0OgdkJl1_SpBD-68T_coG2GBBNT6O8q';
      // Crea un enlace temporal para iniciar la descarga
      const link = document.createElement('a');
      link.href = enlaceDescarga;
      link.target = '_blank'; // Abre el enlace en una nueva pestaña si es necesario
      link.click();
    },
    async salir() {
      try {
        const response = await axios.post('http://localhost:3000/api/logout', this.logout);
        if (response.status === 200) {
          Cookies.remove("token")
          this.$router.push("/");
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'sesión  cerrada correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.error("Error al cerrar sesión: La solicitud no fue exitosa");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al cerrar sesión',
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al cerrar sesión',
          showConfirmButton: false,
          timer: 1500
        });
      } finally {
        // Limpia los datos de usuario o realiza otras tareas comunes aquí
      }
    },
    async getmaquina() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinaspoker");
        this.maquinas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
   
    async getruleta() {
      try {
        const response = await axios.get("http://localhost:3000/api/ruletas",);
        this.ruletas = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getmaquinapoker() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinas");
        this.pokers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getmaquinafranco(){
      try {
        const response = await axios.get('http://localhost:3000/api/maquinasfranco')
        this.franco= response.data
      } catch (error) {
        console.log(error);
      }
    },

    async getmaquina_ainswor() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinasainsword");
        this.ainswors = response.data;
      } catch (error) {
        console.error(error);                                    
      }
    },
    imagenUrl(imagen) {
      try {
        if (imagen && imagen.data) {
          const imageBuffer = new Uint8Array(imagen.data);
          const base64Image = btoa(Uint8Array.from(imageBuffer).reduce((acc, byte) => acc + String.fromCharCode(byte), ''));
          // Determinar el tipo MIME a partir de la extensión del archivo o el contentType
          let mimeType = imagen.contentType || 'image/jpeg';

          if (imagen.filename) {
            const extension = imagen.filename.split('.').pop().toLowerCase();
            if (extension === 'jpg' || extension === 'jpeg') {
              mimeType = 'image/jpeg';
            } else if (extension === 'png') {
              mimeType = 'image/png';
            } else if (extension === 'gif') {
              mimeType = 'image/gif';
            } else if (extension == 'jpeg') {
              mimeType = 'image/jpeg'
            }
            // Puedes agregar más extensiones y tipos MIME según tus necesidades
          }

          // Comprobar si la imagen es grande
          const MAX_IMAGE_SIZE = 180 * 1024 * 1024; // Por ejemplo, 10 MB

          if (imageBuffer.length > MAX_IMAGE_SIZE) {
            console.warn('Imagen demasiado grande');
            return '';
          }

          return `data:${mimeType};base64,${base64Image}`;
        }
      } catch (error) {
        console.log('Error al procesar la imagen:', error);
      }
      return ''; // En caso de errores o datos de imagen no válidos
    },
    async eliminar() {
      if (this.searchInput) {
        try {
          const response1 = await axios.delete(`http://localhost:3000/api/maquinas/${this.searchInput}`);
          const response2 = await axios.delete(`http://localhost:3000/api/ruletas/${this.searchInput}`);
          const response3 = await axios.delete(`http://localhost:3000/api/maquinass/${this.searchInput}`);
          const response4 = await axios.delete(`http://localhost:3000/api/ruletass/${this.searchInput}`);

          const response5 = await axios.delete(`http://localhost:3000/api/maquinaspoker/${this.searchInput}`);
          const response6 = await axios.delete(`http://localhost:3000/api/maquinasspoker/${this.searchInput}`);

          const response7 = await axios.delete(`http://localhost:3000/api/maquinasainsword/${this.searchInput}`);
          const response8 = await axios.delete(`http://localhost:3000/api/maquinassainsword/${this.searchInput}`);

          const response9 = await axios.delete(`http://localhost:3000/api/maquinasfranco/${this.searchInput}`);
          const response10 = await axios.delete(`http://localhost:3000/api/maquinassfranco/${this.searchInput}`);

          console.log(response2.data);
          console.log(response1.data);
          console.log(response3.data);
          console.log(response4.data);
          console.log(response5.data);
          console.log(response6.data);
          console.log(response7.data);
          console.log(response8.data);
          console.log(response9.data);
          console.log(response10.data);
          // this.getmaquina();


          Swal.fire({
            title: 'Eliminando !',
            html: 'I will close in <b></b> milliseconds.',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector('b');
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });


        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Error al eliminar máquina.',
            text: 'Ha ocurrido un error al eliminar la máquina. Por favor, inténtalo nuevamente.',
            timer: 3000,
          });
        }
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Consulta de eliminación vacía',
          text: 'Por favor, ingresa un ID o un número de serie válido.',
          timer: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>


/* carga */
.banner {
  display: flex;
  justify-content: space-evenly;
  margin-right: 10px;
}

.banner_img img {
  width: 150px;
  height: 150px;
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
}

/* fin craga */
/* nombre */
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
  display: flex;
  justify-content: center;
  font-size: 30px;

}

@keyframes textclip {
  to {
    background-position: 700% center;
  }
}

/* fin nombre */
.imgen {
  display: flex;
  justify-content: center;
}

/* card */
.card {
  position: relative;
  display: inline-block;
  margin-right: 40px;
  margin-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.7);
}

.card-text {
  display: flex;
  justify-content: start;
  color: #fff;
}

.card-front {
  z-index: 1;
}

.card-back {
  z-index: 2;
}

/* nav */
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: white;
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 10px;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }
}

/* fin den nav */

/* .caja */
.caja {
  max-width: 20px;
  margin: 20px auto 0;
  padding: 10px;

  transform: translate(10%, 10%);
}

.caja {
  display: inline-block;
}

/* Input */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.input-field {

  width: 0;
  outline: none;
  padding: 0 19px;
  font-size: 20px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 20px;
  transition: width 0.7s ease-in-out, border-radius 0.7s ease-in-out;
}


.input-field::placeholder {
  /* Existing styles */

}

/* Search Button */

.btn-search {
  background: transparent;
  line-height: 50px;
  height: 50px;
  border: transparent;
  width: 50px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;
}

.btn-search i {
  color: rgb(6, 6, 6);
  font-size: 30px;
}

/* Expand input and rotate button on hover */
.caja:hover .input-wrapper {
  transform: translateX(10) scale(1.05);

}

.caja:hover .input-field {
  width: 400px;
  border-color: #fff800;

}


.caja:hover .btn-search {
  transform: rotate(350deg);
}


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
}
</style>
