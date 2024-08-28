import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Situacion, SituacionString } from '../../../models/situaciones';
import { DatosService } from '../../../services/datos.service';
import { Comun } from '../../../models/comun';

@Component({
  selector: 'app-tabla-situaciones',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './tabla-situaciones.component.html',
  styleUrl: './tabla-situaciones.component.css'
})

export class TablaSituacionesComponent {
  datosSituacion: SituacionString[] = [];
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  displayedColumns = ['codApli', 'pro', 'gruGit', 'master', 'develop', 'actualizado', 'produccion', 'despl', 'was', 'maven', 'doc', 'pruebas', 'test', 'inf', 'terc'];
  dataSource: MatTableDataSource<SituacionString> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerSituaciones().subscribe((datos: Situacion[]) => {
      this.datosSituacion = datos.map((situacion: Situacion) => {
        return new SituacionString(
          situacion.codApli,
          situacion.pro,
          situacion.gruGit,
          situacion.master,
          situacion.develop,
          situacion.actualizado,
          situacion.produccion,
          situacion.despl.despliegue,
          situacion.was,
          situacion.maven.maven,
          situacion.doc.documentacion,
          situacion.pruebas.planPruebas,
          situacion.test.testing,
          situacion.inf.informes,
          situacion.terc.serviciosTerceros 
        );
      });

      this.dataSource = new MatTableDataSource(this.datosSituacion);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
