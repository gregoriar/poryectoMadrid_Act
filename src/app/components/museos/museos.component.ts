import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements OnInit {
  
  museos: any = [
    {id:1, nombre:"Museo del Prado"},
    {id:2, nombre:"Museo de las Ilusiones"},
    {id:3, nombre:"Museo de Bellas Artes"},
    {id:4, nombre:"THE ROBOT MUSEUM"}
  ]

  
  constructor() { }

  ngOnInit(): void {
 
  }

}
