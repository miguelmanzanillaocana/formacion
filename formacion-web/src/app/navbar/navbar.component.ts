import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSessionComponentComponent } from './cerrar-session-component/cerrar-session-component.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor( private dialog: MatDialog) { }

cerrarSesion() {
  const dialogRef = this.dialog.open(CerrarSessionComponentComponent, {
    width: '500px'
  });
}

}
