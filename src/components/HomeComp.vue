<template>
  <div>
    <div class="image">
      <div class="loading wave">
        unicasinos de colombia S.A
      </div>
    </div>
  </div>
  <button class="glow-on-hover" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight">Ingresar</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="name" id="offcanvasRightLabel">Login</h5>
    </div>
    <div class="logito">
      <img src="../assets/logo3.jpg" alt="" srcset="" height="70">
    </div>
    <hr size="5px" color="white">
    <div class="offcanvas-body">
      <form>
        <div class="form-group">
          <label for="username">Email</label>
          <input type="text" id="username" placeholder="enter your name " v-model="persona.email">
        </div>
        <hr>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="enter your password" v-model="persona.password">
        </div>

        <hr size="5px" color="white">

        <!-- login -->
        <button class="glow-on-hover" type="submit" @click="postLogin()"><img src="../assets/chip.png"
            width="20">login</button>
        <hr>
        <!-- Botón para cerrar el panel de control -->
        <button class="glow-on-hover" type="submit" data-bs-dismiss="offcanvas" aria-label="Close">Cerrar
        </button>
        <hr size="4px" color="white">

        <router-link to="/restablecer" class="glow-on-hover">Recuperar cuenta</router-link>


      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookie from 'js-cookie';
export default {
  name: 'HomeComp',
  data() {
    return {
      persona: {
        email: '',
        password: '',
      },
      mostrarPanel: false
    };
  },
  methods: {

    async postLogin() {
      try {
        const response = await axios.post('https://casino-tango-backend.onrender.com/api/login', this.persona);

        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.code === 201) {
            this.$router.push("/objectivos");// Inicio de sesión exitoso, redirige al usuario a "/objectivos"
            const expirationTime = new Date(Date.now() + 8 * 60 * 60 * 1000); // Configura el tiempo de expiración a 8 horas
            Cookie.set('token', responseData.token, { expires: expirationTime });

            // ...

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: responseData.message,
              showConfirmButton: false,
              timer: 500
            });
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: responseData.message,
              text: 'Ocurrió un problema. Por favor, verifica tu email o contraseña.',
              showConfirmButton: false,
              timer: 3000
            });
          }
        } else {
          // Manejar otros códigos de respuesta o errores aquí
          console.error('Error en la respuesta:', response.data);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error en la respuesta del servidor',
            text: 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.',
            showConfirmButton: false,
            timer: 150
          });
        }
      } catch (error) {
        // Manejar errores de la solicitud HTTP aquí
        console.error('Error en la solicitud HTTP:', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error en la solicitud HTTP',
          text: 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.',
          showConfirmButton: false,
          timer: 3000
        });
      }
    }
  }
}
</script>

<style scoped>
/*  */

.name {
  color: #fff;
  font-family: "sans-serif";

}

/* dasboar */
#offcanvasRight {
  background-color: rgba(0, 0, 0, 0.9);

}

/* fin dasboar */

/* nombre */
.loading {
  text-transform: uppercase;
  font-family: "sans-serif";
  font-weight: bold;
  font-size: 5vw;
  /* Usa unidades vw (viewport width) para el tamaño de fuente */
  text-align: center;
  height: 10vh;
  /* Usa unidades vh (viewport height) para la altura */
  line-height: 9vh;
  /* Ajusta la línea según la altura */
  vertical-align: bottom;
  position: absolute;
  left: 0;
  right: 0;
  top: 37vh;
  /* Ajusta la posición vertical según el viewport */
  bottom: 0;
  display: block;
}

.ff {
  position: absolute;
  font-size: 12pt;
  top: -20px;
  color: white;
  line-height: 12pt;
}

@keyframes wave-animation {
  0% {
    background-position: 0 bottom;
  }

  100% {
    background-position: 200px bottom;
  }
}

@keyframes loading-animation {
  0% {
    background-size: 200px 0px;
  }

  100% {
    background-size: 200px 200px;
  }
}

.wave {
  background-image: url("../assets/caida-fichas-poquer-aislado_1284-41699.webp");
  -moz-background-clip: text;
  -o-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 0px rgba(255, 255, 255, 0.06);
  animation: wave-animation 1s infinite linear, loading-animation 10s infinite linear alternate;
  background-size: 100% 50vh;
  /* Ajusta el tamaño de la imagen de fondo */
  background-repeat: repeat-x;
  opacity: 1;
}

.wave-2 {
  -moz-background-clip: initial;
  -o-background-clip: initial;
  -webkit-background-clip: initial;
  background-clip: initial;
  display: inline-block;
}

/*   nombre */
.logito {
  display: flex;
  justify-content: center;
}

.recuperar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  background-image: url('../assets/logo6.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

a {
  color: #fff;
}

.container {
  padding: 2em;
  background-color: transparent;
  border-radius: 5px;
  border: floralwhite;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.8em;
  border-radius: 10px;
  border: 1px solid #ccc;
  color: #fff;
  font-family: "Cabin Condensed", sans-serif;
  background-color: transparent;
}


.form-group {
  margin-bottom: 1em;
}

label {
  font-weight: bold;
  color: #fff;
  font-family: "sans-serif";
}

::placeholder {
  color: white;
}

/* Estilos para pantallas más pequeñas */
@media (max-width: 768px) {
  .dashboard {
    width: 90%;
    padding: 1em;
  }

  .container {
    padding: 1em;
  }
}

.glow-on-hover {
  width: 220px;
  padding: 10px;
  height: 50px;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  top: 0.5em;
  z-index: 0;
  border-radius: 80px;

}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
