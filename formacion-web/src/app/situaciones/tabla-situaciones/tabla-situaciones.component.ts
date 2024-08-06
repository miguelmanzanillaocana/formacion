import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Situacion } from '../../../models/situaciones/situacion';
import { DatosService } from '../../../services/datos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Comun } from '../../../models/comun';

@Component({
  selector: 'app-tabla-situaciones',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, RouterLink, RouterOutlet],
  templateUrl: './tabla-situaciones.component.html',
  styleUrl: './tabla-situaciones.component.css'
})
export class TablaSituacionesComponent {
  datosSituacion: Situacion[]=[];
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  situacionService!: Observable<Situacion[]>;
  displayedColumns = ['codApli', 'pro', 'gruGit', 'master', 'develop', 'actualizado', 'produccion', 'despl', 'was', 'maven', 'doc', 'pruebas', 'test', 'inf', 'terc','editar'];
  dataSource: MatTableDataSource<Situacion> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerSituaciones().subscribe((datos: Situacion[]) => {
      this.datosSituacion = datos as Situacion[];
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
