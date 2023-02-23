//Directiva creada para el fondo de imagen de Iniciar Sesión

import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCBody]'
})

export class CBodyDirective implements OnInit {


  constructor(
    private renderer: Renderer2,
    private elem: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background', 'url(/assets/img/9.PNG)');
    this.renderer.setStyle(this.elem.nativeElement, 'background-size', 'cover');

  }
}
