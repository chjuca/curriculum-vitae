import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = []

  constructor() {
    this.projects = [
      {
        image: "../../../assets/ascendere.png",
        title: "Laboratorio Ascendere | UTPL",
        description: "Desarrollo y mantenimiento a la página web ASCENDERE mediante tecnología Angular 9 y conexion a la Base de Datos Firebase",
        role: "Desarrollador Backend",
        time: "7/Abril/2020 - 5/Agosto/2021"
      },
      {
        image: "../../../assets/project-test.jpg",
        title: "Desarrollo Backend | ExmerDev",
        description: "Desarrollo y mantenimiento de microservicios en Spring Cloud, para la creacion de un CRM",
        role: "Pasante/ Desarrollador Backend",
        time: "Fecbro 2021 - Mayo 2021"
      },
      {
        image: "../../../assets/ascendere.png",
        title: "Laboratorio Ascendere | UTPL",
        description: "Desarrollo y mantenimiento a la página web ASCENDERE y desarrollo de Backend en Node.js para gestión de contenido para la unificación de los CMS en Angular 9",
        role: "Pasante Gestion Productiva",
        time: "7/Oct/2019 - presente",
        url: "https://web-sg-ascendere.firebaseapp.com/"
      },
    ]
  }

  ngOnInit() {
  }

}
