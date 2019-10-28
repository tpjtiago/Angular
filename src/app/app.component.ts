import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // listaClientes: Array<any> = [
  //   {nome: 'Ana'},
  //   {nome: 'Priscila'},
  //   {nome: 'Tiago'},
  //   {nome: 'Roberto'}
  // ];
  name = 'Angular';


  alert1() {
    debugger
    console.log('1')
    alert('OK Funcionou 1')
  }
  
  alert2() {
    debugger
    console.log('2')
    alert('OK Funcionou 220')
  }
  
}

