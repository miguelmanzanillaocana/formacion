import { Component } from '@angular/core';
import { InsertFormComponent } from "./insert-form/insert-form.component";

@Component({
  selector: 'app-crear-aplicacion',
  standalone: true,
  imports: [InsertFormComponent],
  templateUrl: './crear-aplicacion.component.html',
  styleUrl: './crear-aplicacion.component.css'
})
export class CrearAplicacionComponent {

}
