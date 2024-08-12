import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../../../services/datos.service';
import { Aplicacion } from '../../../../models/aplicaciones';
import { ComentarioSituacion, Situacion } from '../../../../models/situaciones';
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
  datosComentario: ComentarioSituacion[]=[];
  cod!: string;
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  params: any;

  constructor(private route: ActivatedRoute, private router: Router, private datosService: DatosService) {
    this.params = this.router.getCurrentNavigation()?.extras.state;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cod = this.params.data;

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
};
