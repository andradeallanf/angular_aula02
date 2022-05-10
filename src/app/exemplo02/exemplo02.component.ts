import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exemplo02',
  templateUrl: './exemplo02.component.html',
  styleUrls: ['./exemplo02.component.css']
})
export class Exemplo02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Objeto para manipular um elemento HTML
  texto = new FormControl();

}
