import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        //console.log(route);
        //console.log(state);

        if (state.url.includes('editar')) {
            //alert("Usuário sem acesso!");
            //return false;
            // return Observable.of(false);
        }
        return true;
    }
}