<template>
  <div class="container1">
    <nav>
      <ul>
        <li 
        ><router-link to="/crear">
            <i class="fa fa-user"></i>
            <span class="nav-item"></span>
          </router-link>
        </li>

        <li><router-link to="/inicio">
            <i class="fa fa-home"></i>
            <span class="nav-item">Home</span>
          </router-link></li>

        <li><router-link to="/crear">
            <i class="fa fa-plus"></i>
            <span class="nav-item">crear</span>
          </router-link></li>

        <li><router-link to="gra">
            <i class="fa fa-solid fa-chart-simple"></i>
            <span class="nav-item">Analytics</span>
          </router-link></li>

        <li><router-link to="/editar">
            <i class="fa fa-pencil"></i>
            <span class="nav-item">Editar</span>
          </router-link></li>

        <li><router-link to="/objectivos">
            <i class="fa fa-question-circle"></i>
            <span class="nav-item">Help</span>
          </router-link></li>


        <li><a href="" class="logout">
            <i class="fa fa-sign-out-alt"></i>
            <span class="nav-item" @click="salir()">Log out</span>
          </a></li>
          
      </ul>

    </nav>
    <section class="main">
      <div class="img">
        <img src="../assets/logo-unicasinos.png" alt="" height="80">
        <h1> <span class="nav-item animate-charcter">Casino Tango</span></h1>
        <img src="../assets/logo2.jpg" alt="" height="80">

      </div>


      <div v-if="ruletas.length === 0 && pokers.length == 0">
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
        <div>
          <!-- <div class="card" style="width: 18rem;" v-for="poker in pokers" :key="poker.id"> -->
          <div router-link :to="'/detalle/' + poker.Numero_serial" class="card" style="width: 18rem;"
            v-for="poker in pokers" :key="poker.Numero_serial" @click="buscarPorMaquina(poker.Numero_serial)">
            <h4 class="animate-charcter">{{ poker.nombre_de_maquina }} </h4>
            <!-- <img :src="imagenUrl(poker.fotografia_billetero)" class="card-img-top" alt="cargando..2"> -->
            <img v-if="poker.fotografia && poker.fotografia.length > 0"
              :src="imagenUrl(poker.fotografia[0].fotografia_billetero)" class="card-img-top img2"
              alt="Fotografía de la máquina">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h7 class="card-text">
                <p class="warning">Nombre de maquina: </p>{{ poker.nombre_de_maquina }}
              </h7>
              <h7 class="card-text">
                <p class="warning">Número serial:</p>{{ poker.Numero_serial }}
              </h7>
              <h7 class="card-text">
                <p class="warning">Ubicación de la maquina:</p>{{ poker.ubicacion_de_la_maquina }}
              </h7>
              <h7 class="card-text">
                <p class="warning">Número de coljuegos:</p>{{ poker.Numero_unico_coljuegos }}
              </h7>
              <h7 class="card-text">
                <p class="warning">Número de maquina:</p>{{ poker.Numero_interno_maquina }}
              </h7>
            </div>
          </div>
        </div>
        <!-- ruleta -->
        <div router-link :to="'/detalle/' + ruleta.Nuc_1" class="card" style="width: 18rem;" v-for="ruleta in ruletas"
          :key="ruleta.Nuc_1" @click="buscarPorRuleta(ruleta.Nuc_1)">
          <h4 class="animate-charcter">{{ ruleta.nombre_de_ruleta }}</h4>
          <img :src="imagenUrl(ruleta.fotografia_de_ruleta)" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <h7 class="card-text">
            </h7>
            <h7 class="card-text">
              <p class="warning">Número serial:</p>{{ ruleta.N_serial }}
            </h7>
            <h7 class="card-text">
              <p class="warning">Ubicación de la ruleta:</p>{{ ruleta.ubicacion_del_elemento }}
            </h7>
            <h7 class="card-text">
              <p class="warning">Cantidad de módulos:</p>{{ ruleta.N_modulos }}
            </h7>
            <h7 class="card-text">
              <p class="p">Número de coljuegos:</p>{{ ruleta.Nuc_1 }}
            </h7>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from "js-cookie";

