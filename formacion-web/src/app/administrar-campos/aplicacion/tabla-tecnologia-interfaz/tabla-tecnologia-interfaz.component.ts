import { CommonModule } from '@angular/common';
import { TecnologiaInterfaz } from '../../../../models/aplicaciones/tecnologia-interfaz';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatosService } from '../../../../services/datos.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertTecnologiaInterfazDialogComponent } from './insert-tecnologia-interfaz-dialog/insert-tecnologia-interfaz-dialog.component';
 
@Component({
  selector: 'app-tabla-tecnologia-interfaz',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatPaginator],
  templateUrl: './tabla-tecnologia-interfaz.component.html',
  styleUrl: './tabla-tecnologia-interfaz.component.css'
})
export class TablaTecnologiaInterfazComponent {
  datosTecnologia: TecnologiaInterfaz[]=[];

  displayedColumns = ['id','tecnologiaInterfaz'];
  dataSource: MatTableDataSource<TecnologiaInterfaz> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService,private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerTecnologiaInterfaz().subscribe((datos: TecnologiaInterfaz[]) => {
      this.datosTecnologia = datos as TecnologiaInterfaz[];
      this.dataSource = new MatTableDataSource(this.datosTecnologia);
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
  abrirDialogoInsertTecnologia() {
    const dialogRef = this.dialog.open(InsertTecnologiaInterfazDialogComponent, {
       width: '500px'
     }).afterClosed().subscribe((res) => {
       location.reload();
     });
  }
}