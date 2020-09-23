import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  description = "Soy una persona que está acostumbrada al trabajo en equipo y  bajo presión. Hasta la actualidad me he formado por mi cuenta en Backend y Frontend, aun que considero que tengo mas conocimientos y gusto por el Backend. \nTambién considero que tengo cualidades resolutivas, con un buen  ánimo y capaz de resolver problemas dentro del entorno en el que me encuentre."
  hobby = "En mi tiempo libre me gusta aprender sobre nuevas tecnologías e investigar temas interesantes de conspiraciones";

  constructor() { }

  ngOnInit() {
  }

}
