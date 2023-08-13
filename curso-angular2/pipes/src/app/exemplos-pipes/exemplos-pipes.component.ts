import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  // Criando o objeto livro
  livro: any = {
    title: 'Learning JavaScript Data Structures and Algorithms: Hone your skills by learning classic data structures and algorithms in JavaScript, 2nd Edition',
    rating: 4.54321, 
    numeroPaginas: 314,
    preco: 46.99,
    dataLancamento: new Date(2016, 6, 23),
    url: 'https://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string | undefined;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  constructor() {

  }

  ngOnInit() {

  }
}
