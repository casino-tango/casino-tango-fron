<template>


  <!-- buscador -->

  <router-link to="/inicio"><i class="fa-solid fa-reply-all fa-lg">volver</i></router-link>

  <div v-if="filteredRuletas.length === 0 && filteredMaquinas.length == 0">
    <div class="hola">
      <div id="preloader_1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <!-- <input type="hidden" v-model="search" /> -->
  <div class="caja">
    <div class="input-wrapper">
      <input class="input-field" v-model="search" type="text"
        placeholder="Ingresa el número de serie o el numero de coljuegos" />
      <button class="btn-search" @click="buscador()">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>

  <!-- ruleta -->
  <div class="accordion accordion-flush" id="accordionFlushExample" v-for="ruleta in filteredRuletas" :key="ruleta.id">
    <h4 class="animate-charcter">RULETA</h4>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsenombre " aria-expanded="false" aria-controls="flush-collapsenombre">
          Nombre de ruleta
        </button>
      </h2>
      <div id="flush-collapsenombre" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.nombre_de_ruleta }}</div>
      </div>
    </div>



    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseN_modulos" aria-expanded="false" aria-controls="flush-collapseN_modulos">
          Número de modulos
        </button>
      </h2>
      <div id="flush-collapseN_modulos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_modulos }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseDescription" aria-expanded="false" aria-controls="flush-collapseDescription">
          Descripción de la ruleta
        </button>
      </h2>
      <div id="flush-collapseDescription" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Description }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsePantalla" aria-expanded="false" aria-controls="flush-collapsePantalla">
          Descripción de la Pantalla
        </button>
      </h2>
      <div id="flush-collapsePantalla" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Pantalla }}</div>
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
        <div class="accordion-body">{{ ruleta.ubicacion_del_elemento }}</div>
      </div>
    </div>


    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsefecha" aria-expanded="false" aria-controls="flush-collapsefecha">
          Fecha de instalación
        </button>
      </h2>
      <div id="flush-collapsefecha" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ formatDate(ruleta.fecha_instalaccion_ruleta) }}</div>
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
        <div class="accordion-body">{{ ruleta.N_serial }}</div>
      </div>
    </div>
    <!-- seriales -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial1" aria-expanded="false" aria-controls="flush-collapseserial1">
          Número serial_1
        </button>
      </h2>
      <div id="flush-collapseserial1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_1 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial2" aria-expanded="false" aria-controls="flush-collapseserial2">
          Número serial_2
        </button>
      </h2>
      <div id="flush-collapseserial2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_2 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial3" aria-expanded="false" aria-controls="flush-collapseserial3">
          Número serial_3
        </button>
      </h2>
      <div id="flush-collapseserial3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_3 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial4" aria-expanded="false" aria-controls="flush-collapseserial4">
          Número serial_4
        </button>
      </h2>
      <div id="flush-collapseserial4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_4 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial5" aria-expanded="false" aria-controls="flush-collapseserial5">
          Número serial_5
        </button>
      </h2>
      <div id="flush-collapseserial5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_5 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial6" aria-expanded="false" aria-controls="flush-collapseserial6">
          Número serial_6
        </button>
      </h2>
      <div id="flush-collapseserial6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_6 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial7" aria-expanded="false" aria-controls="flush-collapseserial7">
          Número serial_7
        </button>
      </h2>
      <div id="flush-collapseserial7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_7 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial8" aria-expanded="false" aria-controls="flush-collapseserial8">
          Número serial_8
        </button>
      </h2>
      <div id="flush-collapseserial8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_8 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial9" aria-expanded="false" aria-controls="flush-collapseserial9">
          Número serial_9
        </button>
      </h2>
      <div id="flush-collapseserial9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_9 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserial10" aria-expanded="false" aria-controls="flush-collapseserial10">
          Número serial_10
        </button>
      </h2>
      <div id="flush-collapseserial10" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_serial_10 }}</div>
      </div>
    </div>
    <!-- COLJUGOS -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos" aria-expanded="false" aria-controls="flush-collapsecoljuegos">
          Número unico de coljuegos 1
        </button>
      </h2>
      <div id="flush-collapsecoljuegos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_1 }}</div>
      </div>
    </div>


    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos2" aria-expanded="false" aria-controls="flush-collapsecoljuegos2">
          Número unico de coljuegos 2
        </button>
      </h2>
      <div id="flush-collapsecoljuegos2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_2 }}</div>
      </div>
    </div>


    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos3" aria-expanded="false" aria-controls="flush-collapsecoljuegos3">
          Número unico de coljuegos 3
        </button>
      </h2>
      <div id="flush-collapsecoljuegos3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_3 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos4" aria-expanded="false" aria-controls="flush-collapsecoljuegos4">
          Número unico de coljuegos 4
        </button>
      </h2>
      <div id="flush-collapsecoljuegos4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_4 }}</div>
      </div>
    </div>


    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos5" aria-expanded="false" aria-controls="flush-collapsecoljuegos5">
          Número unico de coljuegos 5
        </button>
      </h2>
      <div id="flush-collapsecoljuegos5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_5 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos6" aria-expanded="false" aria-controls="flush-collapsecoljuegos6">
          Número unico de coljuegos 6
        </button>
      </h2>
      <div id="flush-collapsecoljuegos6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_6 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos7" aria-expanded="false" aria-controls="flush-collapsecoljuegos7">
          Número unico de coljuegos 7
        </button>
      </h2>
      <div id="flush-collapsecoljuegos7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_7 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos8" aria-expanded="false" aria-controls="flush-collapsecoljuegos8">
          Número unico de coljuegos 8
        </button>
      </h2>
      <div id="flush-collapsecoljuegos8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_8 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos9" aria-expanded="false" aria-controls="flush-collapsecoljuegos9">
          Número unico de coljuegos 9
        </button>
      </h2>
      <div id="flush-collapsecoljuegos9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_9 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos10" aria-expanded="false" aria-controls="flush-collapsecoljuegos10">
          Número unico de coljuegos 10
        </button>
      </h2>
      <div id="flush-collapsecoljuegos10" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.Nuc_10 }}</div>
      </div>
    </div>
    <!-- billeteros -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero1" aria-expanded="false" aria-controls="flush-collapsebilletero1">
          Número de billeteros 1
        </button>
      </h2>
      <div id="flush-collapsebilletero1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_1 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero2" aria-expanded="false" aria-controls="flush-collapsebilletero2">
          Número de billeteros 2
        </button>
      </h2>
      <div id="flush-collapsebilletero2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_2 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero3" aria-expanded="false" aria-controls="flush-collapsebilletero3">
          Número de billeteros 3
        </button>
      </h2>
      <div id="flush-collapsebilletero3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_3 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero4" aria-expanded="false" aria-controls="flush-collapsebilletero4">
          Número de billeteros 4
        </button>
      </h2>
      <div id="flush-collapsebilletero4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_4 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero5" aria-expanded="false" aria-controls="flush-collapsebilletero5">
          Número de billeteros 5
        </button>
      </h2>
      <div id="flush-collapsebilletero5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_5 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero6" aria-expanded="false" aria-controls="flush-collapsebilletero6">
          Número de billeteros 6
        </button>
      </h2>
      <div id="flush-collapsebilletero6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_6 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero7" aria-expanded="false" aria-controls="flush-collapsebilletero7">
          Número de billeteros 7
        </button>
      </h2>
      <div id="flush-collapsebilletero7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_7 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero8" aria-expanded="false" aria-controls="flush-collapsebilletero8">
          Número de billeteros 8
        </button>
      </h2>
      <div id="flush-collapsebilletero8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_8 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero9" aria-expanded="false" aria-controls="flush-collapsebilletero9">
          Número de billeteros 9
        </button>
      </h2>
      <div id="flush-collapsebilletero9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_9 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsebilletero10" aria-expanded="false" aria-controls="flush-collapsebilletero10">
          Número de billeteros 10
        </button>
      </h2>
      <div id="flush-collapsebilletero10" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_billetero_10 }}</div>
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
        <div class="accordion-body">{{ ruleta.N_stacker_1 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker2" aria-expanded="false" aria-controls="flush-collapsestacker2">
          Número de stacker 2
        </button>
      </h2>
      <div id="flush-collapsestacker2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_2 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker3" aria-expanded="false" aria-controls="flush-collapsestacker3">
          Número de stacker 3
        </button>
      </h2>
      <div id="flush-collapsestacker3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_3 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker4" aria-expanded="false" aria-controls="flush-collapsestacker4">
          Número de stacker 4
        </button>
      </h2>
      <div id="flush-collapsestacker4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_4 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker5" aria-expanded="false" aria-controls="flush-collapsestacker5">
          Número de stacker 5
        </button>
      </h2>
      <div id="flush-collapsestacker5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_5 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker6" aria-expanded="false" aria-controls="flush-collapsestacker6">
          Número de stacker 6
        </button>
      </h2>
      <div id="flush-collapsestacker6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_6 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker7" aria-expanded="false" aria-controls="flush-collapsestacker7">
          Número de stacker 7
        </button>
      </h2>
      <div id="flush-collapsestacker7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_7 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker8" aria-expanded="false" aria-controls="flush-collapsestacker8">
          Número de stacker 8
        </button>
      </h2>
      <div id="flush-collapsestacker8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_8 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker9" aria-expanded="false" aria-controls="flush-collapsestacker9">
          Número de stacker 9
        </button>
      </h2>
      <div id="flush-collapsestacker9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_9 }}</div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsestacker10   " aria-expanded="false" aria-controls="flush-collapsestacker10">
          Número de stacker 10
        </button>
      </h2>
      <div id="flush-collapsestacker10" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ ruleta.N_stacker_10 }}</div>
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
          <!-- <img :src="imagenUrl(ruleta.fotografia_de_ruleta)" id="specific-img4"> -->
          <img :src="imagenUrl(ruleta.fotografia_de_ruleta)" id="specific-img1">
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          fotografía de el serial y modelo
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><img :src="imagenUrl(ruleta.serial_modelo_ruleta)" id="specific-img2"></div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecertificado_de_importacion_ruleta" aria-expanded="false"
          aria-controls="flush-collapsecertificado_de_importacion_ruleta">
          Certificado de importaciÓn
        </button>
      </h2>
      <div id="flush-collapsecertificado_de_importacion_ruleta" class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><img :src="imagenUrl(ruleta.certificado_de_importacion_ruleta)" id="specific-img3">
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecompra" aria-expanded="false" aria-controls="flush-collapsecompra">
          Factura de compra de la ruleta
        </button>
      </h2>
      <div id="flush-collapsecompra" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">

          <img :src="imagenUrl(ruleta.Factura_compra_ruleta)" id="specific-img4" alt="Factura de compra">

        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecompra1" aria-expanded="false" aria-controls="flush-collapsecompra1">
          Este apartado contiene las captura se agregaron de mas peude contener seriales o importaciones
        </button>
      </h2>
      <div id="flush-collapsecompra1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <!-- <img :src="imagenUrl(ruleta.Factura_compra_ruleta)" id="specific-image"> -->
          <img :src="imagenUrl(ruleta.fotografia_de_respaldo)" id="specific-img5" alt="Factura de compra">

        </div>
      </div>
    </div>
    <input id="image-size" class="texture" type="range" min="10" v-model="imageruleta" max="1700">

    <!-- <button @click="descargarPDF">Descargar PDF de las img</button> -->
  </div>

  <!-- maquina -->
  <div class="accordion accordion-flush" id="accordionFlushExample" v-for="maquina in filteredMaquinas" :key="maquina.id">
    <h4 class="animate-charcter">Maquina</h4>

    <!-- numero serial maquina -->

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseserie" aria-expanded="false" aria-controls="flush-collapseserie">
          Número de serial
        </button>
      </h2>
      <div id="flush-collapseserie" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_serial }}</div>
      </div>
    </div>


    <!--numero de coljuegos  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecoljuegos" aria-expanded="false" aria-controls="flush-collapsecoljuegos">
          Número unico de coljuegos
        </button>
      </h2>
      <div id="flush-collapsecoljuegos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_unico_coljuegos }}</div>
      </div>
    </div>
    <!--billetero  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsBILLETE" aria-expanded="false" aria-controls="flush-collapsBILLETE">
          Número de billtero
        </button>
      </h2>
      <div id="flush-collapsBILLETE" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_billetero }}</div>
      </div>
    </div>
    <!-- nombre de la maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsenombre_maquina " aria-expanded="false"
          aria-controls="flush-collapsenombre_maquina">
          Nombre de maquina
        </button>
      </h2>
      <div id="flush-collapsenombre_maquina" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.nombre_de_maquina }}</div>
      </div>
    </div>
    <!-- numero interno de la maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemaquinai" aria-expanded="false" aria-controls="flush-collapsemaquinai">
          Número interno de maquina
        </button>
      </h2>
      <div id="flush-collapsemaquinai" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_interno_maquina }}</div>
      </div>
    </div>
    <!--numero serial de pantalla inferior   -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemaquinap" aria-expanded="false" aria-controls="flush-collapsemaquinap">
          Número serial de pantalla superior
        </button>
      </h2>
      <div id="flush-collapsemaquinap" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_serial_pantalla_superior }}</div>
      </div>
    </div>
    <!--numero serial de pantalla inferior   -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemaquina" aria-expanded="false" aria-controls="flush-collapsemaquina">
          Número serial de pantalla inferior
        </button>
      </h2>
      <div id="flush-collapsemaquina" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_serial_pantalla_inferior }}</div>
      </div>
    </div>
    <!--marca de la pantalla maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemarca" aria-expanded="false" aria-controls="flush-collapsemarca">
          Marca de la pantalla maquina
        </button>
      </h2>
      <div id="flush-collapsemarca" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Marca_pantalla }}</div>
      </div>
    </div>
    <!--marca de la maquina  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemarca1" aria-expanded="false" aria-controls="flush-collapsemarca1">
          Marca de la maquina
        </button>
      </h2>
      <div id="flush-collapsemarca1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Marca_maquina }}</div>
      </div>
    </div>
    <!--serial de la  cpu -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsecpu" aria-expanded="false" aria-controls="flush-collapsecpu">
          Número de la cpu
        </button>
      </h2>
      <div id="flush-collapsecpu" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.Numero_cpu }}</div>
      </div>
    </div>
    <!-- ubicacion de la maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseubicacion" aria-expanded="false" aria-controls="flush-collapseubicacion">
          Ubicacion del maquina
        </button>
      </h2>
      <div id="flush-collapseubicacion" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.ubicacion_de_la_maquina }}</div>
      </div>
    </div>
    <!-- libreria de la maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapselibreria" aria-expanded="false" aria-controls="flush-collapselibreria">
          libreria de la maquina
        </button>
      </h2>
      <div id="flush-collapselibreria" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.libreria_maquina }}</div>
      </div>
    </div>
    <!-- cantidad de juegos -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsejuegos" aria-expanded="false" aria-controls="flush-collapsejuegos">
          cantidad de juegos
        </button>
      </h2>
      <div id="flush-collapsejuegos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.cantidad_de_juegos }}</div>
      </div>
    </div>
    <!-- marca de los billetero -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsemarcabilleteros" aria-expanded="false"
          aria-controls="flush-collapsemarcabilleteros">
          Marca del billetero
        </button>
      </h2>
      <div id="flush-collapsemarcabilleteros" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.marca_billetero }}</div>
      </div>
    </div>
    <!-- lista de juegos-->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapselistajuegos" aria-expanded="false" aria-controls="flush-collapselistajuegos">
          lista de juegos
        </button>
      </h2>
      <div id="flush-collapselistajuegos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.lista_de_juegos }}</div>
      </div>
    </div>
    <!-- DESCRICION DE LA MAQUIA -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsedescription" aria-expanded="false" aria-controls="flush-collapsedescription">
          Descripcion de los compenentes modificados
        </button>
      </h2>
      <div id="flush-collapsedescription" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ maquina.descripcion_maquina }}</div>
      </div>
    </div>
    <!-- FECHA INSTALACION DE LA MAQUINA -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsfechainstalacion" aria-expanded="false"
          aria-controls="flush-collapsfechainstalacion">
          Fecha de instalación
        </button>
      </h2>
      <div id="flush-collapsfechainstalacion" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ formatDate(maquina.fecha_instalaccion) }}</div>
      </div>
    </div>
    <!-- FCEHA DE MODIFICASIOND DE COMPONENTES  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsfechainstalacion1" aria-expanded="false"
          aria-controls="flush-collapsfechainstalacion1">
          Fecha de cambios de componentes
        </button>
      </h2>
      <div id="flush-collapsfechainstalacion1" class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ formatDate(maquina.fecha_modificacion) }}</div>
      </div>
    </div>
    <!-- otros datos -->
    <!-- FOTOGRAFIA DE BILLETERO -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsbilletero" aria-expanded="false" aria-controls="flush-collapsbilletero">
          Fotografía del billetero
        </button>
      </h2>
      <div id="flush-collapsbilletero" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_billetero)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía del serial de la maquina -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapscompras" aria-expanded="false" aria-controls="flush-collapscompras">
          Fotografía del serial de la maquina
        </button>
      </h2>
      <div id="flush-collapscompras" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_serial_maquina)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía de la pantalla superior -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapspantalla" aria-expanded="false" aria-controls="flush-collapspantalla">
          Fotografía de la pantalla superior
        </button>
      </h2>
      <div id="flush-collapspantalla" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_de_pantalla_superior)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!-- fotografia de la pantalla inferior -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapspantallainferior" aria-expanded="false"
          aria-controls="flush-collapspantallainferior">
          Fotografía de la pantalla inferior
        </button>
      </h2>
      <div id="flush-collapspantallainferior" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_de_pantalla_superior)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía de la placa  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsplaca" aria-expanded="false" aria-controls="flush-collapsplaca">
          Fotografía de la placa
        </button>
      </h2>
      <div id="flush-collapsplaca" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_placa)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía de la maquina  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsfotito" aria-expanded="false" aria-controls="flush-collapsfotito">
          Fotografía de la maquina
        </button>
      </h2>
      <div id="flush-collapsfotito" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_maquina)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía de la Libreria  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsfotitolibreria" aria-expanded="false" aria-controls="flush-collapsfotitolibreria">
          Fotografía de la Libreria
        </button>
      </h2>
      <div id="flush-collapsfotitolibreria" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_libreria)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía de la factura de compra  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapbuy" aria-expanded="false" aria-controls="flush-collapbuy">
          Fotografía de la factura de compra
        </button>
      </h2>
      <div id="flush-collapbuy" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_compra_maquina)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía del certificado de importacion  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapimprt" aria-expanded="false" aria-controls="flush-collapimprt">
          Fotografía del certificado de importacion maquina
        </button>
      </h2>
      <div id="flush-collapimprt" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_importacion_maquina)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía del certificado de importacion billetero  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapimprtbilletero" aria-expanded="false" aria-controls="flush-collapimprtbilletero">
          Fotografía del certificado de importacion billetero
        </button>
      </h2>
      <div id="flush-collapimprtbilletero" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_importacion_billetero)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!-- Fotografía del certificado impotacion de pantallas-->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapimprtpantalla" aria-expanded="false" aria-controls="flush-collapimprtpantalla">
          Fotografía del certificado impotacion de pantallas
        </button>
      </h2>
      <div id="flush-collapimprtpantalla" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_importacion_pantallas)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--fotografia_la_serial_pantallas  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsrtpantalla" aria-expanded="false" aria-controls="flush-collapsrtpantalla">
          Fotografía del certificado serial  de pantallas
        </button>
      </h2>
      <div id="flush-collapsrtpantalla" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_serial_pantallas)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía del certificado importacion de la cpu  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsimporcpu" aria-expanded="false" aria-controls="flush-collapsimporcpu">
          Fotografía del certificado importacion de la cpu
        </button>
      </h2>
      <div id="flush-collapsimporcpu" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_importacion_cpu)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>
    <!--Fotografía del certificado serila de la cpu  -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapsrcpu" aria-expanded="false" aria-controls="flush-collapsrcpu">
          Fotografía del certificado serila de la cpu
        </button>
      </h2>
      <div id="flush-collapsrcpu" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <img v-if="maquina.fotografia && maquina.fotografia.length > 0"
            :src="imagenUrl(maquina.fotografia[0].fotografia_la_serial_cpu)" alt="Fotografía de la máquina">
        </div>
      </div>
    </div>



    <input id="image-size" class="texture" type="range" min="10" v-model="imagemaquina" max="1700">
    <!-- <input id="image-size1" class="texture" type="range" min="10" v-model="imageruleta" max="1700"> -->

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
  components: {

  },
  data() {
    return {
      isDashboardOpen: false,
      isDarkMode: false,
      Numero_serial: '',
      maquinas: [],
      ruletas: [],
      search: '',
      searchResults: [[], []], // Almacenar resultados de ambas API
      filteredMaquinas: [],
      filteredMaquinaspoker: [],
      filteredRuletas: [],
      filteredMaquinasnaisword: [],
      filteredMaquinasfranco: [],
      franco: [],
      imagemaquina: 1,
      imageruleta: 1,
      isLoading: false,

    };
  },
  mounted() {
    this.getruletas();
    this.getmaquinas();
    this.getmaquinaspoker();
    this.buscador();
    this.changeImagemaquina();
    this.changeImageruleta();
    this.getmaquinasains();
    this.getmaquinafranco()


 

    
  },
  methods: {

    formatDate(dateString) {
  try {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
      timeZone: 'America/Bogota', // Ajuste para el horario colombiano
    };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  } catch (error) {
    console.error('Error formatting date:', error.message);
    return null; // o puedes lanzar el error si prefieres manejarlo en otro lugar
  }
},

    descargarPDF() {
      // Reemplaza la siguiente URL con el enlace directo del archivo en tu servidor
      const enlaceDescarga = 'https://drive.google.com/drive/folders/1f0OgdkJl1_SpBD-68T_coG2GBBNT6O8q';
      // Crea un enlace temporal para iniciar la descarga
      const link = document.createElement('a');
      link.href = enlaceDescarga;
      link.target = '_blank'; // Abre el enlace en una nueva pestaña si es necesario

      link.click();
    },

    async buscador() {
      try {
        this.isLoading = true; // Set isLoading to true before making the API call

        const response1 = await axios.get(`https://casino-tango-backend.onrender.com/api/maquinas/${this.search}`);
        const response2 = await axios.get(`http://localhost:3000/api/ruletas/${this.search}`);

        const response3 = await axios.get(`https://casino-tango-backend.onrender.com/api/maquinass/${this.search}`);
        
        const response5 = await axios.get(`https://casino-tango-backend.onrender.com/maquinaspoker/${this.search}`);
        const response6 = await axios.get(`http://localhost:3000/api/maquinasspoker/${this.search}`);

        const response7 = await axios.get(`https://casino-tango-backend.onrender.com//api/maquinasainsword/${this.search}`);
        const response8 = await axios.get(`http://localhost:3000/api/maquinassainsword/${this.search}`);

        const response9 = await axios.get(`https://casino-tango-backend.onrender.com/api/maquinasfranco/${this.search}`);
        const response10 = await axios.get(`https://casino-tango-backend.onrender.com/api/maquinassfranco/${this.search}`);

        // Filter data based on N_serial or Nuc
        console.log(response1.data);
        console.log(response2.data);
        console.log(response3.data);
        console.log(response5.data);
        console.log(response6.data);
        console.log(response7.data);
        console.log(response8.data);
        console.log(response9.data);
        console.log(response10.data);


        this.filteredMaquinas = this.maquinas.filter(maquina => {
          return maquina.Numero_serial === this.search 
        });

        this.filteredRuletas = this.ruletas.filter(ruleta => {
          return ruleta.Numero_serial === this.search 
        });

      } catch (error) {
        console.log(error);
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
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.error("Error al cerrar sesión: La solicitud no fue exitosa");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'sesión  cerrada correctamente',
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
      } 
    },

    async getruletas() {
      try {
        const response = await axios.get("http://localhost:3000/api/ruletas",);
        this.ruletas = response.data;
        console.log(response.data);
        this.filteredMaquinas = this.maquinas.filter((maquina) => maquina.N_serial === this.N_serial);
      } catch (error) {
        console.error(error);
      }
    },

    async getmaquinas() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinas",);
        this.maquinas = response.data;
        console.log(response.data);
        this.filteredRuletas = this.ruletas.filter((ruleta) => ruleta.Numero_serial === this.Numero_serial);
      } catch (error) {
        console.error(error);
      }
    },

    async getmaquinasains() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinasainsword",);
        this.maquinasains = response.data;
        console.log(response.data);
        this.filteredRuletas = this.ruletas.filter((ruleta) => ruleta.N_serial === this.N_serial);
      } catch (error) {
        console.error(error);
      }
    },

    async getmaquinaspoker() {
      try {
        const response = await axios.get("http://localhost:3000/api/maquinaspoker",);
        this.maquinaspoker = response.data;
        console.log(response.data);
        this.filteredRuletas = this.ruletas.filter((ruleta) => ruleta.N_serial === this.N_serial);
      } catch (error) {
        console.error(error);
      }
    },
    async getmaquinafranco() {
      try {
        const response = await axios.get('http://localhost:3000/api/maquinasfranco')
        this.franco = response.data
      } catch (error) {
        console.log(error);
      }
    },

    imagenUrl(imagen) {
      try {
        if (imagen && imagen.data) {
          const imageBuffer = new Uint8Array(imagen.data);

          // Usar btoa para convertir a base64 en el entorno del navegador
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
            }
            // Puedes agregar más extensiones y tipos MIME según tus necesidades
          }

          // Comprobar si la imagen es grande
          const MAX_IMAGE_SIZE = 580 * 1024 * 1024; // Por ejemplo, 10 MB

          if (imageBuffer.length > MAX_IMAGE_SIZE) {
            console.warn('Imagen demasiado grande');
            return [];
          }

          return [`data:${mimeType};base64,${base64Image}`];
        }
      } catch (error) {
        console.log('Error al procesar la imagen:', error);
      }
      return []; // En caso de errores o datos de imagen no válidos
    },

    changeImagemaquina() {
      const width = `${this.imagemaquina}px`;
      const specificImage = document.getElementById("specific-imge"); // Target the specific image by its id
      const specificImage1 = document.getElementById("specific-image1"); // Target the specific image by its id
      const specificImage2 = document.getElementById("specific-image2"); // Target the specific image by its id
      const specificImage3 = document.getElementById("specific-image3"); // Target the specific image by its id
      const specificImage4 = document.getElementById("specific-image4"); // Target the specific image by its id
      const specificImage5 = document.getElementById("specific-image5"); // Target the specific image by its id
      const specificImage6 = document.getElementById("specific-image6"); // Target the specific image by its id
      const specificImage7 = document.getElementById("specific-image7"); // Target the specific image by its id
      const specificImage8 = document.getElementById("specific-image8"); // Target the specific image by its id
      const specificImage9 = document.getElementById("specific-image9"); // Target the specific image by its id
      const specificImage10 = document.getElementById("specific-image10"); // Target the specific image by its id
      const specificImage11 = document.getElementById("specific-image11"); // Target the specific image by its id
      const specificImage12 = document.getElementById("specific-image12"); // Target the specific image by its id
      if (specificImage) {
        specificImage.style.width = width;
      }
      if (specificImage1) {
        specificImage1.style.width = width;
      }
      if (specificImage2) {
        specificImage2.style.width = width;
      }
      if (specificImage3) {
        specificImage3.style.width = width;
      }
      if (specificImage4) {
        specificImage4.style.width = width;
      }
      if (specificImage5) {
        specificImage5.style.width = width;
      }
      if (specificImage6) {
        specificImage6.style.width = width;
      }
      if (specificImage7) {
        specificImage7.style.width = width;
      }
      if (specificImage8) {
        specificImage8.style.width = width;
      }
      if (specificImage9) {
        specificImage9.style.width = width;
      }
      if (specificImage10) {
        specificImage10.style.width = width;
      }
      if (specificImage11) {
        specificImage11.style.width = width;
      }
      if (specificImage12) {
        specificImage12.style.width = width;
      }
    },

    changeImageruleta() {
      const width = `${this.imageruleta}px`;
      const specificImg = document.getElementById("specific-image"); // Target the specific image by its id
      const specificImg1 = document.getElementById("specific-img1"); // Target the specific image by its id
      const specificImg2 = document.getElementById("specific-img2"); // Target the specific image by its id
      const specificImg3 = document.getElementById("specific-img3"); // Target the specific image by its id
      const specificImg4 = document.getElementById("specific-img4"); // Target the specific image by its id

      const specificImg5 = document.getElementById("specific-image5"); // Target the specific image by its id

      if (specificImg) {
        specificImg.style.width = width;
      }
      if (specificImg1) {
        specificImg1.style.width = width;
      }
      if (specificImg2) {
        specificImg2.style.width = width;
      }
      if (specificImg3) {
        specificImg3.style.width = width;
      }
      if (specificImg4) {
        specificImg4.style.width = width;
      }
      if (specificImg5) {
        specificImg5.style.width = width;
      }
    },
  },
  watch: {
    imagemaquina: "changeImagemaquina",
    imageruleta: "changeImageruleta", // Watch for changes in imageSize
  },
};
</script>

