<template>
  <section class="main">


  <br />
  <div class="container">
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src="../assets/scorpion.jpg" class="img" id="img" alt="Scorpion Image">
    </button>

    <button type="button" class="animate-charcter1 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <img src="../assets/foto_ruleta.jpeg" class="img" alt="Scorpion Image">
    </button>
  </div>

  <!-- ruleta -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="animate-charcter" id="staticBackdropLabel">Registro de una ruleta</h5>
          <button type="button" class="fa-solid fa-x fa-bounce" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="crearRuleta">

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.nombre_de_ruleta" id="nombre_de_maquina"
                name="nombre_de_maquina" required />
              <label for="nombre_de_maquina" class="form__label">nombre de ruleta</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_modulos" id="modulos" name="modulos" required />
              <label for="modulos" class="form__label">Cantidad de modulos * </label>
            </div>


            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.Pantalla" id="Pantalla" name="Pantalla" required />
              <label for="Pantalla" class="form__label">Descripcion de la pantalla * </label>
            </div>


            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.Description" id="Description" name="Description"
                required />
              <label for="Description" class="form__label">Descripcion de ruleta *</label>
            </div>



            <!-- numeros de billetero -->
            <h7 class="animate-charcter">Numero serial de los billeteros</h7>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_1" id="N_billetero_1"
                name="N_billetero_1" required />
              <label for="N_billetero_1" class="form__label">Numero de billetero 1 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_2" id="N_billetero_2"
                name="N_billetero_2" required />
              <label for="N_billetero_2" class="form__label">Numero de billetero 2 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_3" id="N_billetero_3"
                name="N_billetero_3" required />
              <label for="N_billetero_3" class="form__label">Numero de billetero 3 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_4" id="N_billetero_4"
                name="N_billetero_4" required />
              <label for="N_billetero_4" class="form__label">Numero de billetero 4 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_5" id="N_billetero_5"
                name="N_billetero_5" required />
              <label for="N_billetero_5" class="form__label">Numero de billetero 5 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_6" id="N_billetero_6"
                name="N_billetero_6" required />
              <label for="N_billetero_6" class="form__label">Numero de billetero 6 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_7" id="N_billetero_7"
                name="N_billetero_7" required />
              <label for="N_billetero_7" class="form__label">Numero de billetero 7 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_8" id="N_billetero_8"
                name="N_billetero_8" required />
              <label for="N_billetero_8" class="form__label">Numero de billetero 8 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_9" id="N_billetero_9"
                name="N_billetero_9" required />
              <label for="N_billetero_9" class="form__label">Numero de billetero 9 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_billetero_10" id="N_billetero_10"
                name="N_billetero_10" required />
              <label for="N_billetero_10" class="form__label">Numero de billetero 10 *</label>
            </div>
            <hr>
            <!-- numero de serial -->
            <h7 class="animate-charcter">Numero seriales de los modulos</h7>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial" id="N_serial" name="N_serial" required />
              <label for="N_serial" class="form__label">Numero serial de la ruleta *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_1" id="N_serial_1" name="N_serial_1"
                required />
              <label for="N_serial_1" class="form__label">Numero serial de pantalla 1 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_2" id="N_serial_2" name="N_serial_2"
                required />
              <label for="N_serial_2" class="form__label">Numero serial de pantalla 2 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_3" id="N_serial_3" name="N_serial_3"
                required />
              <label for="N_serial_3" class="form__label">Numero serial de pantalla 3 *</label>
            </div>

            <div class="form__group field">
              <input type="textr" class="form__field" v-model="ruleta.N_serial_4" id="N_serial_4" name="N_serial_4"
                required />
              <label for="N_serial_4" class="form__label">Numero serial de pantalla 4 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_5" id="N_serial_5" name="N_serial_5"
                required />
              <label for="N_serial_5" class="form__label">Numero serial de pantalla 5 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_6" id="N_serial_6" name="N_serial_6"
                required />
              <label for="N_serial_6" class="form__label">Numero serial de pantalla 6 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_7" id="N_serial_7" name="N_serial_7"
                required />
              <label for="N_serial_7" class="form__label">Numero serial de pantalla 7 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_8" id="N_serial_8" name="N_serial_8"
                required />
              <label for="N_serial_8" class="form__label">Numero serial de pantalla 8 *</label>
            </div>

            <div class="form__group field">
              <input type="text" class="form__field" v-model="ruleta.N_serial_9" id="N_serial_9" name="N_serial_9"
                required />
              <label for="N_serial_9" class="form__label">Numero serial de pantalla 9 *</label>
            </div>

            <div class="form__group field">
              <input type="textr" class="form__field" v-model="ruleta.N_serial_10" id="N_serial_10" name="N_serial_10"
                required />
              <label for="N_serial_10" class="form__label">Numero serial de pantalla 10 *</label>
            </div>

            <h7 class="animate-charcter">Stacker de los modulos</h7>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_1" id="N_stacker_1" name="N_stacker_1"
                required />
              <label for="N_stacker_1" class="form__label">Numero stacker 1 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_2" id="N_stacker_2" name="N_stacker_2"
                required />
              <label for="N_stacker_2" class="form__label">Numero stacker 1 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_3" id="N_stacker_3" name="N_stacker_3"
                required />
              <label for="N_stacker_3" class="form__label">Numero stacker 3 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_4" id="N_stacker_4" name="N_stacker_4"
                required />
              <label for="N_stacker_4" class="form__label">Numero stacker 4 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_5" id="N_stacker_5" name="N_stacker_5"
                required />
              <label for="N_stacker_5" class="form__label">Numero stacker 5 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_6" id="N_stacker_6" name="N_stacker_6"
                required />
              <label for="N_stacker_6" class="form__label">Numero stacker 6 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_7" id="N_stacker_7" name="N_stacker_7"
                required />
              <label for="N_stacker_7" class="form__label">Numero stacker 7 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_8" id="N_stacker_8" name="N_stacker_8"
                required />
              <label for="N_stacker_8" class="form__label">Numero stacker 8 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_9" id="N_stacker_9" name="N_stacker_9"
                required />
              <label for="N_stacker_9" class="form__label">Numero stacker 9 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.N_stacker_10" id="N_stacker_10" name="N_stacker_10"
                required />
              <label for="N_stacker_10" class="form__label">Numero stacker 10*</label>
            </div>

            <!-- NUMERO DE NUC -->
            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_1" id="Nuc_1" name="Nuc_1" required />
              <label for="Nuc_1" class="form__label">Numero de coljuegos 1 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_2" id="Nuc_2" name="Nuc_2" required />
              <label for="Nuc_2" class="form__label">Numero de coljuegos 2 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_3" id="Nuc_3" name="Nuc_3" required />
              <label for="Nuc_3" class="form__label">Numero de coljuegos 3 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_4" id="Nuc_1" name="Nuc_4" required />
              <label for="Nuc_4" class="form__label">Numero de coljuegos 4 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_5" id="Nuc_1" name="Nuc_5" required />
              <label for="Nuc_5" class="form__label">Numero de coljuegos 5 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_6" id="Nuc_6" name="Nuc_6" required />
              <label for="Nuc_6" class="form__label">Numero de coljuegos 6 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_7" id="Nuc_7" name="Nuc_7" required />
              <label for="Nuc_7" class="form__label">Numero de coljuegos 7 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_8" id="Nuc_8" name="Nuc_8" required />
              <label for="Nuc_8" class="form__label">Numero de coljuegos 8 *</label>
            </div>



            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_9" id="Nuc_9" name="Nuc_9" required />
              <label for="Nuc_9" class="form__label">Numero de coljuegos 9 *</label>
            </div>

            <div class="form__group field">
              <input type="number" class="form__field" v-model="ruleta.Nuc_10" id="Nuc_10" name="Nuc_10" required />
              <label for="Nuc_10" class="form__label">Numero de coljuegos 10 *</label>
            </div>

            <div class="form__group field">
              <input type="date" class="form__field" v-model="ruleta.fecha_instalaccion_ruleta"
                id="fecha_instalaccion_ruleta" name="fecha_instalaccion_ruleta" required />
              <label for="fecha_instalaccion_ruleta" class="form__label">fecha de instalaccion *</label>
            </div>

            <select class="form-select" aria-label="Default select example" v-model="ruleta.ubicacion_del_elemento"
              required>
              <option selected>Ubicación de la maquina *</option>
              <option value='Popayán Centro Comercial Campanario'>Popayán Centro Comercial Campanario</option>
              <option value='Popayán Centro Comercial Terraplaza'>Popayán centro comercial terraplaza</option>
              <option value='Pasto Parque Infantil'>Pasto parque infantil</option>
              <option value='Ipiales Casino Tango'>ipiales casino tango</option>
            </select>
            <!-- <p>adjuntar fotografias </p> -->
            <h7 class="animate-charcter">Adjuntar fotografias</h7>
            <!-- fotos -->
            <label for="">certificado de importacion *
              <input type="file" ref="certificado_de_importacion_ruleta" required></label>
            <hr>
            <label for="">fotografia de la ruleta *
              <input type="file" ref="fotografia_de_ruleta" required>
            </label>
            <hr>
            <label for="">factura de compra de la ruleta *</label>
            <input type="file" ref="Factura_compra_ruleta" required>
            <hr>
            <label for="">fotografia de el serial y modelo *</label>
            <input type="file" ref="serial_modelo_ruleta" required>
            <hr>
            <hr>
            <label for="">deseas añadir una fotografia demas *</label>
            <input type="file" ref="fotografia_de_respaldo">
            <hr>

            <div class="modal-footer">
              <button type="button" class="btn btn-light border-warning" data-bs-dismiss="modal"><i
                  class="fa-solid fa-x"></i>Cerrar</button>
              <button class="glow-on-hover" type="submit">Crear ruleta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- maquina-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="animate-charcter ">Registro de una maquina</h1>
          <button type="button" class="fa-solid fa-x fa-bounce" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- contedido modal -->
          <form @submit.prevent="crearMaquina">

            <!-- numero serial -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Numero_serial" id="N_serial" name="N_serial" />
              <label for="N_serial" class="form__label">Número de serial *</label>
            </div>
            <!-- coljuegos -->
            <div class="form__group field">
              <input type="number" class="form__field" v-model="maquina.Numero_unico_coljuegos" id="Nuc" name="Nuc" />
              <label for="Nuc" class="form__label">Número unico de coljuegos *</label>
            </div>
            <!--billetero  -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Numero_billetero" id="N_billetero"
                name="N_billetero" q />
              <label for="N_billetero" class="form__label">Numero del billetero * </label>
            </div>
            <!-- nombre de la maquina -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.nombre_de_maquina" id="nombre_de_maquina"
                name="nombre_de_maquina" />
              <label for="name" class="form__label">Nombre de la maquina</label>
            </div>
            <!-- numero interno maquina -->
            <div class="form__group field">
              <input type="number" class="form__field" v-model="maquina.Numero_interno_maquina" id="n_maquina"
                name="n_maquina" />
              <label for="n_maquina" class="form__label">Número interno de máquina *</label>
            </div>
            <!-- numero serial pantalla supeior -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Numero_serial_pantalla_superior"
                id="Numero_serial_pantalla_superior" name="Numero_serial_pantalla_superior" />
              <label for="Numero_serial_pantalla_superior" class="form__label">Número de serial de pantalla
                superior*</label>
            </div>
            <!-- numero serial pantalla inferior-->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Numero_serial_pantalla_inferior"
                id="Numero_serial_pantalla_inferior" name="Numero_serial_pantalla_inferior" />
              <label for="Numero_serial_pantalla_inferior" class="form__label">Número de serial de pantalla
                inferior*</label>
            </div>
            <!-- marca de la maquina -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Marca_pantalla" id="Marca_pantalla"
                name="Marca_pantalla" />
              <label for="Marca_pantalla" class="form__label">Marca de la pantalla * </label>
            </div>
            <!-- marca de la maquina -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Marca_maquina" id="Marca_maquina"
                name="Marca_maquina" />
              <label for="Marca_maquina" class="form__label">Marca de la maquina * </label>
            </div>
            <!-- numero de la cpu -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.Numero_cpu" id="Numero_cpu" name="Numero_cpu" />
              <label for="Numero_cpu" class="form__label">Número de la cpu* </label>
            </div>
            <br>
            <!-- ubicacion de la MAQUINA -->
            <select class="form-select" aria-label="Default select example" v-model="maquina.ubicacion_de_la_maquina">
              <option selected>Ubicación de la maquina *</option>
              <option value='Popayán Centro Comercial Campanario Casino Tango'>Popayán Centro Comercial Campanario
              </option>
              <option value='Popayán Centro Comercial Terraplaza Casino Tango'>Popayán centro comercial terraplaza
              </option>
              <option value='Pasto Parque Infantil Casino Tango'>Pasto parque infantil</option>
              <option value='Ipiales Casino Tango'>ipiales casino tango</option>

            </select>
            <!-- Libreria de la maquina -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.libreria_maquina" id="libreria_maquina"
                name="libreria_maquina" />
              <label for="libreria_maquina" class="form__label">Libreria de la maquina* </label>
            </div>
            <br>
            <!-- cantidad de juegos -->
            <select class="form-select" aria-label="Default select example" v-model="maquina.cantidad_de_juegos">
              <option selected>Cantidad de juegos *</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option value='41'>41</option>
              <option value='42'>42</option>
              <option value='43'>43</option>
              <option value='44'>44</option>
              <option value='45'>45</option>
              <option value='46'>46</option>
              <option value='47'>47</option>
              <option value='48'>48</option>
              <option value='49'>49</option>
              <option value='50'>50</option>
              <option value='51'>51</option>
              <option value='52'>52</option>
              <option value='53'>53</option>
              <option value='54'>54</option>
              <option value='55'>55</option>
              <option value='56'>56</option>
              <option value='57'>57</option>
              <option value='58'>58</option>
              <option value='59'>59</option>
              <option value='60'>60</option>

            </select>
            <br>
            <!-- marca de billetero -->
            <select class="form-select" aria-label="Default select example" v-model="maquina.marca_billetero">
              <option selected>Marca de billetero *</option>
              <option value='VIZION'>VIZION</option>
              <option value='MEI'>MEI</option>
              <option value='UBA'>UBA</option>
              <option value='ARDAC'>ARDAC</option>
            </select>
            <br>
            <!-- lista de jugos -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.lista_de_juegos" id="lista_de_juegos"
                name="lista_de_juegos" />
              <label for="lista_de_juegos" class="form__label">Lista de juegos* </label>
            </div>
            <!-- descripcion de la maquina -->
            <div class="form__group field">
              <input type="text" class="form__field" v-model="maquina.descripcion_maquina" id="descripcion_maquina"
                name="descripcion_maquina" />
              <label for="descripcion_maquina" class="form__label">descripcion de la maquina* </label>
            </div>
            <!-- fecha de instalacion de la maquina -->
            <div class="form__group field">
              <input type="date" class="form__field" v-model="maquina.fecha_instalaccion" id="fecha_instalaccion"
                name="fecha_instalaccion" />
              <label for="fecha_instalaccion" class="form__label"> instalacion de la maquina * </label>
            </div>
            <br>
            <!-- fecha de modificacion de la maquina -->

            <div class="form__group field">
              <input type="date" class="form__field" v-model="maquina.fecha_modificacion" id="fecha_modificacion"
                name="fecha_modificacion" />
              <label for="fecha_modificacion" class="form__label"> modificacion la maquina * </label>
            </div>
            <br>

            <!-- Otros campos del formulario... -->
            <label for="">Fotografía del billetero*
              <input type="file" ref="fotografia_billetero"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del serial de la maquina*
              <input type="file" ref="fotografia_serial_maquina"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la pantalla superior *
              <input type="file" ref="fotografia_de_pantalla_superior"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la pantalla inferior *
              <input type="file" ref="fotografia_de_pantalla_inferior"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la placa *
              <input type="file" ref="fotografia_la_placa"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la cpu *
              <input type="file" ref="fotografia_la_cpu"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la maquina *
              <input type="file" ref="fotografia_la_maquina"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la Libreria *
              <input type="file" ref="fotografia_la_libreria"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía de la factura de compra *
              <input type="file" ref="fotografia_la_compra_maquina"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado de importacion *
              <input type="file" ref="fotografia_la_importacion_maquina"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado de importacion billetero *
              <input type="file" ref="fotografia_la_importacion_billetero"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado serial billetero *
              <input type="file" ref="fotografia_la_serial_billetero"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado impotacion de pantallas *
              <input type="file" ref="fotografia_la_importacion_pantallas"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado serial de pantallas *
              <input type="file" ref="fotografia_la_serial_pantallas"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado importacion de la cpu*
              <input type="file" ref="fotografia_la_importacion_cpu"></label>
            <hr size="4px" color="black" />

            <label for="">Fotografía del certificado serila de la cpu*
              <input type="file" ref="fotografia_la_serial_cpu"></label>
            <hr size="4px" color="black" />

            <input type="hidden" v-model="maquina.usuarioId" name="usuarioId" />

            <input type="hidden" v-model="maquina.maquinaId" name=" maquinaId" />


            <div class="modal-footer">
              <button type="button" class="btn btn-light border-warning" data-bs-dismiss="modal"><i
                  class="fa-solid fa-x"></i>Cerrar</button>
              <button class="glow-on-hover" type="submit">Crear Máquina</button>
            </div>

          </form>
          <!-- fin contenido modal -->
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
import Cookies from "js-cookie";
export default {

  name: 'BuquedA',
  props: {
    msg: String
  },
  data() {
    return {
      maquinas: [],
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
        fecha_instalaccion: '',
        fecha_modificacion: '',
        usuarioId: '1',
        maquinaId: ''
      },




      //creacion de ruleta
      ruletas: [],
      ruleta: {
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
        // coljuegos

        Nuc_1: '',
        Nuc_2: '',
        Nuc_3: '',
        Nuc_4: '',
        Nuc_5: '',
        Nuc_6: '',
        Nuc_7: '',
        Nuc_8: '',
        Nuc_9: '',
        Nuc_10: '',
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
        fotografia_de_respaldo: null
      },
      logout: ''
    }
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

    async crearMaquina() {
      const formData = new FormData();
      formData.append("usuarioId", this.maquina.usuarioId);
      formData.append("maquinaId", this.maquina.maquinaId);


      formData.append("Numero_serial", this.maquina.Numero_serial);
      formData.append("Numero_unico_coljuegos", this.maquina.Numero_unico_coljuegos);
      formData.append("Numero_billetero", this.maquina.Numero_billetero);
      formData.append("nombre_de_maquina", this.maquina.nombre_de_maquina);
      formData.append("Numero_interno_maquina", this.maquina.Numero_interno_maquina);
      formData.append("Numero_serial_pantalla_superio", this.maquina.Numero_serial_pantalla_superior);
      formData.append("Numero_serial_pantalla_inferio", this.maquina.Numero_serial_pantalla_inferior);
      formData.append("Marca_pantalla", this.maquina.Marca_pantalla);
      formData.append("Marca_maquina", this.maquina.Marca_maquina);
      formData.append("Numero_cpu", this.maquina.Numero_cpu);
      formData.append("ubicacion_de_la_maquina", this.maquina.ubicacion_de_la_maquina);
      formData.append("libreria_maquina", this.maquina.libreria_maquina);
      formData.append("cantidad_de_juegos", this.maquina.cantidad_de_juegos);
      formData.append("marca_billetero", this.maquina.marca_billetero);
      formData.append("lista_de_juegos", this.maquina.lista_de_juegos);
      formData.append("descripcion_maquina", this.maquina.descripcion_maquina);
      formData.append("fecha_instalaccion", this.maquina.fecha_instalaccion);
      formData.append("fecha_modificacion", this.maquina.fecha_modificacion);

      formData.append("fotografia_billetero", this.$refs.fotografia_billetero.files[0]);
      formData.append("fotografia_serial_maquina", this.$refs.fotografia_serial_maquina.files[0]);
      formData.append("fotografia_de_pantalla_superior", this.$refs.fotografia_de_pantalla_superior.files[0]);
      formData.append("fotografia_de_pantalla_inferior", this.$refs.fotografia_de_pantalla_inferior.files[0]);
      formData.append("fotografia_la_placa", this.$refs.fotografia_la_placa.files[0]);
      formData.append("fotografia_la_cpu", this.$refs.fotografia_la_cpu.files[0]);
      formData.append("fotografia_la_maquina", this.$refs.fotografia_la_maquina.files[0]);
      formData.append("fotografia_la_libreria", this.$refs.fotografia_la_libreria.files[0]);
      formData.append("fotografia_la_compra_maquina", this.$refs.fotografia_la_compra_maquina.files[0]);
      formData.append("fotografia_la_importacion_maquina", this.$refs.fotografia_la_importacion_maquina.files[0]);
      formData.append("fotografia_la_importacion_billetero", this.$refs.fotografia_la_importacion_billetero.files[0]);

      formData.append("fotografia_la_serial_billetero", this.$refs.fotografia_la_serial_billetero.files[0]);
      formData.append("fotografia_la_importacion_pantallas", this.$refs.fotografia_la_importacion_pantallas.files[0]);
      formData.append("fotografia_la_serial_pantallas", this.$refs.fotografia_la_serial_pantallas.files[0]);
      formData.append("fotografia_la_importacion_cpu", this.$refs.fotografia_la_importacion_cpu.files[0]);
      formData.append("fotografia_la_serial_cpu", this.$refs.fotografia_la_serial_cpu.files[0]);

      try {

        const response = await axios.post("https://casino-tango-backend.onrender.com/api/maquinas", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Máquina creada correctamente.",
          showConfirmButton: false,
        });
        // }
      } catch (error) {
        console.log(error);
        // Muestra un mensaje de error genérico en caso de error en la creación
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo registrar la máquina correctamente. Por favor llenar todos los datos.",
          timer: 1500,
        });
      }
    },





    async crearRuleta() {
      // Crea un objeto FormData
      const ruleta = new FormData();
      ruleta.append("nombre_de_ruleta", this.ruleta.nombre_de_ruleta);

      //numero unico de coljugos
      ruleta.append("Nuc", this.ruleta.Nuc);

      //numero serial
      ruleta.append('N_serial', this.ruleta.N_serial)
      ruleta.append('N_serial_1', this.ruleta.N_serial_1)
      ruleta.append('N_serial_2', this.ruleta.N_serial_2)
      ruleta.append('N_serial_3', this.ruleta.N_serial_3)
      ruleta.append('N_serial_4', this.ruleta.N_serial_4)
      ruleta.append('N_serial_5', this.ruleta.N_serial_5)
      ruleta.append('N_serial_6', this.ruleta.N_serial_6)
      ruleta.append('N_serial_7', this.ruleta.N_serial_7)
      ruleta.append('N_serial_8', this.ruleta.N_serial_8)
      ruleta.append('N_serial_9', this.ruleta.N_serial_9)
      ruleta.append('N_serial_10', this.ruleta.N_serial_10)
      // //billetero
      ruleta.append('N_billetero_1', this.ruleta.N_billetero_1)
      ruleta.append('N_billetero_2', this.ruleta.N_billetero_2)
      ruleta.append('N_billetero_3', this.ruleta.N_billetero_3)
      ruleta.append('N_billetero_4', this.ruleta.N_billetero_4)
      ruleta.append('N_billetero_5', this.ruleta.N_billetero_5)
      ruleta.append('N_billetero_6', this.ruleta.N_billetero_6)
      ruleta.append('N_billetero_7', this.ruleta.N_billetero_7)
      ruleta.append('N_billetero_8', this.ruleta.N_billetero_8)
      ruleta.append('N_billetero_9', this.ruleta.N_billetero_9)
      ruleta.append('N_billetero_10', this.ruleta.N_billetero_10)
      //NUC
      ruleta.append('Nuc_1', this.ruleta.Nuc_1)
      ruleta.append('Nuc_2', this.ruleta.Nuc_2)
      ruleta.append('Nuc_3', this.ruleta.Nuc_3)
      ruleta.append('Nuc_4', this.ruleta.Nuc_4)
      ruleta.append('Nuc_5', this.ruleta.Nuc_5)
      ruleta.append('Nuc_6', this.ruleta.Nuc_6)
      ruleta.append('Nuc_7', this.ruleta.Nuc_7)
      ruleta.append('Nuc_8', this.ruleta.Nuc_8)
      ruleta.append('Nuc_9', this.ruleta.Nuc_9)
      ruleta.append('Nuc_10', this.ruleta.Nuc_10)
      //stacker
      ruleta.append('N_stacker_1', this.ruleta.N_stacker_1)
      ruleta.append('N_stacker_2', this.ruleta.N_stacker_2)
      ruleta.append('N_stacker_3', this.ruleta.N_stacker_3)
      ruleta.append('N_stacker_4', this.ruleta.N_stacker_4)
      ruleta.append('N_stacker_5', this.ruleta.N_stacker_5)
      ruleta.append('N_stacker_6', this.ruleta.N_stacker_6)
      ruleta.append('N_stacker_7', this.ruleta.N_stacker_7)
      ruleta.append('N_stacker_8', this.ruleta.N_stacker_8)
      ruleta.append('N_stacker_9', this.ruleta.N_stacker_9)
      ruleta.append('N_stacker_10', this.ruleta.N_stacker_10)
      //numero de los modulos
      ruleta.append('N_modulos', this.ruleta.N_modulos)
      //Description de la maquina
      ruleta.append('Description', this.ruleta.Description)
      //pantalla
      ruleta.append('Pantalla', this.ruleta.Pantalla)
      //ubicacion del elemento
      ruleta.append('ubicacion_del_elemento', this.ruleta.ubicacion_del_elemento)
      //fecha instalacion ruleta
      ruleta.append('fecha_instalaccion_ruleta', this.ruleta.fecha_instalaccion_ruleta)

      ruleta.append("certificado_de_importacion_ruleta", this.$refs.certificado_de_importacion_ruleta.files[0]);
      ruleta.append("fotografia_de_ruleta", this.$refs.fotografia_de_ruleta.files[0]);
      ruleta.append("Factura_compra_ruleta", this.$refs.Factura_compra_ruleta.files[0]);
      ruleta.append("serial_modelo_ruleta", this.$refs.serial_modelo_ruleta.files[0]);
      ruleta.append("fotografia_de_respaldo", this.$refs.fotografia_de_respaldo.files[0]);

      try {

        const rueltaResponse = await axios.get(`https://casino-tango-backend.onrender.com/api/ruletas/${this.ruleta.N_serial}`);
        const serial1Response = await axios.get(`https://casino-tango-backend.onrender.com/api/ruletas/${this.ruleta.N_serial_1}`);

        if (rueltaResponse.data) {
          Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "El número serial ya existe. No se puede volver a registrar.",
          });

        } else if (serial1Response.data) {
          Swal.fire({
            icon: "top-center",
            title: "Oops...",
            text: "El número1 serial ya existe. No se puede volver a registrar.",
          });
        }
        else {


          // Realiza la solicitud POST utilizando Axios
          const response = await axios.post("https://casino-tango-backend.onrender.com//api/ruletas", ruleta, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(response.data);
          console.log(this.ruleta);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Ruleta creada correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo registrar la ruleta correctamente. Por favor, llenar todos los datos.",
        });
      }
    },
  },

}
</script>

