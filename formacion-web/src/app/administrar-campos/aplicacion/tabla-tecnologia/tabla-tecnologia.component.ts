import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../../../../services/datos.service';
import { InsertTecnologiaDialogComponent } from './insert-tecnologia-dialog/insert-tecnologia-dialog.component';
import { Tecnologia } from '../../../../models';


@Component({ 
  selector: 'app-tabla-tecnologia',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatPaginator],
  templateUrl: './tabla-tecnologia.component.html',
  styleUrl: './tabla-tecnologia.component.css'
})

export class TablaTecnologiaComponent {

  datosTecnologia: Tecnologia[]=[];

  displayedColumns = ['id','tecnologia'];
  dataSource: MatTableDataSource<Tecnologia> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService,private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerTecnologias().subscribe((datos: Tecnologia[]) => {
      this.datosTecnologia = datos as Tecnologia[];
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
    const dialogRef = this.dialog.open(InsertTecnologiaDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe((res) => {
      location.reload();
    });
  }
}
