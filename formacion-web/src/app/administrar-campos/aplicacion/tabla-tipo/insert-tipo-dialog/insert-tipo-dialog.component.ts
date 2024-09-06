import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Tipo } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';
@Component({
  selector: 'app-insert-tipo-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-tipo-dialog.component.html',
  styleUrl: './insert-tipo-dialog.component.css'
})
export class InsertTipoDialogComponent {
  tipoForm: FormGroup;
  tipo: Tipo = new Tipo(0, "");
  email?:string
  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService:HistorialService) {
    this.tipoForm = this.fb.group({
      nombreTipo: new FormControl("")
    });
  }

  insertarTipo() {
    this.tipo = new Tipo(0, this.tipoForm.get('nombreTipo')?.value);
    this.datosService.insertarTipo(this.tipo).subscribe(tipo => {
      this.tipo = this.tipo
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.tipo.tipo,"tipo").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
