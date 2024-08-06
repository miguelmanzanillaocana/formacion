import { Component, ViewChild } from '@angular/core';
import { Subarea } from '../../../models/aplicaciones/subarea';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InsertSubareaDialogComponent } from './insert-subarea-dialog/insert-subarea-dialog.component';

@Component({ 
  selector: 'app-tabla-subarea',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  templateUrl: './tabla-subarea.component.html',
  styleUrl: './tabla-subarea.component.css'
})

export class TablaSubareaComponent {
  datosSubarea: Subarea[]=[]

  displayedColumns = ['id', 'subarea']
  dataSource: MatTableDataSource<Subarea> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService,private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerSubareas().subscribe((datos: Subarea[]) => {
      this.datosSubarea = datos as Subarea[];
      this.dataSource = new MatTableDataSource(this.datosSubarea);
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

  abrirDialogoInsertSubArea() {
    const dialogRef = this.dialog.open(InsertSubareaDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe((res) => {
      location.reload();
    });
  }
}
