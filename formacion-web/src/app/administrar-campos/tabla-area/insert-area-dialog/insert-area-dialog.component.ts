import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
@Component({
  selector: 'app-insert-area-dialog',
  standalone: true,
  imports: [MatFormFieldModule,MatDialogContent,MatDialogActions,MatDialogClose],
  templateUrl: './insert-area-dialog.component.html',
  styleUrl: './insert-area-dialog.component.css'
})
export class InsertAreaDialogComponent {


}
