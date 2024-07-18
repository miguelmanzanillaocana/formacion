import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TablaDatosComponent } from "./aplicaciones/tabla-datos/tabla-datos.component";
import { InsertFormComponent } from "./crear-aplicacion/insert-form/insert-form.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaDatosComponent, InsertFormComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formacion';

  constructor (private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => console.log(event))
  }
}