<style scoped >
#preloader_1 {
  position: relative;
}

#preloader_1 span {
  display: block;
  bottom: 0px;
  width: 9px;
  height: 5px;
  background: #9b59b6;
  position: absolute;
  animation: preloader_1 1.5s infinite ease-in-out;
}

#preloader_1 span:nth-child(2) {
  left: 11px;
  animation-delay: .2s;
}

#preloader_1 span:nth-child(3) {
  left: 22px;
  animation-delay: .4s;
}

#preloader_1 span:nth-child(4) {
  left: 33px;
  animation-delay: .6s;
}

#preloader_1 span:nth-child(5) {
  left: 44px;
  animation-delay: .8s;
}

@keyframes preloader_1 {
  0% {
    height: 5px;
    transform: translateY(0px);
    background: #231557;
  }

  25% {
    height: 30px;
    transform: translateY(15px);
    background: #3498db;
  }

  50% {
    height: 5px;
    transform: translateY(0px);
    background: #ff1361;
  }

  100% {
    height: 5px;
    transform: translateY(0px);
    background: #44107a;
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

.hola {
  display: flex;
  justify-content: center;
}

/* fin craga */
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
}

.card-front {
  z-index: 1;
}

.card-back {
  z-index: 2;

}

/* fin card */
.placeholder {
  font-size: 10px;
  color: #1a1818;
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

/* fin titulo */
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

.table-container1 {
  overflow-x: auto;
  max-width: 100%;
}

.nombre {
  display: flex;
  justify-content: center;
}

.card {
  position: relative;
  display: inline-block;
  margin-right: 50%px;
  margin-bottom: 50px;
}

.card-text {
  display: flex;
  justify-content: start;
}


.card-front {
  z-index: 1;
  /* Lower z-index to be behind card-back */
}

.card-back {
  z-index: 2;
  /* Higher z-index to be in front of card-front */
}


.caja {
  max-width: 20px;
  margin: 20px auto 0;
  padding: 10px;

  transform: translate(10%, 10%);
}

/* Input */
/* Container Styles */
.caja {
  display: inline-block;
  /* Add other container styles here */
}

/* Input Wrapper Styles */



.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Search Input Styles */
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
  /* Existing styles for placeholder */

}

/* Search Button Styles */


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
  transform: translateX(10%) scale(1.05);
}

.caja:hover .input-field {
  width: 400px;
  border-color: #fff800;
}

.caja:hover .btn-search {
  transform: rotate(350deg);
}


/*  */
@keyframes loading {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.wrapper {
  border: 3px solid var(--color-opposite);
  padding: 4px;
  width: 160px;
  height: 16px;
}

.space {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.loading {
  position: absolute;
  background-color: #FF0000;
  /* Red background color */
  color: var(--color-opposite);
  /* Text color as --color-opposite variable */
  width: 100%;
  height: 100%;
  animation: loading 5s steps(40) infinite;
}

/* Style for the custom loading within vue-loading-overlay */
.custom-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>