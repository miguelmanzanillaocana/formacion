import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Despliegue } from '../../../../models';
import { DatosService } from '../../../../services/datos.service';
import { InsertDespliegueDialogComponent } from './insert-despliegue-dialog/insert-despliegue-dialog.component';


@Component({
  selector: 'app-tabla-despliegue',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  templateUrl: './tabla-despliegue.component.html',
  styleUrl: './tabla-despliegue.component.css'
})
export class TablaDespliegueComponent {
  datosDespliegue: Despliegue[] = [];

  displayedColumns = ['id', 'despliegue'];
  dataSource: MatTableDataSource<Despliegue> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
 
  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerDespliegues().subscribe((datos: Despliegue[]) => {
      this.datosDespliegue = datos as Despliegue[];
      this.dataSource = new MatTableDataSource(this.datosDespliegue);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  abrirDialogoInsertDespliegue() {
    const dialogRef = this.dialog.open(InsertDespliegueDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe((res) => {
      location.reload();
    });
  }
}
