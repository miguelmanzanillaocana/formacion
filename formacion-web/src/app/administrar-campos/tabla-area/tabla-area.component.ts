import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Area } from '../../../models/area';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-area',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tabla-area.component.html',
  styleUrl: './tabla-area.component.css'
})
export class TablaAreaComponent {
  datosArea: Area[]=[];

  displayedColumns = ['id', 'area']
  dataSource: MatTableDataSource<Area>

  constructor(private datosService: DatosService) {
    this.datosService.obtenerAreas().subscribe((datos: Area[]) => {
      this.datosArea = datos as Area[];
    })
    this.dataSource = new MatTableDataSource(this.datosArea);
  }

}
