import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './componentes/ejercicio/ejercicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CustodiaGuard } from './helpers/custodia.guard';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';

const routes: Routes = [
  //Acá es donde yo creo las paginas con el /nombre
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'ejercicio', component: EjercicioComponent, canActivate: [CustodiaGuard]},
  //Pasar parametro al enlace
  {path: 'ejercicio/:datoEntrada', component: EjercicioComponent, canActivate: [CustodiaGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [CustodiaGuard]},
  {path: 'ejercicios', redirectTo:'ejercicio'},
  {path: 'formulario', component: FormularioComponent, canActivate: [CustodiaGuard], children:[{path:'aaa',component:PrimerComponenteComponent}]},
  {path: 'publicaciones', component: PublicacionesComponent, canActivate: [CustodiaGuard]},
  {path: 'app', component: PrimerComponenteComponent, canActivate: [CustodiaGuard]},
  {path: '' , component: LoginComponent},
  {path: '**' , component: NoEncontradaComponent}//Para cualquiera, Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
