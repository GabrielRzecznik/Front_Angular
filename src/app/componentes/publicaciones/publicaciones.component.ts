import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Automovil } from 'src/app/entidades/automovil';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  formularioAutomovil!:FormGroup;
  automovilArray:Array<Automovil>;
  //Yo quiero cargarle a este array la respuesta de abajo
  tablaAutomoviles:any;

  modificando:string|undefined;

  constructor(private api:ApiService, private fb:FormBuilder) {
    this.formularioAutomovil = this.fb.group({
      patente: ["",[Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
      marca: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      modelo: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      version: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      color: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      estado: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      cambio: ["",Validators.required],
      combustible: ["",Validators.required],
      valor:["",[Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      kilometraje: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      anio: ["",[Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      //propietario: ["",Validators.required]
    });

    this.modificando = "false";

    this.automovilArray = [
      {patente:"AC 645 JD",	marca:"Honda",	modelo:"Civic",	version:"Basic",	color:"Blanco perlado",	estado:"Como nuevo",	caja:"Manual",	combustible:"Disel",	valor:27000,	kilometraje:7000,	anio:2019,	propietario:"Gabriel"},
      {patente:"AB 354 UY",	marca:"Ford",	modelo:"Mondeo",	version:"Full",	color:"Azul marino",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:30000,	kilometraje:83000,	anio:2018,	propietario:"Alan"},
      {patente:"AA 345 IV",	marca:"Nisan",	modelo:"Versa",	version:"Basic",	color:"Gris topo",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:10000,	kilometraje:11300,	anio:2017,	propietario:"Agustin"},
      {patente:"AB 456 PE",	marca:"Fiat",	modelo:"Argos",	version:"Basic",	color:"Rojo",	estado:"Usado bueno",	caja:"Automatico",	combustible:"Nafta",	valor:9000,	kilometraje:29300,	anio:2018,	propietario:"Mercia"},
      {patente:"AB 543 JS",	marca:"Peugeot",	modelo:"208",	version:"Felin",	color:"Negro",	estado:"Usado bueno",	caja:"Manual",	combustible:"Nafta",	valor:23000,	kilometraje:11300,	anio:2018,	propietario:"Francisco"}
    ];
  }

  ModificarAutomovil(patente:string|undefined){
    this.modificando = patente;
  }

  // EditarAutomovil(patente:string){
  //   this.api.EditarAutomovil(patente).subscribe(resp => {
  //     console.log(resp);
  //   this.CargarTabla();
  //   });
  // }

  CrearAutomovil(){
    if (this.formularioAutomovil.invalid) {
      return;
    }
    console.log(this.formularioAutomovil.value);
    this.api.PublicarAutomovil(
      this.formularioAutomovil.value.patente,
      this.formularioAutomovil.value.marca,
      this.formularioAutomovil.value.modelo,
      this.formularioAutomovil.value.version,
      this.formularioAutomovil.value.color,
      this.formularioAutomovil.value.estado,
      this.formularioAutomovil.value.cambio,
      this.formularioAutomovil.value.combustible,
      this.formularioAutomovil.value.valor,
      this.formularioAutomovil.value.kilometraje,
      this.formularioAutomovil.value.anio).subscribe(resp => {
        console.log(resp);
        this.tablaAutomoviles.push(resp);
        this.CargarTabla();
      });    
  }

  EliminarAutomovil(patente:string){
    //Selecciona el campo para eliminar
    //console.log(patente);
    this.api.EliminarAutomovil(patente).subscribe(resp => {
      console.log(resp);
    this.CargarTabla();
    });
  }

  ngOnInit(): void {
    //this.api.traerValor().subscribe(resp => console.info(resp));
    //this.api.traerValor().subscribe(resp => {return resp});
    this.CargarTabla();
  }

  CargarTabla(){
    this.api.traerValor().subscribe(resp => this.tablaAutomoviles = resp);
  }
}

