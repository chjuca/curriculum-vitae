import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quod quam dignissimos ullam vitae illo dolores consequatur enim qui corrupti, maxime ab dolore obcaecati cum voluptate nisi modi, fugit esse Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur maxime id facilis molestias totam reiciendis vel, magni asperiores accusamus odit perferendis optio eius nulla? Voluptate consectetur ut repellendus architecto eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet dicta exercitationem molestiae fuga odit labore ipsam est nobis cumque corrupti alias quos ratione cum illo debitis aliquid dolorum soluta."

  constructor() { }

  ngOnInit() {
  }

}
