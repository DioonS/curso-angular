import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { 
    //console.log(this.elementRef);
    // Não usar diretamente o código abaixo por questões de segurança
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    // Usar dessa forma
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }
}
