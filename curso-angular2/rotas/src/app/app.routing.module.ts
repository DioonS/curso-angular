import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), // configurando lazy loading
        canActivate: [AuthGuard], // Configuração de Guarda de Rotas
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard] // Configurando o canLoad
    }, // Configuração de Guarda de Rotas Filhas
    { path: 'alunos', 
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirecionando o usuario para home caso seja uma rota vazia
    { path: '**', component: PaginaNaoEncontradaComponent } // Configurando rota não encontrada (404)
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}