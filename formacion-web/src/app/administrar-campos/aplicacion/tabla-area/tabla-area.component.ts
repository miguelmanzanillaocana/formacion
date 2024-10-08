import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Area } from '../../../../models';
import { DatosService } from '../../../../services/datos.service';
import { InsertAreaDialogComponent } from './insert-area-dialog/insert-area-dialog.component';

@Component({
  selector: 'app-tabla-area',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginator],
  templateUrl: './tabla-area.component.html',
  styleUrl: './tabla-area.component.css'
})

export class TablaAreaComponent {
  datosArea: Area[] = [];

  displayedColumns = ['id', 'area'];
  dataSource: MatTableDataSource<Area> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerAreas().subscribe((datos: Area[]) => {
      this.datosArea = datos as Area[];
      this.dataSource = new MatTableDataSource(this.datosArea);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  abrirDialogoInsertArea() {
    const dialogRef = this.dialog.open(InsertAreaDialogComponent, {
      width: '500px'
    })
  }
}
