import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterDto, UserModel, Rol } from '../../../models';
import { AuthService } from '../../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../../services/historial.service';

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
  email?:string;
  rolesArray: Rol[] = [];
  rolesString = ["user", "admin"]

  constructor(private auth: AuthService, private snackBar: MatSnackBar, private fb: FormBuilder,private historialService: HistorialService) {
    this.usuarioForm = this.fb.group({
      email: new FormControl(this.register.email, Validators.pattern('^(([^<>().,;:s@"]+(.[^<>().,;:s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$')),
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
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoUsario(this.email,this.register).subscribe((res) => {
        console.log(res)
      })
      location.reload();
    })
  }

}
