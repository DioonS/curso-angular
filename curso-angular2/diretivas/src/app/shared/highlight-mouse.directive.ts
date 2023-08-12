import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');*/
    this.backgroundColor = 'white';
  }

  // Se não precisar de nenhuma manipulação, usar o codigo da 19
  //@HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  // Caso precise manipular mais alguma coisa usar o código abaixo (linha 22)
  @HostBinding('style.backgroundColor') get setColor() {
    // Colocar qualquer codigo extra que precisar
    return this.backgroundColor;
  };

  private backgroundColor: string | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
  }

}
