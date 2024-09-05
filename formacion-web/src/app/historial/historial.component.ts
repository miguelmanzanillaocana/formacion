import { Component } from '@angular/core';
import { TablaHistorialesComponent } from "./tabla-historiales/tabla-historiales.component";

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [TablaHistorialesComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

}
