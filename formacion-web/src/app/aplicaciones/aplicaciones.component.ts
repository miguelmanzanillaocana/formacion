import { Component } from '@angular/core';
import { InsertFormComponent } from "./insert-form/insert-form.component";
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@Component({
  selector: 'app-aplicaciones',
  standalone: true,
  imports: [InsertFormComponent, TablaDatosComponent],
  templateUrl: './aplicaciones.component.html',
  styleUrl: './aplicaciones.component.css'
})
export class AplicacionesComponent {

}
