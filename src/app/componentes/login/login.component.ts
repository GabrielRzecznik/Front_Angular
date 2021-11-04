import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin!:FormGroup;
  //Guardar
  usu!:any;
  cont!:any;

  constructor(private api:ApiService, private router: Router, private fb:FormBuilder) {
    if (sessionStorage.getItem('token')=='válido') {
      this.router.navigate(['/publicaciones']);//Con esto ya no puedo acceder al loguin
    }
    
    this.formularioLogin = this.fb.group({
      correo: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]]
    });
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

  Loguear(){
    if (this.formularioLogin.invalid) {
      return;
    }
    console.log(this.formularioLogin.value);
    this.api.BuscarUsuario(
      this.formularioLogin.value.correo,
      this.formularioLogin.value.password).subscribe(resp => {
        console.log(resp);
        this.entrar();
        this.load(this.formularioLogin.value.correo, this.formularioLogin.value.password);
      });
  }

  load(usu:any, contraseña:any){
    this.usu = localStorage.getItem(usu);
    this.cont = localStorage.getItem(contraseña);
}
}
