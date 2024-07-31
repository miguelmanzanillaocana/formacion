import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-crear-app',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-crear-app.component.html', 
  styleUrl: './dialog-crear-app.component.css'
})
export class DialogCrearAppComponent {
  codigo: string ='';

  constructor(private dialogRef: MatDialogRef<DialogCrearAppComponent>) { }

  onClose(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
