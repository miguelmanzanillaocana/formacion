import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tecnologia } from '../../../models/tecnologia';
import { DatosService } from '../../../services/datos.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tabla-tecnologia',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatPaginator],
  templateUrl: './tabla-tecnologia.component.html',
  styleUrl: './tabla-tecnologia.component.css'
})
export class TablaTecnologiaComponent {

  datosTecnologia: Tecnologia[]=[];

  displayedColumns = ['id','tecnologia']
  dataSource: MatTableDataSource<Tecnologia>

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService,private dialog: MatDialog) {
    this.datosService.obtenerTecnologias().subscribe((datos: Tecnologia[]) => {
      this.datosTecnologia = datos as Tecnologia[];
    })
    this.dataSource = new MatTableDataSource(this.datosTecnologia);
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
    throw new Error('Method not implemented.');
  }
}
