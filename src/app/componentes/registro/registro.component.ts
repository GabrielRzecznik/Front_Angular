import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro!:FormGroup;

  constructor(private api:ApiService, private router: Router, private fb:FormBuilder) {
    this.formularioRegistro = this.fb.group({
      nombre: ["",[Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
      apellido: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      correo: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      contraseña: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      provincia: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      edad: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]]
    });
  }

  ngOnInit(): void {
  }

  registrar(){
    alert('Creación de Usuario');
  }

  atras(){
    this.router.navigate(['/login']);
  }

  CrearUsuario(){
    if (this.formularioRegistro.invalid) {
      return;
    }
    console.log(this.formularioRegistro.value);
    this.api.RegistrarUsuario(
      this.formularioRegistro.value.usuario,
      this.formularioRegistro.value.apellido,
      this.formularioRegistro.value.correo,
      this.formularioRegistro.value.contraseña,
      this.formularioRegistro.value.provincia,
      this.formularioRegistro.value.edad
    );
  }
}

