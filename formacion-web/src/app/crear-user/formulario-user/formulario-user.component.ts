import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterDto } from '../../../models/autentificacion/register-dto';
import { AuthService } from '../../auth/auth.service';
import { UserModel } from '../../../models/autentificacion/user-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rol } from '../../../models/autentificacion/rol';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-user.component.html',
  styleUrl: './formulario-user.component.css'
})
export class FormularioUserComponent {
  usuarioForm: FormGroup;
  register: RegisterDto = new RegisterDto("", "", "", "");
  rolUser: string = "";
  user!: UserModel;

  rolesArray: Rol[] = [];
  rolesString = ["user", "admin"]

  constructor(private auth: AuthService, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      email: new FormControl(this.register.email),
      pass: new FormControl(this.register.password),
      nombre: new FormControl(this.register.fullName),
      roles: new FormControl(null)
    })
  }

  ngOnInit() {
    this.rolesArray = [new Rol(0, "user"), new Rol(1, "admin")]
  }

  onSubmit() {
    this.rolUser = this.rolesString[this.usuarioForm.get('roles')?.value] || this.rolesString[0];

    this.register = new RegisterDto(
      this.usuarioForm.get('email')?.value,
      this.usuarioForm.get('pass')?.value,
      this.usuarioForm.get('nombre')?.value,
      this.rolUser
    );

    this.auth.signup(this.register).subscribe(user => {
      this.user = user;
      console.log(user);
      this.snackBar.open('Usuario ' + this.user.fullName + ' creado', '', {
        duration: 2500
      })
    })
  }

}
