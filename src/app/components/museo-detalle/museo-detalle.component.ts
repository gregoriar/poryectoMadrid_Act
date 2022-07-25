import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';

@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css']
})
export class MuseoDetalleComponent implements OnInit {

  id:number = 0;
  museo: Museo =null;

  museos: Museo[]=[

   
{ id: 1, nombre: 'Museo del Prado', telefono:'913 30 28 00', 
direccion:'C. de Ruiz de Alarcón, 23, 28014 Madrid', horario:'10:00-20:00', observacion:'',
imagen:'../../../assets/images/museo-del-prado.jpg', web:'museodelprado.es', coordenadas:[40.4137819, -3.6921271], 
precio:18, abierto:false},

{ id: 2, nombre: 'Museo de las Ilusiones', telefono:'', 
direccion:'calle del doctor Cortezo 8, 28012 Madrid', horario:'10:00-21:00', observacion:'',
imagen:'../../../assets/images/museo-de-las-ilusiones.jpeg', web:'https://www.museumofillusions.es', coordenadas:[40.4135,-3], 
precio:13, abierto:true },

{ id: 3, nombre: 'Museo de las bellas artes de San Fernando', telefono:'34 91-524 08 64', 
direccion:'Alcala 13', horario:'10:00-20:00',  observacion:'',
imagen:'../../../assets/images/real-academia-de-bellas-artes-museo-de-bellas-artes.jpg', 
web:'https://www.realacademiabellasartessanfernando.com/es/museo', 
coordenadas:[40.418821330012605, -3.7007008327756434], precio:19, abierto:true },


{ id: 4, nombre: 'THE ROBOT MUSEUM', telefono:'644 32 64 70', 
direccion:'CC ABC Serrano, 3ª planta, Calle Serrano 61, 28006, Madrid', horario:'L-V: 9:00-13.30. S: 12:20-20:20', 
observacion:'M-J. Precio: 5€. V-S y Feriados: 7.90 €. L-V Media hora de descanso entre las 11.00- 11.30. Precios Pack Familiar e Infantil',
imagen:'../../../assets/images/museo_robot1.jpg', 
web:'http://www.therobotmuseum.eu/', 
coordenadas:[40.43224,-3.687321], precio:5, abierto:true }
 

  ]

  constructor(private ruta:ActivatedRoute) { 

    this.id = this.ruta.snapshot.params.codigo;
    console.log("console log: " + this.ruta.snapshot.params.codigo);
    this.museo = this.buscarMuseo();
  }

  buscarMuseo(): Museo{
//filtre el array por aquellos elementos id, que sea igual al id recibido (parametro)
    return this.museos.filter((item)=>{
      
      return item.id == this.id



    })[0];
//Al filtrar el array nos devuelve otro array y nos quedamos solo con el primer elemento
  }

  ngOnInit(): void {
  }

}
