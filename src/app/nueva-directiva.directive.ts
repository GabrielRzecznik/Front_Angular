import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNuevaDirectiva]'
})

export class NuevaDirectivaDirective {
  //Escuchar de nuestro
  @HostListener('click') onclick(){
    this.ElementoUtilizado.nativeElement.className = this.appNuevaDirectiva;
  }

  @Input() appNuevaDirectiva!:String;

  constructor(private ElementoUtilizado: ElementRef) {
    this.ElementoUtilizado.nativeElement.className = "fondoRojo";
  }

}
