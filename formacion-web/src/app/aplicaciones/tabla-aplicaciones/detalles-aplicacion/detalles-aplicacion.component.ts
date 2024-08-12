import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../../../services/datos.service';
import { Aplicacion } from '../../../../models/aplicaciones';
import { ComentarioSituacion, Situacion } from '../../../../models/situaciones';
import { Comun } from '../../../../models/comun';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalles-aplicacion',
  standalone: true,
  imports: [CommonModule,MatCardModule,ReactiveFormsModule],
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
  comentarioForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private datosService: DatosService, private fb: FormBuilder) {
    this.params = this.router.getCurrentNavigation()?.extras.state;
    this.comentarioForm= this.fb.group({
      comentario: new FormControl('',Validators.required)
    })
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

      this.datosService.obtenerComentariosSituacion(this.cod).subscribe((datos: ComentarioSituacion[]) =>{
        this.datosComentario=datos;
        console.log(this.datosComentario)
      });
    });
  }
  volver() {
    this.router.navigate(['/aplicaciones']);
  }
}
