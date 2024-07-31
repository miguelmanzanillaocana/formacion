import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './crear-dialog.component.html', 
  styleUrl: './crear-dialog.component.css'
})
export class CrearDialogComponent {
  codigo: string ='';

  constructor(private dialogRef: MatDialogRef<CrearDialogComponent>) { }

  onClose(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
