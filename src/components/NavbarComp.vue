<template>
  <div class="container1">
  <nav>
    <ul>
      <li><router-link to="/crear">
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

  <section class="main" >

  </section>
  </div>
</template>

<script>
export default {
  name: "navbarComponent",
  methods: {
    descargarPDF() {
      // Replace the following URL with the direct link of the file on your server
      const enlaceDescarga = 'https://drive.google.com/drive/folders/1f0OgdkJl1_SpBD-68T_coG2GBBNT6O8q';

      // Create a temporary link to initiate the download
      const link = document.createElement('a');
      link.href = enlaceDescarga;
      link.target = '_blank'; // Open the link in a new tab if necessary
      link.download = 'ServidoresnWeb___8863e242ca542da___.pdf'; // Set the file name
      link.click();
    },
    salir() {
      // Code to handle logout
    }
  }
}
</script>

<style>



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


router-link:hover {
  background: #eee;
}

router-link:hover i {
  color: #34AF6D;
  transition: 0.5s;
}

/**/
.logout {
  position: absolute;
  bottom: 0;
}

.container1 {
  display: flex;  background-color:#D6D6D6;
}

main{
  background-color:#ADADAD;

}
.main {
  position: relative;
  padding: 20px;
  width: 100%;
}

</style>