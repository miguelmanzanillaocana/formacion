import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Area } from '../../../models/area';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { InsertAreaDialogComponent } from './insert-area-dialog/insert-area-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-area',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tabla-area.component.html',
  styleUrl: './tabla-area.component.css'
})
export class TablaAreaComponent {

  datosArea: Area[]=[];

  displayedColumns = ['id', 'area']
  dataSource: MatTableDataSource<Area>


  constructor(private datosService: DatosService,private dialog: MatDialog) {
    this.datosService.obtenerAreas().subscribe((datos: Area[]) => {
      this.datosArea = datos as Area[];
    })
    this.dataSource = new MatTableDataSource(this.datosArea);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  insertarArea() {
    const dialogRef = this.dialog.open(InsertAreaDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.datosService.insertarArea().subscribe((resultado) => {
        //   if (resultado) {
        //     console.log('Aplicación insertado con éxito');
        //     location.reload();
        //   } else {
        //     console.log('Error al insertar la aplicación');
        //   }
        // });
      }
    });
  }
}

