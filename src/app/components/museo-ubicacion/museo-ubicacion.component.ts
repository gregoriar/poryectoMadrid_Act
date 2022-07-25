import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museo-ubicacion',
  templateUrl: './museo-ubicacion.component.html',
  styleUrls: ['./museo-ubicacion.component.css']
})
export class MuseoUbicacionComponent implements OnInit {
 
  lat:        number   = 40.43639;
  lng:        number   = 3.6714752;
  zoom:       number   = 14;
  nombre:     string = "";
  id     :    number = 0;
  direccion: string ="";

  constructor(private ruta: ActivatedRoute ) { 
   /* this.lat=0;
    this.lng=0;
    this.id =0;
    this.nombre="";
    this.direccion=""; */

    this.lat=parseFloat(this.ruta.snapshot.queryParams.latitud);
    this.lng=parseFloat(this.ruta.snapshot.queryParams.longitud);
    this.id =parseFloat(this.ruta.snapshot.queryParams.id);
    this.nombre=this.ruta.snapshot.queryParams.museo;
    this.direccion=this.ruta.snapshot.queryParams.direccion;


    

  }

  ngOnInit(): void {
  }

}
