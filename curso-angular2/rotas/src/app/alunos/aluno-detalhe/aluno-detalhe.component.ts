import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;

  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);  
      }
    );*/

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o objeto Aluno do Resolver');
        this.aluno = info['aluno'];
      }
    );
  }

  /*this.inscricao = this.route.params.subscribe(
    (info: {aluno: Aluno}) => {
      console.log('Recebendo o objeto Aluno do resolver');
      this.aluno = info.aluno;
      }
    );
  }*/

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
