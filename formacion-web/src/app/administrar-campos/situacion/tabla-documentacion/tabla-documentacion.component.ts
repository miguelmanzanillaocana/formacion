import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Documentacion } from '../../../../models';
import { DatosService } from '../../../../services/datos.service';
import { InsertDocumentDialogComponent } from './insert-document-dialog/insert-document-dialog.component';


@Component({
  selector: 'app-tabla-documentacion',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  templateUrl: './tabla-documentacion.component.html',
  styleUrl: './tabla-documentacion.component.css'
})
export class TablaDocumentacionComponent {
  datosDocumentacion: Documentacion[] = [];
 
  displayedColumns = ['id', 'documentacion'];
  dataSource: MatTableDataSource<Documentacion> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerDocumentacion().subscribe((datos: Documentacion[]) => {
      this.datosDocumentacion = datos as Documentacion[];
      this.dataSource = new MatTableDataSource(this.datosDocumentacion);
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
  
  abrirDialogoInsertDocumentacion() {
    const dialogRef = this.dialog.open(InsertDocumentDialogComponent, {
      width: '500px'
    })
  }
}
