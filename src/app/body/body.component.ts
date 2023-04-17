import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  
  breads: String = "BREADS";
  cakes: String = "CAKES";

  ngOnInit(): void {
  }

}
