import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatosService } from '../../../../services/datos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Subarea } from '../../../../models/aplicaciones/subarea';
@Component({
  selector: 'app-insert-subarea-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogContent, MatDialogActions, MatDialogClose, ReactiveFormsModule],
  templateUrl: './insert-subarea-dialog.component.html',
  styleUrl: './insert-subarea-dialog.component.css'
})

export class InsertSubareaDialogComponent {
  subareaForm: FormGroup;
  subarea: Subarea = new Subarea(0,"");
  constructor(private datosService: DatosService,private fb:FormBuilder){
    this.subareaForm = this.fb.group({
      nombreSubArea:new FormControl("")
    });
  }
  
  insertarSubarea() {
    this.subarea = new Subarea(0, this.subareaForm.get('nombreSubArea')?.value);
    this.datosService.insertarSubarea(this.subarea).subscribe(subarea => this.subarea = subarea);
  }
}
