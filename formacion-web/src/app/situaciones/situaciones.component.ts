import { Component } from '@angular/core';
import { TablaSituacionesComponent } from "./tabla-situaciones/tabla-situaciones.component";

@Component({
  selector: 'app-situaciones',
  standalone: true,
  imports: [TablaSituacionesComponent],
  templateUrl: './situaciones.component.html',
  styleUrl: './situaciones.component.css'
})

export class SituacionesComponent {

}
