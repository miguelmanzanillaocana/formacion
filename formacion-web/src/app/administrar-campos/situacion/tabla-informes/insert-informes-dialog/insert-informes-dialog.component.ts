import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Informes } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';
@Component({
  selector: 'app-insert-informes-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-informes-dialog.component.html',
  styleUrl: './insert-informes-dialog.component.css'
})
export class InsertInformesDialogComponent {
  informesForm: FormGroup;
  informes: Informes = new Informes(0, "");
  email?:string;

  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService:HistorialService) {
    this.informesForm = this.fb.group({
      nombreInformes: new FormControl("")
    });
  }

  insertarInformes() {
    this.informes = new Informes(0, this.informesForm.get('nombreInformes')?.value);
    this.datosService.insertarInformes(this.informes).subscribe(informes => {
      this.informes = informes
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.informes.informes,"informes").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
