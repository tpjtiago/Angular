import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Metodo 1
  clientesLista: Array<any> = [
    {nome: 'Ana'},
    {nome: 'Priscila'},
    {nome: 'Tiago'},
    {nome: 'Roberto'}
  ];
 // Metodo 2 usa o GET
 // Lista: Array<any> = [
  //   {nome: 'Ana'},
  //   {nome: 'Priscila'},
  //   {nome: 'Tiago'},
  //   {nome: 'Roberto'}
  // ];

  constructor() { }

  ngOnInit() {
  }

  // get clientesLista() {
  //   return this.Lista;
  // }

}
