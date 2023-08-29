import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'usuario@email.com' && usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true); // Antes de usuario == autenticado, mostrar menu

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false); // Usuario autenticado == false, não mostrar menu
    }
  }

  usuarioEstaAutenticado() { 
    return this.usuarioAutenticado;
  }
}

