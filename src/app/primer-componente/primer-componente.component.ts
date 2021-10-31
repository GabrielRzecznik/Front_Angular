import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../entidades/persona'; //Tengo que importarlo, aparece abajo como un problema

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  nombre:String;
  color:String;
  path:String;

  nombres:Array<Persona>;
  modelo:String;
  miClase:String;
  nombreProyecto:String;

  //Variable de entrada
  //Comunicación con primer componente a ejercicio
  @Input() miValor!:String;
  

  constructor() {
    this.nombre = " Mi nombre ";
    this.color = "blue";
    this.path = "https://www.ibeltran.com.ar/img/logo/logo.png";

    this.nombreProyecto= "mi proyecto";
    this.miClase="rojo";
    this.modelo= "";
    this.nombres = [
      {nombre:"Mateo", apellido:"Gomez", dni:23564485},
      {nombre:"Lara", apellido:"Perez", dni:45644485},
      {nombre:"Nehuen", apellido:"Gutierrez", dni:35644444},
      {nombre:"Rafaela", apellido:"Correa", dni:15774866}
    ];
    
  }
    
  ngOnInit(): void {
  }

  cambiarValor(){
    this.nombreProyecto = "otro proyecto";
    this.miClase="azul";
  }

  mostrarEnAlert(valor:String):void{
    alert(valor);
  }

  mostrarSeleccionado(){
    let persona = (<HTMLInputElement>document.getElementById("optPersonas")).value;
    alert(persona);
  }

  cambiarNombreProyecto(){
    this.miClase="rojo";
    this.nombreProyecto = (<HTMLInputElement>document.getElementById("txtNombre")).value;
  }

  mostrar(){
    alert("hola");
  }

  modificar(){
    (<HTMLInputElement>document.getElementById("labels")).value;
  }
}
