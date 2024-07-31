import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos/datos.service';
import { Aplicacion } from '../../classes/aplicacion';
import { SortDirective } from '../../directive/sort.directive';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith, withLatestFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tabla-aplicaciones',
  standalone: true,
  imports: [CommonModule, SortDirective, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './tabla-aplicaciones.component.html',
  styleUrl: './tabla-aplicaciones.component.css'
})

export class TablaAplicacionesComponent{
datosTabla: Aplicacion[]=[];
datos!: Observable<Aplicacion[]>;
datosFiltrados!: Observable<Aplicacion[]>;

formGroup: FormGroup;

  constructor(private datosService: DatosService, private dialog: MatDialog, private fb: FormBuilder){ 
    this.formGroup = this.fb.group({ filter: ['']})
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  actualizarTabla(){
    this.datos = this.datosService.obtenerAplicaciones();
    this.datosFiltrados = this.formGroup.get('filter')!.valueChanges.pipe(
      startWith(""),
      withLatestFrom(this.datos),
      map(([val, datos]) => !val ? datos : datos.filter((x) => x.codAplic.toLowerCase().includes(val)))
    )

    this.datosFiltrados.subscribe((datos: Aplicacion[]) => {
      this.datosTabla = datos as Aplicacion[];
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
            console.log('Aplicación eliminada con éxito');
            location.reload();
          } else {
            console.log('Error al eliminar la aplicación');
          }
        });
      }
    });
  }

}

