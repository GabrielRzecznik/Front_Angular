import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  name:String = '';

  provincias!:Array<any>;

  constructor(private servicioMensaje: MensajeService, private api:ApiService) { }

  ngOnInit(): void {
    //Metodo 1 - Mas rapido
    //this.api.traerValor().subscribe(resp=> console.info(resp));
    //Metodo 2 
    //this.api.traerValoresPost().subscribe(function(resp){console.info(resp)});
    //Metodo 3 - Mas puro al TypeScript
    //this.api.traerValoresPost().subscribe(this.miFuncion);

    this.api.traerValor().subscribe(
      resp => this.provincias = <Array<any>>resp, 
      error => {alert(error.Mensaje)},
      //Return
      //() => {this.estoyEsperando = false;}
    );
    
  }
  //Metodo 3
  miFuncion(resp:any){
    //console.info(resp);
    this.provincias = resp;
  }

  setValue(){
   this.name = this.servicioMensaje.Mensaje;
  }
}
