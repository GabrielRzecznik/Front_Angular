import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, RouterOutlet, ActivatedRoute } from '@angular/router';//Agrego ParamMap y
import { Persona } from 'src/app/entidades/persona';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
  personaArray:Array<Persona>;
  modificando:number|undefined;

  //Comunicación con primer componente a ejercicio
  variablePadre:String;
  miParametro: String;  

  constructor(private misMensajes: MensajeService, private ruteo: ActivatedRoute) {//Routeo Clase 8
    this.miParametro = '';
    this.modificando = -1;
    this.personaArray = [
      {nombre:"Mateo", apellido:"Gomez", dni:23564485},
      {nombre:"Lara", apellido:"Perez", dni:45644485},
      {nombre:"Nehuen", apellido:"Gutierrez", dni:35644444},
      {nombre:"Rafaela", apellido:"Correa", dni:15774866}
    ];

    //Comunicación con primer componente a ejercicio
    this.variablePadre ="Viene del ejercicio component";
  }

  ModificarPersona(dni:number|undefined){
    this.modificando = dni;
  }

  ngOnInit(): void {
    //Ruteo
    this.miParametro = this.ruteo.snapshot.paramMap.get('datoEntrada')??'';
  }

  mostrar(){
    console.info(this.personaArray);
    this.personaArray.forEach(per=> {alert(per.apellido)})
    this.misMensajes.Mensaje = <String>this.personaArray[0].apellido;
    /* o */
    //this.misMensajes.Mensaje = this.personaArray[0].apellido??'';
  }
}
