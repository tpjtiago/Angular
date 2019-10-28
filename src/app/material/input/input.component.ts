import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  descricao='Tartaruga';
  //imgts='https://f.i.uol.com.br/fotografia/2019/07/04/15622791135d1e7cc9af1ae_1562279113_3x2_md.jpg';
//imgts='';
@Input() imgts: string;
@Input() alternativo: string;
@Output() clickts: EventEmitter<any> = new EventEmitter();

  testelClick(){
    debugger;
    this.clickts.emit(null);
   
  }

}
