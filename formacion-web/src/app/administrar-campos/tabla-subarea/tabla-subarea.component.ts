import { Component } from '@angular/core';
import { Subarea } from '../../../models/subarea';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-subarea',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './tabla-subarea.component.html',
  styleUrl: './tabla-subarea.component.css'
})
export class TablaSubareaComponent {
  datosSubarea: Subarea[]=[]

  displayedColumns = ['id', 'subarea']
  dataSource: MatTableDataSource<Subarea>

  constructor(private datosService: DatosService) {
    this.datosService.obtenerSubareas().subscribe((datos: Subarea[]) => {
      this.datosSubarea = datos as Subarea[];
    })

    this.dataSource = new MatTableDataSource(this.datosSubarea);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
