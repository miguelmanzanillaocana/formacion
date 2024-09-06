import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HistorialService } from '../../../services/historial.service';

@Component({
  selector: 'app-cerrar-session-component',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './cerrar-session-component.component.html',
  styleUrl: './cerrar-session-component.component.css'
})
export class CerrarSessionComponentComponent {

  constructor(private authService: AuthService,private dialogRef: MatDialogRef<CerrarSessionComponentComponent>,  private router: Router) { }

  onClose(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
  cerrarSesion() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }
}
