<template>
  <nav class="navigation">
    <img src="../assets/Logo-tango.jpg" alt="" height="80">
    <ul class="nav-links">
      <li class="nav-item"><router-link to="/inicio" class="nav-link"><i class="fa fa-home">Inicio</i> </router-link></li>
      <li class="nav-item"><router-link to="/crear" class="nav-link"><i class="fa fa-plus">Crear</i> </router-link></li>
      <li class="nav-item"><router-link to="/eliminar" class="nav-link"> <i
            class="fa-regular fa-trash-can">Eliminar</i></router-link></li>
      <li class="nav-item"><router-link to="/editar" class="nav-link"><i class="fa fa-pencil"> Editar</i> </router-link>
      </li>
      <li class="nav-item"><router-link to="/buscar" class="nav-link"><i class="fa fa-search">Buscar</i> </router-link>
      </li>
      
      <li class="nav-item">
        

        <button @click="descargarPDF"><i class="fa-solid fa-download"></i></button>
      </li>

      <li class="nav-item">
        <button type="button" class="glow-on-hover" @click="salir()">Salir</button>
      </li>
   
    </ul>
    
  </nav>

  <hr>

  <div class="container">
    <button type="button" class="btn animate-charcter" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Ruleta
    </button>

    <button type="button" class="btn  animate-charcter" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      maquina
    </button>


  </div>

  <!-- ruleta -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="animate-charcter">Editar Ruleta</h4>
          <button type="button" class="fa-solid fa-x fa-bounce" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <h4 class="animate-charcter">RULETA</h4>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsenombre " aria-expanded="false" aria-controls="flush-collapsenombre">
                  Nombre de ruleta
                </button>
              </h2>
              <div id="flush-collapsenombre" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="nombre_de_ruleta" id="nombre_de_maquina"
                      name="nombre_de_maquina" required />
                    <label for="nombre_de_maquina" class="form__label">nombre de ruleta</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseN_modulos" aria-expanded="false" aria-controls="flush-collapseN_modulos">
                  Número de modulos
                </button>
              </h2>
              <div id="flush-collapseN_modulos" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.N_modulos }} -->
                  <!-- <input v-model="N_modulos" id="N_modulos" name="N_modulos" type="number" required> -->

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_modulos" id="N_modulos" name="N_modulos"
                      required />
                    <label for="N_modulos" class="form__label"> Número de modulos</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseDescription" aria-expanded="false"
                  aria-controls="flush-collapseDescription">
                  Descripción de la ruleta
                </button>
              </h2>
              <div id="flush-collapseDescription" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.Description }} -->
                  <!-- <input v-model="Description" id="Description" name="Description" type="text" required> -->
                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="Description" id="Description" name="Description"
                      required />
                    <label for="Description" class="form__label">Descriptión</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsePantalla" aria-expanded="false" aria-controls="flush-collapsePantalla">
                  Descripción de la Pantalla
                </button>
              </h2>
              <div id="flush-collapsePantalla" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.Pantalla }} -->
                  <!-- <input v-model="Pantalla" id="Pantalla" name="Pantalla" type="text" required> -->
                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="Pantalla" id="Description" name="Pantalla" required />
                    <label for="Pantalla" class="form__label">Pantalla</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseubicacion_del_elemento" aria-expanded="false"
                  aria-controls="flush-collapseubicacion_del_elemento">
                  Ubicación de la ruleta
                </button>
              </h2>
              <div id="flush-collapseubicacion_del_elemento" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.ubicacion_del_elemento }} -->
                  <select class="form-select" aria-label="Default select example" v-model="ubicacion_del_elemento"
                    required>
                    <option selected>Ubicacion de la ruleta *</option>
                    <option value='Popayán Centro Comercial Campanario'>Popayán Centro Comercial Campanario</option>
                    <option value='Popayán Centro Comercial Terraplaza'>Popayan centro comercial terraplaza</option>
                    <option value='Pasto Parque Infantil'>Pasto parque infantil</option>
                    <option value='Ipiales Casino Tango'>ipiales casini tango</option>
                  </select>
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefecha" aria-expanded="false" aria-controls="flush-collapsefecha">
                  Fecha de instalacción
                </button>
              </h2>
              <div id="flush-collapsefecha" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.fecha_instalaccion_ruleta }} -->
                  <!-- <input v-model="fecha_instalaccion_ruleta" id="fecha_instalaccion_ruleta"
                    name="fecha_instalaccion_ruleta" type="date" required> -->
                  <div class="form__group field">
                    <input type="date" class="form__field" v-model="fecha_instalaccion_ruleta"
                      id="fecha_instalaccion_ruleta" name="fecha_instalaccion_ruleta" required />
                    <label for="fecha_instalaccion_ruleta" class="form__label">fecha instalaccion ruleta</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Número serial
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- {{ ruleta.N_serial }} -->
                  <!-- <input v-model="N_serial" id="N_serial-" name="N_serial-" type="text" required> -->
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_serial" id="N_serial" name="N_serial" required />
                    <label for="N_serial" class="form__label">Número de serial</label>
                  </div>

                </div>
              </div>
            </div>
            <!-- seriales -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial1" aria-expanded="false" aria-controls="flush-collapseserial1">
                  Número de la pantalla_1
                </button>
              </h2>
              <div id="flush-collapseserial1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_1" id="N_serial_1" name="N_serial_1"
                      required />
                    <label for="N_serial_1" class="form__label">Número de serial 1</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial2" aria-expanded="false" aria-controls="flush-collapseserial2">
                  Número de la pantalla_2
                </button>
              </h2>
              <div id="flush-collapseserial2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_2" id="N_serial_2" name="N_serial_2"
                      required />
                    <label for="N_serial_2" class="form__label">Número de serial 2</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial3" aria-expanded="false" aria-controls="flush-collapseserial3">
                  Número de la pantalla_3
                </button>
              </h2>
              <div id="flush-collapseserial3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_3" id="N_serial_3" name="N_serial_3"
                      required />
                    <label for="N_serial_3" class="form__label">Número de serial 3</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial4" aria-expanded="false" aria-controls="flush-collapseserial4">
                  Número de la pantalla_4
                </button>
              </h2>
              <div id="flush-collapseserial4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_4" id="N_serial_4" name="N_serial_4"
                      required />
                    <label for="N_serial_4" class="form__label">Número de serial 4</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial5" aria-expanded="false" aria-controls="flush-collapseserial5">
                  Número de la pantalla_5
                </button>
              </h2>
              <div id="flush-collapseserial5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_5" id="N_serial_5" name="N_serial_5"
                      required />
                    <label for="N_serial_5" class="form__label">Número de serial 5</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial6" aria-expanded="false" aria-controls="flush-collapseserial6">
                  Número de la pantalla_6
                </button>
              </h2>
              <div id="flush-collapseserial6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_6" id="N_serial_6" name="N_serial_6"
                      required />
                    <label for="N_serial_6" class="form__label">Número de serial 6</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial7" aria-expanded="false" aria-controls="flush-collapseserial7">
                  Número de la pantalla_7
                </button>
              </h2>
              <div id="flush-collapseserial7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_7" id="N_serial_7" name="N_serial_7"
                      required />
                    <label for="N_serial_7" class="form__label">Número de serial 7</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial8" aria-expanded="false" aria-controls="flush-collapseserial8">
                  Número de la pantalla_8
                </button>
              </h2>
              <div id="flush-collapseserial8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_8" id="N_serial_8" name="N_serial_8"
                      required />
                    <label for="N_serial_8" class="form__label">Número de serial 8</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial9" aria-expanded="false" aria-controls="flush-collapseserial9">
                  Número de la pantalla_9
                </button>
              </h2>
              <div id="flush-collapseserial9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_9" id="N_serial_9" name="N_serial_9"
                      required />
                    <label for="N_serial_9" class="form__label">Número de serial 9</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserial10" aria-expanded="false" aria-controls="flush-collapseserial10">
                  Número de pantalla_10
                </button>
              </h2>
              <div id="flush-collapseserial10" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial_10" id="N_serial_10" name="N_serial_10"
                      required />
                    <label for="N_serial_10" class="form__label">Número de pantalla 10</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- billeteros -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero1" aria-expanded="false"
                  aria-controls="flush-collapsebilletero1">
                  Número de billeteros 1
                </button>
              </h2>
              <div id="flush-collapsebilletero1" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_1" id="N_billetero_1"
                      name="N_billetero_1" required />
                    <label for="N_billetero_1" class="form__label">Número de billetero 1</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero2" aria-expanded="false"
                  aria-controls="flush-collapsebilletero2">
                  Número de billeteros 2
                </button>
              </h2>
              <div id="flush-collapsebilletero2" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_2" id="N_billetero_2"
                      name="N_billetero_2" required />
                    <label for="N_billetero_2" class="form__label">Número de billetero 2</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero3" aria-expanded="false"
                  aria-controls="flush-collapsebilletero3">
                  Número de billeteros 3
                </button>
              </h2>
              <div id="flush-collapsebilletero3" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_3" id="N_billetero_3"
                      name="N_billetero_3" required />
                    <label for="N_billetero_3" class="form__label">Número de billetero 3</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero4" aria-expanded="false"
                  aria-controls="flush-collapsebilletero4">
                  Número de billeteros 4
                </button>
              </h2>
              <div id="flush-collapsebilletero4" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_4" id="N_billetero_4"
                      name="N_billetero_4" required />
                    <label for="N_billetero_4" class="form__label">Número de billetero 4</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero5" aria-expanded="false"
                  aria-controls="flush-collapsebilletero5">
                  Número de billeteros 5
                </button>
              </h2>
              <div id="flush-collapsebilletero5" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_5" id="N_billetero_5"
                      name="N_billetero_5" required />
                    <label for="N_billetero_5" class="form__label">Número de billetero 5</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero6" aria-expanded="false"
                  aria-controls="flush-collapsebilletero6">
                  Número de billeteros 6
                </button>
              </h2>
              <div id="flush-collapsebilletero6" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_6" id="N_billetero_6"
                      name="N_billetero_6" required />
                    <label for="N_billetero_6" class="form__label">Número de billetero 6</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero7" aria-expanded="false"
                  aria-controls="flush-collapsebilletero7">
                  Número de billeteros 7
                </button>
              </h2>
              <div id="flush-collapsebilletero7" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_7" id="N_billetero_7"
                      name="N_billetero_7" required />
                    <label for="N_billetero_7" class="form__label">Número de billetero 7</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero8" aria-expanded="false"
                  aria-controls="flush-collapsebilletero8">
                  Número de billeteros 8
                </button>
              </h2>
              <div id="flush-collapsebilletero8" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_8" id="N_billetero_8"
                      name="N_billetero_8" required />
                    <label for="N_billetero_8" class="form__label">Número de billetero 8</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero9" aria-expanded="false"
                  aria-controls="flush-collapsebilletero9">
                  Número de billeteros 9
                </button>
              </h2>
              <div id="flush-collapsebilletero9" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_9" id="N_billetero_9"
                      name="N_billetero_9" required />
                    <label for="N_billetero_9" class="form__label">Número de billetero 9</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsebilletero10" aria-expanded="false"
                  aria-controls="flush-collapsebilletero10">
                  Número de billeteros 10
                </button>
              </h2>
              <div id="flush-collapsebilletero10" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero_10" id="N_billetero_10"
                      name="N_billetero_10" required />
                    <label for="N_billetero_10" class="form__label">Número de billetero 10</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- stacker -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker" aria-expanded="false" aria-controls="flush-collapsestacker">
                  Número de stacker 1
                </button>
              </h2>
              <div id="flush-collapsestacker" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_1" id="N_stacker_1" name="N_stacker_1"
                      required />
                    <label for="N_stacker_1" class="form__label">Número de stacker 1 </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker2" aria-expanded="false" aria-controls="flush-collapsestacker2">
                  Número de stacker 2
                </button>
              </h2>
              <div id="flush-collapsestacker2" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_2" id="N_stacker_2" name="N_stacker_2"
                      required />
                    <label for="N_stacker_2" class="form__label"> Número de stacker 2</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker3" aria-expanded="false" aria-controls="flush-collapsestacker3">
                  Número de stacker 3
                </button>
              </h2>
              <div id="flush-collapsestacker3" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_3" id="N_stacker_3" name="N_stacker_3"
                      required />
                    <label for="N_stacker_3" class="form__label"> Número de stacker 3</label>
                  </div>


                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker4" aria-expanded="false" aria-controls="flush-collapsestacker4">
                  Número de stacker 4
                </button>
              </h2>
              <div id="flush-collapsestacker4" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_4" id="N_stacker_4" name="N_stacker_4"
                      required />
                    <label for="N_stacker_4" class="form__label"> Número de stacker 4</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker5" aria-expanded="false" aria-controls="flush-collapsestacker5">
                  Número de stacker 5
                </button>
              </h2>
              <div id="flush-collapsestacker5" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_5" id="N_stacker_5" name="N_stacker_5"
                      required />
                    <label for="N_stacker_5" class="form__label"> Número de stacker 5</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker6" aria-expanded="false" aria-controls="flush-collapsestacker6">
                  Número de stacker 6
                </button>
              </h2>
              <div id="flush-collapsestacker6" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_6" id="N_stacker_6" name="N_stacker_6"
                      required />
                    <label for="N_stacker_6" class="form__label"> Número de stacker 6</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker7" aria-expanded="false" aria-controls="flush-collapsestacker7">
                  Número de stacker 7
                </button>
              </h2>
              <div id="flush-collapsestacker7" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_7" id="N_stacker_7" name="N_stacker_7"
                      required />
                    <label for="N_stacker_7" class="form__label"> Número de stacker 7</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker8" aria-expanded="false" aria-controls="flush-collapsestacker8">
                  Número de stacker 8
                </button>
              </h2>
              <div id="flush-collapsestacker8" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_8" id="N_stacker_8" name="N_stacker_8"
                      required />
                    <label for="N_stacker_8" class="form__label"> Número de stacker 8</label>
                  </div>


                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker9" aria-expanded="false" aria-controls="flush-collapsestacker9">
                  Número de stacker 9
                </button>
              </h2>
              <div id="flush-collapsestacker9" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_9" id="N_stacker_9" name="N_stacker_9"
                      required />
                    <label for="N_stacker_9" class="form__label"> Número de stacker 9</label>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsestacker10   " aria-expanded="false"
                  aria-controls="flush-collapsestacker10">
                  Número de stacker 10
                </button>
              </h2>
              <div id="flush-collapsestacker10" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_stacker_10" id="N_stacker_10" name="N_stacker_10"
                      required />
                    <label for="N_stacker_10" class="form__label"> Número de stacker 10</label>
                  </div>

                </div>
              </div>
            </div>

            <!-- fotos -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Fotografía de la ruleta
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <img :src="imagenUrl(ruleta.fotografia_de_ruleta)" id="specific-img3" > -->
                  <label for="fotografia_de_ruleta">Factura compra ruleta:</label>
                  <input ref="fotografia_de_ruleta" @change="handleFileUpload('fotografia_de_ruleta')" type="file"
                    id="fotografia_de_ruleta" name="fotografia_de_ruleta" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Fotografía de factura de compra
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <img :src="imagenUrl(ruleta.serial_modelo_ruleta)" id="specific-img2" > -->
                  <label for="serial_modelo_ruleta">serial modelo ruleta:</label>
                  <input ref="serial_modelo_ruleta" @change="handleFileUpload('serial_modelo_ruleta')" type="file"
                    id="serial_modelo_ruleta" name="serial_modelo_ruleta" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsecertificado_de_importacion_ruleta" aria-expanded="false"
                  aria-controls="flush-collapsecertificado_de_importacion_ruleta">
                  certificado de importación
                </button>
              </h2>
              <div id="flush-collapsecertificado_de_importacion_ruleta" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <img :src="imagenUrl(ruleta.certificado_de_importacion_ruleta)" id="specific-img1"> -->
                  <label for="certificado_de_importacion_ruleta">certificado de importación ruleta:</label>
                  <input ref="certificado_de_importacion_ruleta"
                    @change="handleFileUpload('certificado_de_importacion_ruleta')" type="file"
                    id="certificado_de_importacion_ruleta" name="certificado_de_importacion_ruleta" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsecompra" aria-expanded="false" aria-controls="flush-collapsecompra">
                  factura de compra de la ruleta
                </button>
              </h2>
              <div id="flush-collapsecompra" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <img :src="imagenUrl(ruleta.Factura_compra_ruleta)" id="specific-image"> -->

                  <label for="Factura_compra_ruleta">Factura compra ruleta:</label>
                  <input ref="Factura_compra_ruleta" @change="handleFileUpload('Factura_compra_ruleta')" type="file"
                    id="Factura_compra_ruleta" name="Factura_compra_ruleta" accept="image/*">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="editar">
          <button class="glow-on-hover" type="submit" @click="EditarRuleta()"><i
              class="fa-solid fa-pencil fa-bounce"></i>Actualizar</button>
          <button type="button" class="glow-on-hover" data-bs-dismiss="modal"><i
              class="fa-solid fa-x fa-bounce"></i>Cancelar</button>
        </div>
      </div>
    </div>
  </div>


  <!-- maquina -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="animate-charcter">Editar Maquina</h4>
          <button type="button" class="fa-solid fa-x fa-bounce" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="accordion accordion-flush" id="accordionFlushExample">

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseserie" aria-expanded="false" aria-controls="flush-collapseserie">
                  Número de serie
                </button>
              </h2>
              <div id="flush-collapseserie" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_serial" id="N_serial" name="N_serial" required />
                    <label for="N_serial" class="form__label">Número serial</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsenombre_maquina " aria-expanded="false"
                  aria-controls="flush-collapsenombre_maquina">
                  Nombre de maquina
                </button>
              </h2>
              <div id="flush-collapsenombre_maquina" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="nombre_de_maquina" id="nombre_de_maquina"
                      name="nombre_de_maquina" required />
                    <label for="name" class="form__label">Nombre de la maquina</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsemaquina" aria-expanded="false" aria-controls="flush-collapsemaquina">
                  Número de maquina
                </button>
              </h2>
              <div id="flush-collapsemaquina" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="n_maquina" id="n_maquina" name="n_maquina"
                      required />
                    <label for="n_maquina" class="form__label">Número de la Máquina:</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsemarca" aria-expanded="false" aria-controls="flush-collapsemarca">
                  Marca de la Máquina
                </button>
              </h2>
              <div id="flush-collapsemarca" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form__group field">
                    <input type="text" class="form__field" v-model="N_marca" id="N_marca" name="N_marca" required />
                    <label for="N_marca" class="form__label">Marca de la Máquina:</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsfechainstalacion" aria-expanded="false"
                  aria-controls="flush-collapsfechainstalacion">
                  Fecha de instalación
                </button>
              </h2>
              <div id="flush-collapsfechainstalacion" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="date" class="form__field" v-model="fecha_instalaccion" id="fecha_instalaccion"
                      name="fecha_instalaccion" required />
                    <label for="N_marca" class="form__label">nueva fecha de instalacción</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsBILLETE" aria-expanded="false" aria-controls="flush-collapsBILLETE">
                  Número de billtero
                </button>
              </h2>
              <div id="flush-collapsBILLETE" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div class="form__group field">
                    <input type="number" class="form__field" v-model="N_billetero" id="N_billetero" name="N_billetero"
                      required />
                    <label for="N_billetero" class="form__label">Número del billetero nuevo</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsfechainstalacion1" aria-expanded="false"
                  aria-controls="flush-collapsfechainstalacion1">
                  Ubicación de la maquina
                </button>
              </h2>

              <div id="flush-collapsfechainstalacion1" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <h4 class="animate-charcter">Ubicacion del elemeto</h4> -->
                  <select class="form-select" aria-label="Default select example" v-model="ubicacion_del_elemento"
                    required>
                    <option selected class="form__label">Ubicacion de la maquina *</option>
                    <option value='Popayán Centro Comercial Campanario'>Popayán Centro Comercial Campanario</option>
                    <option value='Popayán Centro Comercial Terraplaza'>Popayan centro comercial terraplaza</option>
                    <option value='Pasto Parque Infantil'>Pasto parque infantil</option>
                    <option value='Ipiales Casino Tango'>ipiales casino tango</option>
                  </select>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapscompras" aria-expanded="false" aria-controls="flush-collapscompras">
                  Factura de compra
                </button>
              </h2>
              <div id="flush-collapscompras" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <!-- <h4 class="animate-charcter">factura de compra</h4> -->
                  <label for="Factura_compra">Factura de Compra:</label>
                  <input ref="Factura_compra" @change="handleFileUpload('Factura_compra')" type="file" id="Factura_compra"
                    name="Factura_compra" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapscertificado_de_importacion" aria-expanded="false"
                  aria-controls="flush-collapscertificado_de_importacion">
                  Certificado de importación
                </button>
              </h2>
              <div id="flush-collapscertificado_de_importacion" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <label for="certificado_de_importacion">Certificado de Importación:</label>
                  <input ref="certificado_de_importacion" @change="handleFileUpload('certificado_de_importacion')"
                    type="file" id="certificado_de_importacion" name="certificado_de_importacion" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsfoto" aria-expanded="false" aria-controls="flush-collapsfoto">
                  fotografía de maquina
                </button>
              </h2>
              <div id="flush-collapsfoto" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <label for="fotografia_de_maquina">Fotografía de la Máquina:</label>
                  <input ref="fotografia_de_maquina" @change="handleFileUpload('fotografia_de_maquina')" type="file"
                    id="fotografia_de_maquina" name="fotografia_de_maquina" accept="image/*">
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsserial_modelo" aria-expanded="false"
                  aria-controls="flush-collapsserial_modelo">
                  fotografía de seriales y modelos
                </button>
              </h2>

              <div id="flush-collapsserial_modelo" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <label for="serial_modelo"> fotografía de seriales y modelos:</label>
                  <input ref="serial_modelo" @change="handleFileUpload('serial_modelo')" type="file" id="serial_modelo"
                    name="serial_modelo" accept="image/*">
                </div>
              </div>
            </div>

            <hr size="3px" color="black" />

            <div class="editar">
              <button class="glow-on-hover" type="submit" @click="actualizar()"><i
                  class="fa-solid fa-pencil fa-bounce"></i>Actualizar</button>
              <button type="button" class="glow-on-hover" data-bs-dismiss="modal"><i
                  class="fa-solid fa-x fa-bounce"></i>Cancelar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


  




  <!-- ANIMACION -->
  <div class="burbujas">
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>
    <div class="burbuja"></div>


  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from "js-cookie";

