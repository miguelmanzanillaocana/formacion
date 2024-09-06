import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatosService } from '../../../../../services/datos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Area } from '../../../../../models';
import { HistorialService } from '../../../../../services/historial.service';
 
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
  email?:string;

  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService:HistorialService) {
    this.areaForm = this.fb.group({
      nombreArea: new FormControl("")
    });
  }

  insertarArea() {
    this.area = new Area(0, this.areaForm.get('nombreArea')?.value);
    this.datosService.insertarArea(this.area).subscribe(area => {
      this.area = area
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.area.area,"area").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
    
  }
}
