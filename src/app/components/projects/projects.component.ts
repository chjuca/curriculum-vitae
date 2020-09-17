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
        image: "../../../assets/project-test-2.jpg",
        title: "Lorem ipsum | Dolor Sit",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi culpa tenetur molestiae provident voluptatibus minima? Itaque asperiores aliquid deleniti officiis dolorum qui laudantium quae corrupti accusantium autem, laborum sint",
        role: "Amet consectetur adipisicing elit",
        time: "Abril 2018 - Agosto 2019"
      },
      {
        image: "../../../assets/project-test.jpg",
        title: "Officia modi culpa tenetur | Amet consectetu",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi culpa tenetur molestiae provident voluptatibus minima? Itaque asperiores aliquid deleniti officiis dolorum qui laudantium quae corrupti accusantium autem, laborum sint",
        role: "Pasante Gestion Productiva",
        time: "Agosto 2012 - Abril 2020"
      },
      {
        image: "../../../assets/ascendere.png",
        title: "Laboratorio Ascendere | UTPL",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi culpa tenetur molestiae provident voluptatibus minima? Itaque asperiores aliquid deleniti officiis dolorum qui laudantium quae corrupti accusantium autem, laborum sint",
        role: "Pasante Gestion Productiva",
        time: "Abril 2019 - presente",
        url: "https://web-sg-ascendere.firebaseapp.com/"
      },
    ]
  }

  ngOnInit() {
  }

}
