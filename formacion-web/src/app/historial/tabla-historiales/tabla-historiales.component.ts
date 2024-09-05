import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Historial} from '../../../models';
import { DatosService } from '../../../services/datos.service';

@Component({
  selector: 'app-tabla-historiales',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './tabla-historiales.component.html',
  styleUrl: './tabla-historiales.component.css'
})
export class TablaHistorialesComponent {
  datosHistorial: Historial[]=[];
  displayedColumns = ['id_cambio', 'usuario', 'cambio', 'fecha'];

  dataSource: MatTableDataSource<Historial> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datosService.obtenerHistoriales().subscribe((datos: Historial[]) => {
      this.datosHistorial = datos.map((hist: Historial) => {
        return new Historial(
          hist.id_cambio,
          hist.usuario,
          hist.cambio,
          hist.fecha
        );
      });

      this.dataSource = new MatTableDataSource(this.datosHistorial);
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
 