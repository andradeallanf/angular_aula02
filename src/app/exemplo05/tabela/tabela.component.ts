import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Vetor
  @Input() dados:any[] = [];

}