<style scoped >


main{
  background-color: rgb(60, 58, 58);

}
.main {
  position: relative;
  padding: 20px;
  width: 100%;
}




button {
  border:none
}

.img {
  animation: movimiento 2.5s linear infinite, shadow 3.5s infinite;
  height: 30em;
  border-radius: 30px;
}

@keyframes shadow {
  0% {
    filter: drop-shadow(10px 10px 20px rgb(149, 61, 226));
    /* Rojo */
  }

  20% {
    filter: drop-shadow(10px 10px 20px rgb(230, 98, 22));
    /* Verde */
  }

  25% {
    filter: drop-shadow(10px 10px 20px rgb(238, 19, 150));
    /* Verde */
  }

  30% {
    filter: drop-shadow(10px 10px 20px rgb(233, 235, 233));
    /* Verde */
  }

  50% {
    filter: drop-shadow(10px 10px 20px rgb(19, 238, 19));
    /* Verde */
  }

  55% {
    filter: drop-shadow(10px 10px 20px rgb(238, 143, 19));
    /* Verde */
  }

  100% {
    filter: drop-shadow(10px 10px 20px black);
  }
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
  color: #ef7e38;
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
  border-image: linear-gradient(to right,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%);
  border-image-slice: 1;
}

/* reset input */
.form__field {

  &:required,
  &:invalid {
    box-shadow: none;
  }
}

/*fin*/
.container {
  display: flex;
  justify-content: space-between;
  margin: 8%;

}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  .modal1 {
    flex-direction: column;
    align-items: center;
  }
}

/* modal */
.modal-header {
  background-color: #000000;
}

/*fin moadal*/

/* animacion de titulo */
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #3911c8 0%,
      #5404aa 29%,
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
}</style>