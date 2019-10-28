import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IrmaoComponent } from './irmao/irmao.component';
import { InputComponent } from './material/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatInputModule, MatRippleModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TabelaClientesComponent,
    DashboardComponent,
    IrmaoComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
