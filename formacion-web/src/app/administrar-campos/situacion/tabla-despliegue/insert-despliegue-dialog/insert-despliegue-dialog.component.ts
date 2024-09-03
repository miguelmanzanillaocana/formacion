import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Despliegue } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-insert-despliegue-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-despliegue-dialog.component.html',
  styleUrl: './insert-despliegue-dialog.component.css' 
})
export class InsertDespliegueDialogComponent {
  despliegueForm: FormGroup;
  despliegue: Despliegue = new Despliegue(0, "");

  constructor(private datosService: DatosService, private fb: FormBuilder) {
    this.despliegueForm = this.fb.group({
      nombreDespliegue: new FormControl("")
    });
  }

  insertarDespliegue() {
    this.despliegue = new Despliegue(0, this.despliegueForm.get('nombreDespliegue')?.value);
    this.datosService.insertarDespliegue(this.despliegue).subscribe(despliegue => this.despliegue = despliegue);
  }
}
