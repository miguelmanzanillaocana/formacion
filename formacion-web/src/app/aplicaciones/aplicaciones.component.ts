import { Component } from '@angular/core';

import { TablaAplicacionesComponent } from "./tablaAplicaciones/tablaAplicaciones.component";

@Component({
  selector: 'app-aplicaciones',
  standalone: true,
  imports: [TablaAplicacionesComponent],
  templateUrl: './aplicaciones.component.html',
  styleUrl: './aplicaciones.component.css'
})
export class AplicacionesComponent {

}
