import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Area } from '../../../models/area';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { InsertAreaDialogComponent } from './insert-area-dialog/insert-area-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-area',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginator],
  templateUrl: './tabla-area.component.html',
  styleUrl: './tabla-area.component.css'
})
export class TablaAreaComponent {
  datosArea: Area[]=[];

  displayedColumns = ['id', 'area']
  dataSource: MatTableDataSource<Area>

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) {
    this.datosService.obtenerAreas().subscribe((datos: Area[]) => {
      this.datosArea = datos as Area[];
    })
    this.dataSource = new MatTableDataSource(this.datosArea);
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
    });
  }
}

