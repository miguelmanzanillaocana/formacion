import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Tecnologia } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';

@Component({
  selector: 'app-insert-tecnologia-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-tecnologia-dialog.component.html',
  styleUrl: './insert-tecnologia-dialog.component.css'
})

export class InsertTecnologiaDialogComponent {
  tecnologiaForm: FormGroup;
  tecnologia: Tecnologia = new Tecnologia(0, "");
  email?:string
  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService:HistorialService) {
    this.tecnologiaForm = this.fb.group({
      nombreTecnologia: new FormControl("")
    });
  }

  insertarTecnologia() {
    this.tecnologia = new Tecnologia(0, this.tecnologiaForm.get('nombreTecnologia')?.value);
    this.datosService.insertarTecnologia(this.tecnologia).subscribe(tecnologia => {
      this.tecnologia = tecnologia
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.tecnologia.tecnologia,"tecnologia").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
