import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exemplo03',
  templateUrl: './exemplo03.component.html',
  styleUrls: ['./exemplo03.component.css']
})
export class Exemplo03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // Agrupar elementos do formulário
  grupo = new FormGroup({
    nome : new FormControl,
    idade : new FormControl
  });

}
