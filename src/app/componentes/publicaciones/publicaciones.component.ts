import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/entidades/automovil';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  automovilArray:Array<Automovil>;

  constructor() { 
    this.automovilArray = [
      {patente:"AC 645 JD",	marca:"Honda",	modelo:"Civic",	version:"Basic",	color:"Blanco perlado",	estado:"Como nuevo",	caja:"Manual",	combustible:"Disel",	valor:27000,	kilometraje:7000,	anio:2019,	propietario:"Gabriel"},
      {patente:"AB 354 UY",	marca:"Ford",	modelo:"Mondeo",	version:"Full",	color:"Azul marino",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:30000,	kilometraje:83000,	anio:2018,	propietario:"Alan"},
      {patente:"AA 345 IV",	marca:"Nisan",	modelo:"Versa",	version:"Basic",	color:"Gris topo",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:10000,	kilometraje:11300,	anio:2017,	propietario:"Agustin"},
      {patente:"AB 456 PE",	marca:"Fiat",	modelo:"Argos",	version:"Basic",	color:"Rojo",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:9000,	kilometraje:29300,	anio:2018,	propietario:"Mercia"},
      {patente:"AB 543 JS",	marca:"Peugeot",	modelo:"208",	version:"Felin",	color:"Negro",	estado:"Usado bueno",	caja:"Manual",	combustible:"Nafta",	valor:23000,	kilometraje:11300,	anio:2018,	propietario:"Francisco"}
    ];
  }

  ngOnInit(): void {
  }

}

