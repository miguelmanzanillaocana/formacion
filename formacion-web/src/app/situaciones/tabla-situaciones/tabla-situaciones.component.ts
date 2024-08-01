import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Situacion } from '../../../models/situacion';
import { Observable } from 'rxjs';
import { DatosService } from '../../../services/datos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabla-situaciones',
  standalone: true,
  imports: [MatSortModule,MatPaginatorModule,MatTableModule,MatFormFieldModule,RouterLink,RouterOutlet ],
  templateUrl: './tabla-situaciones.component.html',
  styleUrl: './tabla-situaciones.component.css'
})
export class TablaSituacionesComponent {

  datosSituacion: Situacion[]=[];
  situacionesService: Observable<Situacion[]>;
  displayedColumns = ['codApli', 'pro', 'gruGit', 'master', 'develop', 'actualizado', 'produccion', 'despl', 'was', 'maven', 'doc', 'pruebas', 'test', 'inf', 'terc'];
  dataSource: MatTableDataSource<Situacion>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
formGroup: any;

  constructor(private datosService: DatosService) {
    this.situacionesService = this.datosService.obtenerSituaciones();

    this.situacionesService.subscribe((datos: Situacion[]) => {
      this.datosSituacion = datos as Situacion[];
    })

    this.dataSource = new MatTableDataSource(this.datosSituacion);
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.datosSituacion);
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
