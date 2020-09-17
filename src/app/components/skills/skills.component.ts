import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @ViewChild("chart", { static: true }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  skills = [];
  emptyColor = "#2e667e";

  constructor() {

    this.skills = [
      {
        series: [70],
        chart: {
          height: 300,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
            dataLabels: {
              name: {
                color: "#FFFFFF",     // color del titulo
                fontFamily: 'Roboto',   // letra del titulo
                fontWeight: 'bold',
              },
              value: {
                color: "#FFFFFF",     // color del porcentaje
                fontFamily: 'Roboto'
              },
            },
            track: {
              background: this.emptyColor,  // color vacio
            }
          }
        },
        fill: {
          opacity: 1.5,
          colors: ['#ffffff'],      // color del fondo lleno
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Javascript"]
      },
      {
        series: [60],
        chart: {
          height: 300,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
            dataLabels: {
              name: {
                color: "#FFFFFF",     // color del titulo
                fontFamily: 'Roboto',   // letra del titulo
                fontWeight: 'bold',
              },
              value: {
                color: "#FFFFFF",     // color del porcentaje
                fontFamily: 'Roboto'
              },
            },
            track: {
              background: this.emptyColor,  // color vacio
            }
          }
        },
        fill: {
          opacity: 1.5,
          colors: ['#ffffff'],      // color del fondo lleno
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Node.js"]
      },
      {
        series: [80],
        chart: {
          height: 300,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
            dataLabels: {
              name: {
                color: "#FFFFFF",     // color del titulo
                fontFamily: 'Roboto',   // letra del titulo
                fontWeight: 'bold',
              },
              value: {
                color: "#FFFFFF",     // color del porcentaje
                fontFamily: 'Roboto'
              },
            },
            track: {
              background: this.emptyColor,  // color vacio
            }
          }
        },
        fill: {
          opacity: 1.5,
          colors: ['#ffffff'],      // color del fondo lleno
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Angular"]
      }
    ]

    // Revisar >>
    // https://apexcharts.com/docs/options/plotoptions/radialbar/


    // this.chartOptions = {
    //   series: [70],
    //   chart: {
    //     height: 300,
    //     type: "radialBar"
    //   },
    //   plotOptions: {
    //     radialBar: {
    //       hollow: {
    //         size: "70%"
    //       }
    //     }
    //   },
    //   labels: ["Javascript"]
    // };
  }

  ngOnInit() {
  }

}
