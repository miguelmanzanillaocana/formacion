import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formacion-web';
}
