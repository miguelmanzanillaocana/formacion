import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-crear-aplicacion',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './crearAplicacion.component.html',
  styleUrl: './crearAplicacion.component.css'
})
export class CrearAplicacionComponent {

}
