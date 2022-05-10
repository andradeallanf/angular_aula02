import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  grupo = new FormGroup({
    nome : new FormControl,
    idade : new FormControl,
    cidade : new FormControl
  });

  @Output() objetoFormulario = new EventEmitter();
  cadastrar(){
   this.objetoFormulario.emit(this.grupo.value)
  }

}
