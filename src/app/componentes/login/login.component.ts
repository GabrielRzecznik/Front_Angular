import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    if (sessionStorage.getItem('token')=='válido') {
      this.router.navigate(['/formulario']);//Con esto ya no puedo acceder al loguin
    }
  } 

  ngOnInit(): void {
  }

  entrar(){
    //localStorage.setItem('token', 'válido');
    sessionStorage.setItem('token', 'válido');
    this.router.navigate(['/publicaciones']);
  }

  salir(){
    sessionStorage.removeItem('token');
  }

  registro(){
    this.router.navigate(['/registro']);
  }
}
