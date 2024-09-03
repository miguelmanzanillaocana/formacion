import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LoginUserDto } from '../../models/autentificacion/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
      return localStorage.getItem("app.token") != null;
  }

  login(logi: LoginUserDto): Observable<string> {
      return this.http.post<string>("http://localhost:8080/auth/login", logi);
  }

  logout() {
      localStorage.removeItem("app.token");
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
