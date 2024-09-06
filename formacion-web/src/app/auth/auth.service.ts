import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUserDto, RegisterDto, UserModel } from '../../models';
import { HistorialService } from '../../services/historial.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    email?: string;
    constructor(private http: HttpClient, private historialService: HistorialService) {
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem("app.token") != null;
    }

    login(logi: LoginUserDto): Observable<string> {
        return this.http.post<string>("http://localhost:8080/auth/login", logi);
    }

    signup(register: RegisterDto): Observable<UserModel> {
        return this.http.post<UserModel>(" http://localhost:8080/auth/signup", register);
    }

    logout() {
        this.email = sessionStorage.getItem('app.email') || "";
        this.historialService.insertarCerrarSesion(this.email).subscribe((res) => {
            console.log(res)
        })
        sessionStorage.removeItem("app.token");
        sessionStorage.removeItem("app.roles");
    }

    isUserInRole(roleFromRoute: string) {
        const roles = sessionStorage.getItem("app.roles");

        if (roles!.includes(",")) {
            if (roles === roleFromRoute) {
                return true;
            }
        } else {
            const roleArray = roles!.split(",");
            for (let role of roleArray) {
                if (role === roleFromRoute) {
                    return true;
                }
            }
        }
        return false;
    }
}
