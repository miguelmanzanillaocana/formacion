import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmDialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './confirmDialog.component.html',
  styleUrl: './confirmDialog.component.css'
})
export class ConfirmDialogComponent {
  codigo: string ='';

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  onClose(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
