import { Component } from '@angular/core';
import { FormularioUserComponent } from "./formulario-user/formulario-user.component";
import { TablaUserComponent } from "./tabla-user/tabla-user.component";

@Component({
  selector: 'app-crear-user',
  standalone: true,
  imports: [FormularioUserComponent, TablaUserComponent],
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {

}
