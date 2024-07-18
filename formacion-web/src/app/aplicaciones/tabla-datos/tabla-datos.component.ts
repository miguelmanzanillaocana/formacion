import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos.service';
import { Aplicacion } from '../../interfaces/aplicacion';


@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})

export class TablaDatosComponent {
  datos: Aplicacion[]=[];

  constructor(private datosService: DatosService){  }

  ngOnInit(): void{
    this.datosService.obtenerAplicaciones().subscribe((datos: Aplicacion[]) => {
      this.datos = datos as Aplicacion[];
    })
  }
  borrarAplicacion(cod: string) {
    this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
      if (resultado) {
        console.log('Aplicación eliminada con éxito');
      } else {
        console.log('Error al eliminar la aplicación');
      }
    });
  }
}
