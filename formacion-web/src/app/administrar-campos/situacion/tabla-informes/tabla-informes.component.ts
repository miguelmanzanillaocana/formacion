import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Informes } from '../../../../models';
import { DatosService } from '../../../../services/datos.service';
import { InsertInformesDialogComponent } from './insert-informes-dialog/insert-informes-dialog.component';


@Component({
  selector: 'app-tabla-informes',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  templateUrl: './tabla-informes.component.html',
  styleUrl: './tabla-informes.component.css'
})
export class TablaInformesComponent {
  datosInformes: Informes[] = [];
 
  displayedColumns = ['id', 'informes'];
  dataSource: MatTableDataSource<Informes> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerInformes().subscribe((datos: Informes[]) => {
      this.datosInformes = datos as Informes[];
      this.dataSource = new MatTableDataSource(this.datosInformes);
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
  
  abrirDialogoInsertInforme() {
     const dialogRef = this.dialog.open(InsertInformesDialogComponent, {
       width: '500px'
     })
  }
}
 