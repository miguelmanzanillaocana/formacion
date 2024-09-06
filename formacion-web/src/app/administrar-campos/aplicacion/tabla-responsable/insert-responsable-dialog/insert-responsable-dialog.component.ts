import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Responsable } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';

@Component({
  selector: 'app-insert-responsable-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-responsable-dialog.component.html',
  styleUrl: './insert-responsable-dialog.component.css'
})

export class InsertResponsableDialogComponent {
  responsableForm: FormGroup;
  responsable: Responsable = new Responsable(0, "");
  email?:string

  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService: HistorialService) {
    this.responsableForm = this.fb.group({
      nombreResponsable: new FormControl("")
    });
  }

  insertarResponsable() {
    this.responsable = new Responsable(0, this.responsableForm.get('nombreResponsable')?.value);
    this.datosService.insertarResponsable(this.responsable).subscribe(responsable => {
      this.responsable = responsable
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.responsable.responsable,"responsable").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
