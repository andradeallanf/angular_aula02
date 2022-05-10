import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarGuard } from './autenticar.guard';
import { ErroComponent } from './erro/erro.component';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { Exemplo02Component } from './exemplo02/exemplo02.component';
import { Exemplo03Component } from './exemplo03/exemplo03.component';
import { Exemplo04Component } from './exemplo04/exemplo04.component';
import { PrincipalComponent } from './exemplo05/principal/principal.component';
import { Exemplo06Component } from './exemplo06/exemplo06.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'exemplo01', component:Exemplo01Component},
  {path:'exemplo02', component:Exemplo02Component},
  {path:'exemplo03', component:Exemplo03Component},
  {path:'exemplo04', component:Exemplo04Component},
  {path:'exemplo05', component:PrincipalComponent},
  {path:'exemplo06', component:Exemplo06Component, canActivate:[AutenticarGuard]},
  {path:'**', component:ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