export default {
  name: 'BuquedA-',
  props: {
    msg: String
  },
  data() {
    return {
      maquinaEditada: {
        maquina: {
        Numero_serial: '1',
        Numero_unico_coljuegos: '1',
        Numero_billetero: '1',
        nombre_de_maquina: '1',
        Numero_interno_maquina: '1',
        Numero_serial_pantalla_superior: '1',
        Numero_serial_pantalla_inferior: '1',
        Marca_pantalla: '1',
        Marca_maquina: '1',
        Numero_cpu: '1',
        ubicacion_de_la_maquina: '',
        libreria_maquina: '1',
        cantidad_de_juegos: '1',
        marca_billetero: '',
        lista_de_juegos: '1',
        descripcion_maquina: '1',
        fecha_modificacion: '',
        usuarioId:'1',
        maquinaId:''

      },
      },

    
      
      ruletaEditada: {
        //numeor de seriales
        N_serial: '',
        N_serial_1: '',
        N_serial_2: '',
        N_serial_3: '',
        N_serial_4: '',
        N_serial_5: '',
        N_serial_6: '',
        N_serial_7: '',
        N_serial_8: '',
        N_serial_9: '',
        N_serial_10: '',
        //billeteros
        N_billetero_1: '',
        N_billetero_2: '',
        N_billetero_3: '',
        N_billetero_4: '',
        N_billetero_5: '',
        N_billetero_6: '',
        N_billetero_7: '',
        N_billetero_8: '',
        N_billetero_9: '',
        N_billetero_10: '',
        //stacker
        N_stacker_1: '',
        N_stacker_2: '',
        N_stacker_3: '',
        N_stacker_4: '',
        N_stacker_5: '',
        N_stacker_6: '',
        N_stacker_7: '',
        N_stacker_8: '',
        N_stacker_9: '',
        N_stacker_10: '',
        //demas datos 
        nombre_de_ruleta: ' ',
        N_modulos: '',
        // Marca: '',
        Description: '',

        Pantalla: '',
        ubicacion_del_elemento: '',
        fecha_instalaccion_ruleta: '',
        //fotos
        certificado_de_importacion_ruleta: null,
        fotografia_de_ruleta: null,
        Factura_compra_ruleta: null,
        serial_modelo_ruleta: null,
      },


 
    };
  },

  methods: {



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
    
    handleFileUpload(fieldName) {
      const fileInput = this.$refs[fieldName];
      this[fieldName] = fileInput.files[0];
    },
    async actualizar() {
      try {
        const formData = new FormData();

        // Agrega todos los campos de texto al formData
        formData.append("N_serial", this.N_serial);
        formData.append("N_marca", this.N_marca);
        formData.append("n_maquina", this.n_maquina);
        formData.append("N_billetero", this.N_billetero);
        formData.append("nombre_de_maquina", this.nombre_de_maquina);
        formData.append("ubicacion_del_elemento", this.ubicacion_del_elemento);
        formData.append("fecha_instalaccion", this.fecha_instalaccion);

        // Agrega imágenes al formData si se han seleccionado
        if (this.certificado_de_importacion) {
          formData.append("certificado_de_importacion", this.certificado_de_importacion);
        }
        if (this.fotografia_de_maquina) {
          formData.append("fotografia_de_maquina", this.fotografia_de_maquina);
        }
        if (this.Factura_compra) {
          formData.append("Factura_compra", this.Factura_compra);
        }
        if (this.serial_modelo) {
          formData.append("serial_modelo", this.serial_modelo);
        }
        const response = await axios.put(`http://localhost:3000/api/maquinas/${this.N_serial}`, formData);
        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'maquina editada correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        }
      } catch (error) {

        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async EditarRuleta() {
      // Crea un objeto FormData
      const ruleta = new FormData();
      ruleta.append("nombre_de_ruleta", this.nombre_de_ruleta);
      //numero serial
      ruleta.append('N_serial', this.N_serial)
      ruleta.append('N_serial_1', this.N_serial_1)
      ruleta.append('N_serial_2', this.N_serial_2)
      ruleta.append('N_serial_3', this.N_serial_3)
      ruleta.append('N_serial_4', this.N_serial_4)
      ruleta.append('N_serial_5', this.N_serial_5)
      ruleta.append('N_serial_6', this.N_serial_6)
      ruleta.append('N_serial_7', this.N_serial_7)
      ruleta.append('N_serial_8', this.N_serial_8)
      ruleta.append('N_serial_9', this.N_serial_9)
      ruleta.append('N_serial_10', this.N_serial_10)
      // //billetero
      ruleta.append('N_billetero_1', this.N_billetero_1)
      ruleta.append('N_billetero_2', this.N_billetero_2)
      ruleta.append('N_billetero_3', this.N_billetero_3)
      ruleta.append('N_billetero_4', this.N_billetero_4)
      ruleta.append('N_billetero_5', this.N_billetero_5)
      ruleta.append('N_billetero_6', this.N_billetero_6)
      ruleta.append('N_billetero_7', this.N_billetero_7)
      ruleta.append('N_billetero_8', this.N_billetero_8)
      ruleta.append('N_billetero_9', this.N_billetero_9)
      ruleta.append('N_billetero_10', this.N_billetero_10)

      ruleta.append('N_stacker_1', this.N_stacker_1)
      ruleta.append('N_stacker_2', this.N_stacker_2)
      ruleta.append('N_stacker_3', this.N_stacker_3)
      ruleta.append('N_stacker_4', this.N_stacker_4)
      ruleta.append('N_stacker_5', this.N_stacker_5)
      ruleta.append('N_stacker_6', this.N_stacker_6)
      ruleta.append('N_stacker_7', this.N_stacker_7)
      ruleta.append('N_stacker_8', this.N_stacker_8)
      ruleta.append('N_stacker_9', this.N_stacker_9)
      ruleta.append('N_stacker_10', this.N_stacker_10)
      //numero de los modulos
      ruleta.append('N_modulos', this.N_modulos)
      //Description de la maquina
      ruleta.append('Description', this.Description)
      //pantalla
      ruleta.append('Pantalla', this.Pantalla)
      //ubicacion del elemento
      ruleta.append('ubicacion_del_elemento', this.ubicacion_del_elemento)
      //fecha instalacion ruleta
      ruleta.append('fecha_instalaccion_ruleta', this.fecha_instalaccion_ruleta)

      if (this.certificado_de_importacion_ruleta) {
        ruleta.append("certificado_de_importacion_ruleta", this.certificado_de_importacion_ruleta);
      }
      if (this.fotografia_de_ruleta) {
        ruleta.append("fotografia_de_ruleta", this.fotografia_de_ruleta);
      }
      if (this.Factura_compra_ruleta) {
        ruleta.append("Factura_compra_ruleta", this.Factura_compra_ruleta);
      }
      if (this.serial_modelo_ruleta) {
        ruleta.append("serial_modelo_ruleta", this.serial_modelo_ruleta);
      }
      try {
        // Realiza la solicitud POST utilizando Axios
        const response = await axios.put(`http://localhost:3000/api/ruletas/${this.N_serial}`, ruleta);
        console.log(response.data);
        console.log(this.ruleta);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Ruleta creada correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo registrar la ruleta correctamente. Por favor, llenar todos los datos.",
        });
      }
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

  }
};
</script>


<style scoped >
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #38ef7d;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown~.form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}

.form__field:focus {
  ~.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }

  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}

/* reset input */
.form__field {

  &:required,
  &:invalid {
    box-shadow: none;
  }
}

/* demo */
/* inout */
.container {
  display: flex;
  justify-content: space-evenly;
}

.editar {
  display: flex;
  justify-content: space-evenly;
}


.modal-header {
  background-color: #000000;
}

/*titulo  */
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

/* nav */
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
}

.buscarmaquina {
  display: flex;
  justify-content: center;
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
</style>
