import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { jwtDecode, JwtPayload } from 'jwt-decode';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginDto } from '../../models/autentificacion/login-dto';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  message: string = "";
  logi: LoginDto=new LoginDto("","");


  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  public login(): void {
    sessionStorage.removeItem("app.token");
    this.logi.email=this.loginForm.get('username')?.value;
    this.logi.password=this.loginForm.get('password')?.value
    this.authService.login(this.logi)
      .subscribe((tok: string)=>{
        // next: (token) => {
        //   sessionStorage.setItem("app.token", token);

        //   // const decodedToken = jwtDecode<JwtPayload>(token);
        //   // // @ts-ignore
        //   // sessionStorage.setItem("app.roles", decodedToken.scope);
        //   console.log(token);
        //   this.router.navigateByUrl('/aplicaciones');
        // },
        
        // error: (error) => {
        //   console.error('Error en la petición de login:', error);
        //   this.snackBar.open(`Login failed: ${error.status}`, "OK", {
        //     duration: 2500
        //   });
        // }
        console.log(tok)
      });
  }
}
