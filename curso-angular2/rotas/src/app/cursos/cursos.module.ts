import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosService } from "./cursos.service";
import { FormsModule } from "@angular/forms";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [
        CursosService
    ],
})
export class CursosModule { }