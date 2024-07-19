import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos.service';
import { Aplicacion } from '../../classes/aplicacion';
import { SortDirective } from '../../directive/sort.directive';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [CommonModule, SortDirective, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})

export class TablaDatosComponent {
datosTabla: Aplicacion[]=[];
datos: Observable<Aplicacion[]>;
datosFiltrados: Observable<Aplicacion[]>;

formGroup: FormGroup;

  constructor(private datosService: DatosService, private fb: FormBuilder){ 
    this.formGroup = fb.group({ filter: ['']})

    this.datos = this.datosService.obtenerAplicaciones();

    this.datosFiltrados = this.formGroup.get('filter')!.valueChanges.pipe(
      startWith(''),
      withLatestFrom(this.datos),
      map(([val, datos]) => !val ? datos : datos.filter((x) => x.codAplic.toLowerCase().includes(val)))
    )

    this.datosFiltrados.subscribe((datos: Aplicacion[]) => {
      this.datosTabla = datos as Aplicacion[];
    })
  }

  ngOnInit(): void{
    
  }

  borrarAplicacion(cod: string) {
    this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
      if (resultado) {
        console.log('Aplicación eliminada con éxito');
      } else {
        console.log('Error al eliminar la aplicación');
      }
    });
  }
}
