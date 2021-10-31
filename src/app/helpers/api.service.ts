//Conectar Server
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { 

  }

  traerValor(){
    //Clase 8 1:22:00
    //Get
    //return this.http.get('').subscribe(function(respuesta){console.info(respuesta)});

    //Clase 20, minuto 8:15 explica como modificarlo para traer los datos
    //return this.http.get('http://localhost/phpapp/Backend/', {}).subscribe(x => {return (<HttpResponse<any>>x).body});
    return this.http.get('http://localhost/phpapp/Backend/',{});
  }

  traerValoresPost():Observable<any>{
    //Post                      .toPromise()
    return this.http.post('',{});
  }

}
