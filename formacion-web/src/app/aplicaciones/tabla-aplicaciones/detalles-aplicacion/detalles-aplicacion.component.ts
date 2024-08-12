import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../../../services/datos.service';
import { Aplicacion } from '../../../../models/aplicaciones';
import { Situacion } from '../../../../models/situaciones';
import { Comun } from '../../../../models/comun';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-aplicacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-aplicacion.component.html',
  styleUrl: './detalles-aplicacion.component.css'
})

export class DetallesAplicacionComponent implements OnInit {
  aplicacion!: Aplicacion;
  situacion!: Situacion;
  cod!: string;
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];

  constructor(private route: ActivatedRoute, private datosService: DatosService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cod = params['cod'];

      this.datosService.obtenerAplicacionPorCod(this.cod).subscribe(aplicacion => {
        this.aplicacion = aplicacion as Aplicacion;
        console.log(this.aplicacion);
      });

      this.datosService.obtenerSituacionPorCod(this.cod).subscribe(situacion => {
        this.situacion = situacion as Situacion;
        console.log(this.situacion)
      });
      
    });
  }
}
