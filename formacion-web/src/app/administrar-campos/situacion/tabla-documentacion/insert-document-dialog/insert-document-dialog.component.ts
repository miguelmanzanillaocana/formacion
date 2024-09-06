import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Documentacion } from '../../../../../models';
import { DatosService } from '../../../../../services/datos.service';
import { HistorialService } from '../../../../../services/historial.service';
 
@Component({
  selector: 'app-insert-document-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './insert-document-dialog.component.html',
  styleUrl: './insert-document-dialog.component.css'
})
export class InsertDocumentDialogComponent {
  documentacionForm: FormGroup;
  documentacion: Documentacion = new Documentacion(0, "");
  email?:string

  constructor(private datosService: DatosService, private fb: FormBuilder,private historialService:HistorialService) {
    this.documentacionForm = this.fb.group({
      nombreDocumentacion: new FormControl("")
    });
  }

  insertarDocumentacion() {
    this.documentacion = new Documentacion(0, this.documentacionForm.get('nombreDocumentacion')?.value);
    this.datosService.insertarDocumentacion(this.documentacion).subscribe(documentacion => {
      this.documentacion = documentacion
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoAdministracion(this.email,this.documentacion.documentacion,"documentacion").subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
}
