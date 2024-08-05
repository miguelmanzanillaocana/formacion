import { Aplicacion } from '../../../models/aplicacion';
import { AplicacionString } from '../../../models/aplicacion-string';
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
  datosAplicacion: AplicacionString[] = [];
  displayedColumns = ['codAplic', 'nombAplic', 'area', 'subArea', 'resp', 'tecn', 'criti', 'volEvol', 'volUsu', 'tipo', 'tecInt','acciones'];
  dataSource: MatTableDataSource<AplicacionString>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.datosAplicacion);
  }
 
  ngOnInit(): void {
    this.datosService.obtenerAplicaciones().subscribe((datos: Aplicacion[]) => {
      this.datosAplicacion = datos.map((aplicacion: Aplicacion) => {
        return new AplicacionString(
          aplicacion.codAplic,
          aplicacion.nombAplic,
          aplicacion.area.area,
          aplicacion.subArea.subarea,
          aplicacion.resp.responsable,
          aplicacion.tecn.tecnologia,
          aplicacion.criti.criticidad,
          aplicacion.volEvol.volumenEvolutivo,
          aplicacion.volUsu.volumenUsuarios,
          aplicacion.tipo.tipo,
          aplicacion.tecInt.tecnologiaInterfaz
        );
      });
      this.dataSource = new MatTableDataSource(this.datosAplicacion);
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