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
              size: "60%"
            }
          }
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
              size: "60%"
            }
          }
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
              size: "60%"
            }
          }
        },
        labels: ["Angular"]
      }
    ]


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
