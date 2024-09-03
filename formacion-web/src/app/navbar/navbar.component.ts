import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSessionComponentComponent } from './cerrar-session-component/cerrar-session-component.component';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatToolbarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  mostrar: boolean = true;

  constructor( private dialog: MatDialog, private auth: AuthService) { }

  //ngOnInit(){
  //  this.mostrar = this.auth.isLoggedIn();
  //}

cerrarSesion() {
  const dialogRef = this.dialog.open(CerrarSessionComponentComponent, {
    width: '500px'
  });
}

}
