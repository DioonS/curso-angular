import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[] | undefined;

  pagina!: number;

  inscricao: Subscription = new Subscription;

  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}});
  }

  voltarPagina() {
    this.router.navigate(['/cursos'], 
      {queryParams: {'pagina': --this.pagina}});
  }
}
