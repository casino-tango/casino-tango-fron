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
    <section class="main">
    <div class="img">
      <img src="../assets/logo-unicasinos.png" alt="" height="80">
      <h1> <span class="nav-item animate-charcter">Casino Tango</span></h1>
      <img src="../assets/logo2.jpg" alt="" height="80">
    </div>

  <div class="grafica" >
    <div id="chart1">
      <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div id="chart2">
      <apexchart type="radialBar" height="350" :options="chartOptions1" :series="series1"></apexchart>
    </div>
  </div>

  <div class="grafica" >
    <div id="chart1">
      <apexchart type="radialBar" height="350" :options="chartOptions2" :series="series2"></apexchart>
    </div>
    <div id="chart2">
      <apexchart type="radialBar" height="350" :options="chartOptions3" :series="series3"></apexchart>
    </div>
  </div>
</section>
</div>


</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import axios from 'axios';

export default {
  name: 'GraficaComp',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [], // Inicializa la serie como un arreglo vacío
      series1: [], // Inicializa la serie como un arreglo vacío
      series2: [], // Inicializa la serie como un arreglo vacío
      series3: [], // Inicializa la serie como un arreglo vacío

      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
   
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#ADADAD',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#003B4A',
                fontSize: '17px'
              },
              value: {
                formatter: val => parseInt(val),
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [' Campanario Casino Tango'],
      },
      chartOptions1: {
        chart: {
          height: 350,
          type: 'radialBar',
  
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: val => parseInt(val),
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [' Terraplaza Casino Tango'],
      },
      chartOptions2: {
        chart: {
          height: 350,
          type: 'radialBar',
       
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: val => parseInt(val),
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Pasto Casino Tango'],
      },
      chartOptions3: {
        chart: {
          height: 350,
          type: 'radialBar',
    
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: val => parseInt(val),
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [' Ipiales Casino Tango'],
      },

    };
  },
  mounted() {
    this.fetchDataFromAPI();
    this.fetchDataFromAPI1();
    this.fetchDataFromAPI2();
    this.fetchDataFromAPI3();
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await axios.get('http://localhost:3000/api/maquina/Popayán Centro Comercial Campanario Casino Tango');
        this.series = [response.data.length]; // Actualiza la serie con la cantidad de datos recibidos
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    },

    async fetchDataFromAPI1() {
      try {
        const response = await axios.get('http://localhost:3000/api/maquina/Popayán Centro Comercial Terraplaza Casino Tango');
        this.series1 = [response.data.length]
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    },
    async fetchDataFromAPI2() {
      try {
        const response = await axios.get('http://localhost:3000/api/maquina/Pasto Parque Infantil Casino Tango');
        this.series2 = [response.data.length]
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    },

    async fetchDataFromAPI3() {
      try {
        const response = await axios.get('http://localhost:3000/api/maquina/Ipiales Casino Tango');
        this.series3 = [response.data.length]
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    },


  },
};
</script>
<style scoped>

.grafica{
  display: flex;
  justify-content: space-around;
}

main{
  background-color: rgb(60, 58, 58);

}
.main {
  position: relative;
  padding: 20px;
  width: 100%;
}

.title{
  display: flex;
  justify-content: center;
  color: aliceblue;
}







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
  display: flex;
  background-color: rgb(71, 69, 69);

}
</style>