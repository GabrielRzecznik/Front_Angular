import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {
  @Input() persona!:Persona;
  @Input() modifica!:boolean;
  @Output() modificarPersona = new EventEmitter<number|undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  ModificarPersona(dniPersona:number | undefined){
    //Se envia el evento a mi padre
    this.modificarPersona.emit(dniPersona);
  }
}
 