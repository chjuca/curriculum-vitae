import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = "Carlos Homero Juca Viteri"
  avatar = "https://avatars3.githubusercontent.com/u/38107744?s=400&u=3f2af7513ce3ef7784cba6f3b2ef0ab47835b27d&v=4"
  location = "Loja, Ecuador "
  dateOfBirth = "Septiembre 11, 1999"
  email = "chjuca@utpl.edu.ec"
  phone = "+593 97498206"

  constructor() {
  }

  ngOnInit() {
  }


}