export default {
  name: 'LoginComp',

  data() {
    return {
      ruletas: [],
      pokers: [],
      users: [],
      logout: '',
      isLoading: false,
    }
  },

  mounted() {
    // this.getmaquina();
    this.getruleta()
    this.getmaquinapoker()
  },

  methods: {
    buscarPorMaquina(Numero_serial) {
      // Aquí puedes implementar la lógica para buscar por la máquina con el ID proporcionado
      console.log('Hiciste clic en la máquina con el Numero serial:', Numero_serial);

      this.$router.push({ name: 'buscar', params: { Numero_serial } });
      // window.open(`/http://localhost:8080/#/buscaR/${Nuc_1}`, '_blank');



      // Puedes realizar una petición al servidor, actualizar el estado, etc.
    },
    buscarPorRuleta(Nuc_1) {
      // Aquí puedes implementar la lógica para buscar por la máquina con el ID proporcionado
      console.log('Hiciste clic en la máquina con el Numero serial:', Nuc_1);

      this.$router.push({ name: 'buscar', params: { Nuc_1 } });
      // window.open(`/http://localhost:8080/#/buscaR/${Nuc_1}`, '_blank');



      // Puedes realizar una petición al servidor, actualizar el estado, etc.
    },

    descargarPDF() {
      // Reemplaza la siguiente URL con el enlace directo del archivo en tu servidor
      const enlaceDescarga = 'https://drive.google.com/drive/folders/1f0OgdkJl1_SpBD-68T_coG2GBBNT6O8q';

      // Crea un enlace temporal para iniciar la descarga
      const link = document.createElement('a');
      link.href = enlaceDescarga;
      link.target = '_blank'; // Abre el enlace en una nueva pestaña si es necesario
      link.download = 'ServidoresnWeb___8863e242ca542da___.pdf'; // Establece el nombre del archivo
      link.click();
    },

    async salir() {
      try {
        const response = await axios.post('https://casino-tango-backend.onrender.com/api/logout', this.logout);
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
    async getmaquinapoker() {
      try {
        const response = await axios.get("https://casino-tango-backend.onrender.com/api/maquinas");
        this.pokers = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async getruleta() {
      try {
        const response = await axios.get("https://casino-tango-backend.onrender.com/api/ruletas",);
        this.ruletas = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    imagenUrl(imagen) {
      try {
        if (imagen && imagen.data) {
          const imageBuffer = new Uint8Array(imagen.data);
          // const base64Image = btoa(String.fromCharCode(...imageBuffer));
          const base64Image = btoa(Uint8Array.from(imageBuffer).reduce((acc, byte) => acc + String.fromCharCode(byte), ''));


          // Determinar el tipo MIME, usa 'image/jpeg' por defecto
          let mimeType = 'image/jpeg';
          if (imagen.contentType) {
            mimeType = imagen.contentType;
          } else if (imagen.filename) {
            const extension = imagen.filename.split('.').pop().toLowerCase();
            if (extension === 'jpg' || extension === 'jpeg') {
              mimeType = 'image/jpeg';
            } else if (extension === 'png') {
              mimeType = 'image/png';
            } else if (extension === 'gif') {
              mimeType = 'image/gif';
            }
            // Agrega más extensiones y tipos MIME según tus necesidades
          }

          return `data:${mimeType};base64,${base64Image}`;
        }
      } catch (error) {

        console.log('Error al procesar la imagen:', error);
      }
      return ""; // En caso de errores o datos de imagen no válidos
    },

    async usuario() {
      try {
        const response = await axios.get('https://casino-tango-backend.onrender.com/api/registro')
        this.user = response.data
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>

nav {
  position: sticky;
  top: 0;
  bottom: 10%;
  height: 100vh;
  width: 90px;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transition: 1s;
}

li {
  list-style-type: none;
}

nav:hover {
  width: 280px;
  transition: 1s;
}


.img {
  display: flex;
  justify-content: space-between;
}

a {
  position: relative;
  width: 280px;
  font-size: 14px;
  color: rgb(254, 253, 253);
  display: table;
  padding: 5px
}

nav .fa {
  position: relative;
  width: 70px;
  height: 40px;
  top: 20px;
  font-size: 20px;
  text-align: start;
  color: #ffffff;
}

.nav-item {
  position: relative;
  top: 15px;
  margin-left: 8px;
}



/**/
router-link {
  position: relative;
  width: 280px;
  font-size: 14px;
  color: rgb(254, 253, 253);
  display: table;
  padding: 5px
}

nav .fa {
  position: relative;
  width: 70px;
  height: 40px;
  top: 20px;
  font-size: 20px;
  text-align: start;
}


a:hover {
  background:#D6D6D6;
}

a:hover i {
 /* color: #3769e9;*/
 color: #00B4E0;
  transition: 0.5s;
}

/**/
.logout {
  position: absolute;
  bottom: 0;
}

.container1 {
  display: flex;


}




.main {
  position: relative;
  padding: 20px;
  width: 100%;
}

.main-top {
  display: flex;
  width: 100%;
}

.main-top i {
  position: absolute;
  right: 0;
  margin: 10px 30px;
  color: rgb(110, 109, 109);
  cursor: pointer;
}

.main .users {
  display: flex;
  width: 100%;
}





.warning {
  color: rgb(8, 219, 251);


}

.img2 {
  animation: shadow 4.1s infinite;


}

@keyframes shadow {
  0% {
    filter: drop-shadow(10px 10px 10px rgb(149, 61, 226));
    /* Rojo */
  }

  20% {
    filter: drop-shadow(10px 10px 10px rgb(230, 98, 22));
    /* Verde */
  }

  25% {
    filter: drop-shadow(10px 10px 10px rgb(238, 19, 150));
    /* Verde */
  }

  30% {
    filter: drop-shadow(10px 10px 10px rgb(233, 235, 233));
    /* Verde */
  }

  50% {
    filter: drop-shadow(10px 10px 10px rgb(19, 238, 19));
    /* Verde */
  }

  55% {
    filter: drop-shadow(10px 10px 10px rgb(238, 143, 19));
    /* Verde */
  }

  100% {
    filter: drop-shadow(10px 10px 10px black);
  }
}

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


/* nombre */
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #5d05ba 10%,
      #f50404 50%,
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
  font-family: "sans-serif";
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

.card {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  margin-left: 30px;
  margin-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.8);
}

.card-text {
  display: flex;
  justify-content: start;
  color: #ffffff;
}

.card-front {
  z-index: 1;
}

.card-back {
  z-index: 2;
}
</style>
