import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../../../../services/datos.service';
import { Tipo } from '../../../../models/aplicaciones';
import { InsertTipoDialogComponent } from './insert-tipo-dialog/insert-tipo-dialog.component';

@Component({
  selector: 'app-tabla-tipo',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatPaginator],
  templateUrl: './tabla-tipo.component.html',
  styleUrl: './tabla-tipo.component.css'
})

export class TablaTipoComponent {
  datosTipo: Tipo[]=[];
  displayedColumns = ['id','tipo'];
  dataSource: MatTableDataSource<Tipo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private datosService: DatosService,private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerTipos().subscribe((datos: Tipo[]) => {
      this.datosTipo = datos as Tipo[];
      this.dataSource = new MatTableDataSource(this.datosTipo);
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
  
  abrirDialogoInsertTipo() {
    const dialogRef = this.dialog.open(InsertTipoDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe((res) => {
      location.reload();
    });
  }
}
