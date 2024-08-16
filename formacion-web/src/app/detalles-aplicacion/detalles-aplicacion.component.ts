import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Aplicacion, Area, Criticidad, Responsable, Subarea, Tecnologia, TecnologiaInterfaz, Tipo, VolumenEvolutivo, VolumenUsuarios } from '../../models/aplicaciones';
import { ComentarioSituacion, Situacion } from '../../models/situaciones';
import { Comun } from '../../models/comun';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ComentarioService } from '../../services/comentario.service';
import { ComentariosComponent } from "./comentarios/comentarios.component";

@Component({
  selector: 'app-detalles-aplicacion',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, ComentariosComponent],
  templateUrl: './detalles-aplicacion.component.html',
  styleUrl: './detalles-aplicacion.component.css'
})

export class DetallesAplicacionComponent implements OnInit {
  area!: Area;
  subarea!: Subarea;
  resp!: Responsable;
  tecn!: Tecnologia;
  criti!: Criticidad;
  volEvol!: VolumenEvolutivo;
  volUsu!: VolumenUsuarios;
  tipo!: Tipo;
  tecInt!: TecnologiaInterfaz;
  aplicacion: Aplicacion = new Aplicacion('', '', this.area, this.subarea, this.resp, this.tecn, this.criti, this.volEvol, this.volUsu, this.tipo, this.tecInt);
  situacion!: Situacion;
  cod!: string;
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  params: any;

  constructor(private route: ActivatedRoute, private router: Router, private datosService: DatosService, private comentarioService: ComentarioService) {
    this.params = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
      this.cod = this.params.data;
      this.comentarioService.setCodAplic(this.cod);
      this.datosService.obtenerAplicacionPorCod(this.cod).subscribe(aplicacion => {
        this.aplicacion = aplicacion as Aplicacion;
        this.comentarioService.setIdAplic(this.aplicacion.id)
      });

      this.datosService.obtenerSituacionPorCod(this.cod).subscribe(situacion => {
        this.situacion = situacion as Situacion;
      });

      this.datosService.obtenerComentariosSituacion(this.cod).subscribe((datos: ComentarioSituacion[]) => {
        this.comentarioService.setComentarios(datos);
      });
  }


  volver() {
    this.router.navigate(['/aplicaciones']);
  }


}
