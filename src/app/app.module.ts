import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Para realizar un enlace entre el model y la vista, se utiliza el atributo ngModel [(ngModel)]
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EjercicioComponent } from './componentes/ejercicio/ejercicio.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { VisorComponent } from './componentes/visor/visor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NuevaDirectivaDirective } from './nueva-directiva.directive';
import { ModificadorPipe } from './modificador.pipe';
import { OrdenPipe } from './componentes/publicaciones/orden.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    FormularioComponent,
    EjercicioComponent,
    NoEncontradaComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    PublicacionesComponent,
    PerfilComponent,
    VisorComponent,
    NuevaDirectivaDirective,
    ModificadorPipe,
    OrdenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
