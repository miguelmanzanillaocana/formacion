import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const roles=next.data['role'] as Array<String>;
        const rol_user=sessionStorage.getItem('app.roles')
        if(this.authService.isLoggedIn()){
            for (let i = 0; i < roles.length; i++) {
               if (rol_user==roles[i]) {
                    return true;
               }
            }
        }
        return false
    }
}
