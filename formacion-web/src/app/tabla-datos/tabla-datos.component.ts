import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})
export class TablaDatosComponent implements OnInit{
  datos: any[]=[];
  constructor(private datosService: DatosService){}
  ngOnInit(): void {
    this.datosService.obtenerDatos().subscribe((datos: any[]) => {
      this.datos = datos as any[];
    });
  }
}
