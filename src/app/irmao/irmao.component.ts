import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-irmao',
  templateUrl: './irmao.component.html',
  styleUrls: ['./irmao.component.css']
})
export class IrmaoComponent implements OnInit {

  @Input() clientes: Array<any> ;
  // @Output() retornoClientes = new EventEmitter<any>();

  //mudouValor = new EventEmitter();
  
  //  valor = 10;
  constructor() { }

  ngOnInit() {
  }

  // retornando(valor:any){
  //   this.retornoClientes.emit(valor)
  // }

}
