import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {

 @Input() clientes: Array<any> ;
 @Output() retornoClientes = new EventEmitter<any>();


 valor = 10;
  constructor() { }

  ngOnInit() {
  }

}
