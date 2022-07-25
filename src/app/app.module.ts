import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MuseosComponent } from './components/museos/museos.component';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { MuseoUbicacionComponent } from './components/museo-ubicacion/museo-ubicacion.component';
import { ErrorComponent } from './components/error/error.component';
import {  RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


const misRutas: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'museos', component: MuseosComponent},
  {path: 'museo_detalle/:codigo', component: MuseoDetalleComponent},
  {path: 'museo_ubicacion', component: MuseoUbicacionComponent}, 
  {path: '', redirectTo:'home', pathMatch:'full'},//Redirección elegida de pagina principal,solicitando la re
  {path: '**', component: ErrorComponent} //Path del error siempre al final

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MuseosComponent,
    MuseoDetalleComponent,
    MuseoUbicacionComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(misRutas),
   AgmCoreModule.forRoot({
      apiKey:''
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
