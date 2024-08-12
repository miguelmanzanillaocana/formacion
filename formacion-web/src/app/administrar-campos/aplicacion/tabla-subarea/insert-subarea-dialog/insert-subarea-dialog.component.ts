import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatosService } from '../../../../../services/datos.service';
import { Subarea } from '../../../../../models/aplicaciones';

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
