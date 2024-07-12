import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaDatosComponent } from "./tabla-datos/tabla-datos.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InsertFormComponent } from "./insert-form/insert-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaDatosComponent, NavbarComponent, InsertFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formacion-web';
}
