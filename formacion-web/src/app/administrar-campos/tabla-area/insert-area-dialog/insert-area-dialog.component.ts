import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatosService } from '../../../../services/datos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Area } from '../../../../models/area';
 
@Component({
  selector: 'app-insert-area-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogContent, MatDialogActions, MatDialogClose, ReactiveFormsModule],
  templateUrl: './insert-area-dialog.component.html',
  styleUrl: './insert-area-dialog.component.css'
})
export class InsertAreaDialogComponent {
  areaForm: FormGroup;
  area: Area = new Area(0, "");
  constructor(private datosService: DatosService, private fb: FormBuilder) {
    this.areaForm = this.fb.group({
      nombreArea: new FormControl("")
    });
  }

  insertarArea() {
    this.area = new Area(0, this.areaForm.get('nombreArea')?.value);
    this.datosService.insertarArea(this.area).subscribe(area => this.area = area);
    location.reload();
  }
}
