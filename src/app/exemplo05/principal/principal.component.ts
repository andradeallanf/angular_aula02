import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Vetor
  vetor:any[] =  [
    {'nome':'Allan',  'idade':26, 'cidade':'Gaspar'},
    {'nome':'Julia',  'idade':28, 'cidade':'Blumenau'},
    {'nome':'Brenda', 'idade':21, 'cidade':'Itajaí'},
    {'nome':'Pamela', 'idade':25, 'cidade':'Ilhota'},
  ];

  // Função para cadastrar um objeto no vetor
  cadastrarObjetoFormulario(obj:any){
    this.vetor.push(obj);
  }

}
