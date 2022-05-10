import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-exemplo04',
  templateUrl: './exemplo04.component.html',
  styleUrls: ['./exemplo04.component.css']
})
export class Exemplo04Component implements OnInit {

  constructor(private servico:RequisicaoService) { }

  // Ao carregar o componente
  ngOnInit(): void {
    this.listar();
  }

  // Vetor 
  vetor:any[] = [];

  // Função
  listar(){
    this.servico.obterDados()
    .subscribe(retorno => this.vetor = retorno);
  }
}
