import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miProyecto';
  //Borrar
  soyUnaVariable = "fondoAmarillo";
  //Crear una fecha
  fecha: Date = new Date();
}
