import { Component } from '@angular/core';

import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";
import { BotonInsertarComponent } from "./boton-insertar/boton-insertar.component";

@Component({
  selector: 'app-aplicaciones',
  standalone: true,
  imports: [TablaDatosComponent, BotonInsertarComponent],
  templateUrl: './aplicaciones.component.html',
  styleUrl: './aplicaciones.component.css'
})
export class AplicacionesComponent {

}
