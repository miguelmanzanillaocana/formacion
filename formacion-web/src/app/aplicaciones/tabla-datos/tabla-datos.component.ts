import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})

export class TablaDatosComponent {
  datos: any[]=[];

  constructor(private datosService: DatosService){  }

  ngOnInit(): void{
    this.datosService.obtenerAplicaciones().subscribe((datos: any[]) => {
      this.datos = datos as any[];
    })
  }
}
