import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // Acessando a variavel
  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  incrementa() {
    console.log(this.campoValorInput);
    //this.campoValorInput.nativeElement.value++;
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    //this.campoValorInput.nativeElement.value--;
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor })
  }
}
