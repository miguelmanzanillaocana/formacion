import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos.service';
import { IAplicacion } from '../../interfaces/AplicacionInterface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})

export class TablaDatosComponent {
  datos: IAplicacion[]=[];

  constructor(private datosService: DatosService, private dialog: MatDialog){  }

  ngOnInit(): void{
    this.actualizarTabla();
  }

  actualizarTabla(){
    this.datosService.obtenerAplicaciones().subscribe((datos: IAplicacion[]) => {
      this.datos = datos as IAplicacion[];
    })
  }

  borrarAplicacion(cod: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: { codigo: cod }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
          if (resultado) {
            this.actualizarTabla();
            console.log('Aplicación eliminada con éxito');
          } else {
            console.log('Error al eliminar la aplicación');
          }
        });
      }
    });
  }

}
