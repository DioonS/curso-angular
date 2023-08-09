import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlDaImagem = 'http://lorempixel.com.br/500/400/?2';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = '';

  nomeDoCurso: string = 'Angular';

  valorInicial = 10;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
