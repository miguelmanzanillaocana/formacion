import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TecnologiaInterfaz } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';

@Component({
  selector: 'app-insert-tecnologia-interfaz-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-tecnologia-interfaz-dialog.component.html',
  styleUrl: './insert-tecnologia-interfaz-dialog.component.css'
})
export class InsertTecnologiaInterfazDialogComponent {
  tecnologiaForm: FormGroup;
  tecnologia: TecnologiaInterfaz = new TecnologiaInterfaz(0, "");
  email?:string;

  constructor(private datosService: DatosService, private fb: FormBuilder, private historialService:HistorialService) {
    this.tecnologiaForm = this.fb.group({
      nombreTecnologia: new FormControl("")
    });
  }

  insertarTecnologia() {
    this.tecnologia = new TecnologiaInterfaz(0, this.tecnologiaForm.get('nombreTecnologia')?.value);
    this.datosService.insertarTecnologiaInterfaz(this.tecnologia).subscribe(tecnologia => {
      this.tecnologia = tecnologia
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.tecnologia.tecnologiaInterfaz,"tecnologia interfaz").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
