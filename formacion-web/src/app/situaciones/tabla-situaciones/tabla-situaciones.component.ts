import { Component, ViewChild } from '@angular/core';
import { Situacion } from '../../classes/situacion';
import { MatCell, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatosService } from '../../datos/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-situaciones',
  standalone: true,
  imports: [ MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef, MatFooterRow, MatFooterRowDef ],
  templateUrl: './tabla-situaciones.component.html',
  styleUrl: './tabla-situaciones.component.css'
})
export class TablaSituacionesComponent {

  datosSituacion: Situacion[]=[];
  situacionesService: Observable<Situacion[]>;
  displayedColumns = ['Codigo', 'Prosa', 'Grupo en GIT', 'Versión Master', 'Versión Develop',
    'Actualizado en GIT', 'Versión Produccion', 'Solicitado despliegue', 'Versión WAS', 'Maven',
    'Sitio de la Documentación', 'Existe Plan de Pruebas', 'Testing/Creando Pruebas', 'Tipo Informes',
    'Acceso a Servicios de Terceros'];
  dataSource: MatTableDataSource<Situacion>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private datosService: DatosService) {
    this.situacionesService = this.datosService.obtenerSituaciones();

    this.situacionesService.subscribe((datos: Situacion[]) => {
      this.datosSituacion = datos as Situacion[];
    })

    this.dataSource = new MatTableDataSource(this.datosSituacion);
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
