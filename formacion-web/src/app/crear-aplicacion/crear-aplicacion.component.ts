import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-crear-aplicacion',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './crear-aplicacion.component.html',
  styleUrl: './crear-aplicacion.component.css'
})
export class CrearAplicacionComponent {

}
