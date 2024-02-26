<template>
    <body>
        <div class="img">
            <img src="../assets/logo-unicasinos.png" alt="" srcset="">
            <img src="../assets/Imagen1.jpg" alt="" srcset="">
        </div>
        <div class="divrecuperar">
            <div class="cont1">
                <div class="headerh4">
                    <h4 class="animate-charcter">Recuperar contraseña</h4>
                </div>
                <hr size="8px" color="white" />
                <div class="bodycont">
                    <p class="texto1">Ingresa tu correo electrónico para el reestablecimiento de la contraseña.</p>
                    <input class="inputemail" type="email" v-model="email" placeholder="email" required>
                </div>
                <hr size="8px" color="white" />
                <div class="confimar">
                    <RouterLink to="/" class="btn btn-secondary mx-1">Cancelar </Routerlink>
                    <Routerlink to="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalcodigo"
                        @click="enviarCorreo">
                        Enviar</Routerlink>
                </div>

                <!--inserto modal-->

                <div class="modal fade" id="modalcodigo" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="animate-charcter">Ingresa el código de seguridad</h4>
                            </div>
                            <div class="modal-body">
                                <p class="textcodigo">Comprueba si recibiste un correo electrónico con tu código de 6
                                    dígitos.</p>
                                <input type="text" class="inputcodigo" placeholder="Ingresa el código"
                                    v-model="codigoRecuperar">
                                <p class="textcodigo">Escribe tu nueva contraseña.</p>
                                <input type="password" class="inputcodigo" placeholder="password" v-model="password"
                                    maxlength="9" minlength="8">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" @click="actualizarcontrasena">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: 'RecuperarContracomp',
    data() {
        return {
            email: '',
            codigoRecuperar: '',
            password: '',
            modalVisibility: false,

        };
    },
    methods: {
        enviarCorreo() {
            // Hacer la solicitud al backend para enviar el correo electrónico
            axios.post("http://localhost:3000/api/recuperar", { email: this.email })
            .then(() => {
                    console.log("Solicitud de recuperación de correo enviada correctamente");


                    Swal.fire({
                        icon: 'success',
                        title: 'Codigo Enviado',
                        text: 'Tu codigo de verficacion a sido enviado satisfactoriamente. Revisa tu correo¡',
                    });
                })
                .catch(error => {
                    console.log(error);
                    // Manejar el error en caso de fallo en el envío del correo
                });
        },
        // Comparar el código ingresado con el código enviado al correo
        async actualizarcontrasena() {
            try {
                // Hacer la solicitud al backend para restablecer la contraseña
                const response = await axios.patch(`http://localhost:3000/api/actualizar/${this.email}`, {
                    codigoRecuperar: this.codigoRecuperar,
                    password: this.password,
                })
                console.log(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Contraseña restablecida',
                    text: 'Tu contraseña ha sido restablecida exitosamente.',
                });
                // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario a la página de inicio de sesión

            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El código ingresado es incorrecto.',
                });
            }

        }
    },
}
</script>

<style scoped>
.img {
    /* margin: 3%; */
    display: flex;
    justify-content: center;
}

.divrecuperar {

    display: flex;
    justify-content: center;

}

body {
    /* background: linear-gradient(to bottom right, #1b1b1b 0%, #ead178 100%); */
    background-image: url('../assets/logo6.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 95px;
    /* Espacio interno del fondo */
}



.cont1 {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.8);
}

.titulo1 {
    font-size: 20px;
    text-align: left;
    margin: 5px;
    padding: 10px;

}

.bodycont {
    text-align: left;
    padding-left: 10px;
    margin: 15px 10px 10px 10px;
    height: 20vh;
}

.texto1 {
    color: #ffffff;

}

.inputemail {
    width: 95%;
    height: 8vh;
    border-radius: 10px;
}

.confimar {
    display: flex;
    justify-content: center;
}



.textcodigo {
    padding: 4px 1px 2px 1px;
    margin: 3px;
    color: #fff;
}

.inputcodigo {
    border-radius: 10px;
    width: 50%;
    height: 7vh;
    margin: 5px;


}

/* modal */
.modal-content {
    background-color: rgba(0, 0, 0, 0.8);
}

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
</style>