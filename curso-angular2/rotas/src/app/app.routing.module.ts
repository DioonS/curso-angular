import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), // configurando lazy loading
        canActivate: [AuthGuard], // Configuração de Guarda de Rotas
        canActivateChild: [CursosGuard]}, // Configuração de Guarda de Rotas Filhas
    { path: 'alunos', 
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}