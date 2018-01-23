import { Component, ViewChild } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { GraficasProvider } from '../../providers/graficas/graficas';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-grafica',
  templateUrl: 'grafica.html'
})
export class GraficaPage {
  datos: any;
  myJSON: string = "";

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
 
  barChart: any;
  lineChart: any;
  

  constructor(public navCtrl: NavController, public servicio: GraficasProvider) {

  }

  ionViewDidLoad() {
    this.cogerDatos();
  }

  cogerDatos(){
    this.servicio.getGrafica().subscribe(
      (data) => {
        
        //this.datos = data.datasets.data;
        //this.datos = data.dataset.data;

        this.myJSON = JSON.stringify(data);
        console.log(data);
        this.mostrarDatosBarras();
        this.mostrarDatosLineas();
      },
      (error)=>{
          console.error(error);
      }
    )
  }

  mostrarDatosBarras() {

    var etiquetasAVer = [];
    var datosAVer = [];
    for(var i = 0 ; i < 100; i++){
      var registro = this.datos[i];
      etiquetasAVer.push(registro[0]);
      datosAVer.push(registro[1]);
    }

    var json = {
      type: 'bar',
      data: {
        labels: etiquetasAVer,
        datasets: [{
          label: '# of Votes',
          data: datosAVer,
          backgroundColor: 'green',
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          // borderColor: [
          //   'rgba(255,99,132,1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };

    this.barChart = new Chart(this.barCanvas.nativeElement, json);
  }

  mostrarDatosLineas(){
    var etiquetasAVer = [];
    var datosAVer = [];
    for(var i = 0 ; i < 100; i++){
      var registro = this.datos[i];
      etiquetasAVer.push(registro[0]);
      datosAVer.push(registro[1]);
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: etiquetasAVer,
          datasets: [
              {
                  label: "My First dataset",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: datosAVer,
                  spanGaps: false,
              }
          ]
      }

  });
  }
}
