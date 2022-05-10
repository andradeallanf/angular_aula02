import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { Exemplo02Component } from './exemplo02/exemplo02.component';
import { Exemplo03Component } from './exemplo03/exemplo03.component';
import { Exemplo04Component } from './exemplo04/exemplo04.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErroComponent } from './erro/erro.component';
import { TopoComponent } from './topo/topo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './exemplo05/principal/principal.component';
import { FormularioComponent } from './exemplo05/formulario/formulario.component';
import { TabelaComponent } from './exemplo05/tabela/tabela.component';
import { Exemplo06Component } from './exemplo06/exemplo06.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Exemplo02Component,
    Exemplo03Component,
    Exemplo04Component,
    InicioComponent,
    ErroComponent,
    TopoComponent,
    PrincipalComponent,
    FormularioComponent,
    TabelaComponent,
    Exemplo06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
