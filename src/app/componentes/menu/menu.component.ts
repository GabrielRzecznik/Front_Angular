import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/entidades/usuarios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mostrarNombre!:any;

  constructor() {
    this.mostrarNombre == localStorage.setItem(Usuarios.name, 'válido');
  }
  ngOnInit(): void {
  }
}
