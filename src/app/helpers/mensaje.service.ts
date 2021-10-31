import { Injectable } from '@angular/core';

//Injeción de dependencias
@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensaje!:String;

  constructor() { 
    this.mensaje = 'mensaje por defecto del servicio';
  }

  //PROP
  public get Mensaje():String {
    return this.mensaje;
  }
  public set Mensaje(miMensaje:String) {
    this.mensaje = miMensaje;
  }
  

}
