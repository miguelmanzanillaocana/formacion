import { Aplicacion } from '../../../models/aplicacion';
import { Observable } from 'rxjs';

import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatosService } from '../../../services/datos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-aplicaciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule],
  templateUrl: './tabla-aplicaciones.component.html',
  styleUrl: './tabla-aplicaciones.component.css'
})

export class TablaAplicacionesComponent {
  datosAplicacion: Aplicacion[] = [];
  aplicacionService!: Observable<Aplicacion[]>;
  displayedColumns = ['codAplic', 'nombAplic', 'area', 'subArea', 'resp', 'tecn', 'criti', 'volEvol', 'volUsu', 'tipo', 'tecInt','acciones'];
  dataSource: MatTableDataSource<Aplicacion>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) {
    this.aplicacionService = this.datosService.obtenerAplicaciones();

    this.aplicacionService.subscribe((datos: Aplicacion[]) => {
      this.datosAplicacion = datos as Aplicacion[];
    })

    this.dataSource = new MatTableDataSource(this.datosAplicacion);
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case "codAplic":
          return item.codAplic;
        case "nombAplic":
          return item.nombAplic;
        case "area":
          return item.area.area;
        case "subArea":
          return item.subArea.subarea;
        case "resp":
          return item.resp.responsable;
        case "tecn":
          return item.tecn.tecnologia;
        case "criti":
          return item.criti.criticidad;
        case "volEvol":
          return item.volEvol.volumenEvolutivo;
        case "volUsu":
          return item.volUsu.volumenUsuarios;
        case "tipo":
          return item.tipo.tipo;
        case "tecInt":
          return item.tecInt.tecnologiaInterfaz;
        default:
          return '';
      }
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.datosAplicacion);
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

  borrarAplicacion(cod: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: { codigo: cod }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
          if (resultado) {
            console.log('Aplicación eliminada con éxito');
            location.reload();
          } else {
            console.log('Error al eliminar la aplicación');
          }
        });
      }
    });
  }

}