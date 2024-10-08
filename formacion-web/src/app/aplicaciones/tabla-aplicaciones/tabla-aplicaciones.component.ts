import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink, RouterOutlet, RouterState } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../../../services/datos.service';
import { Aplicacion, AplicacionString, Area, Criticidad, Responsable, Subarea, Tecnologia, TecnologiaInterfaz, Tipo, VolumenEvolutivo, VolumenUsuarios } from '../../../models';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HistorialService } from '../../../services/historial.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-aplicaciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule,CommonModule],
  templateUrl: './tabla-aplicaciones.component.html',
  styleUrl: './tabla-aplicaciones.component.css'
})

export class TablaAplicacionesComponent {

  datosAplicacion: AplicacionString[] = [];
  datosAplicacionTemp: AplicacionString[] = [];
  aplicaciones: Aplicacion[] = [];
  displayedColumns = ['codAplic', 'nombAplic', 'area', 'subArea', 'resp', 'tecn', 'criti', 'volEvol', 'volUsu', 'tipo', 'tecInt', 'acciones'];
  dataSource: MatTableDataSource<AplicacionString> = new MatTableDataSource();

  email?: string;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private historialService: HistorialService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.datosService.obtenerAplicaciones().subscribe((datos: Aplicacion[]) => {
      this.aplicaciones = datos as Aplicacion[];
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
    if (sessionStorage.getItem('app.roles') == "ROLE_admin") {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: { codigo: cod }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
            if (resultado) {
              console.log('Aplicación eliminada con éxito');
              this.email = sessionStorage.getItem('app.email') || "";
              this.historialService.insertarBorradoApliacion(this.email, cod).subscribe((res) => {
                console.log(res)
              })
              location.reload();
            } else {
              console.log('Error al eliminar la aplicación');
            }
          });
        }
      });
    } else {
      this.snackBar.open('No tienes suficientes permisos', '', {
        duration: 2500
      })
    }
  }

  informacionAplicacion(cod: string) {
    this.router.navigate(['/detalles-aplicacion'], {
      state: {
        key: 'cod',
        data: cod
      }
    });
  }

  editarAplicacion(dat: any) {
    this.router.navigate(['/editar-aplicacion'], {
      state: {
        key: 'aplicacion',
        data: this.buscarAplicacion(dat)
      }
    })
  }

  buscarAplicacion(cod: string) {
    return this.aplicaciones.find(element => element.codAplic === cod);
  }

}