import { Component } from '@angular/core';

import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@Component({
  selector: 'app-aplicaciones',
  standalone: true,
  imports: [TablaDatosComponent],
  templateUrl: './aplicaciones.component.html',
  styleUrl: './aplicaciones.component.css'
})
export class AplicacionesComponent {

}
