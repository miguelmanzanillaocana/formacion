import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Responsable } from '../../../../models';
import { DatosService } from '../../../../services/datos.service';
import { InsertResponsableDialogComponent } from './insert-responsable-dialog/insert-responsable-dialog.component';

@Component({
  selector: 'app-tabla-responsable',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginator],
  templateUrl: './tabla-responsable.component.html',
  styleUrl: './tabla-responsable.component.css'
})

export class TablaResponsableComponent {
  datosResponsable: Responsable[]=[];

  displayedColumns = ['id', 'responsable'];
  dataSource: MatTableDataSource<Responsable> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private dialog: MatDialog, private datosService: DatosService) { }

  ngOnInit() {
    this.datosService.obtenerResponsables().subscribe((datos: Responsable[]) => {
      this.datosResponsable = datos as Responsable[];
      this.dataSource = new MatTableDataSource(this.datosResponsable);
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

  abrirDialogoInsertResponsable() {
    const dialogRef = this.dialog.open(InsertResponsableDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe((res) => {
      location.reload();
    });
  }
}
