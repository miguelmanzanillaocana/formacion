import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Responsable } from '../../interfaces/responsable';
import { DatosService } from '../../datos.service';
import { CommonModule } from '@angular/common';
import { Criticidad } from '../../interfaces/criticidad';
import { Tecnologia } from '../../interfaces/tecnologia';
import { VolumenUsuarios } from '../../interfaces/volumen-usuarios';
import { VolumenEvolutivo } from '../../interfaces/volumen-evolutivo';
import { Tipo } from '../../interfaces/tipo';
import { TecnologiaInterfaz } from '../../interfaces/tecnologia-interfaz';

@Component({
  selector: 'app-insert-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './insert-form.component.html',
  styleUrl: './insert-form.component.css'
})

export class InsertFormComponent {
  datosResp: Responsable[]=[];
  datosCriti: Criticidad[]=[];
  datosTecno: Tecnologia[]=[];
  datosVUser: VolumenUsuarios[]=[];
  datosVEvo: VolumenEvolutivo[]=[];
  datosTipo: Tipo[]=[];
  datosTecnoInt: TecnologiaInterfaz[]=[];
  aplicacionForm: FormGroup
  
  ngOnInit(): void{
    this.datosService.obtenerResponsables().subscribe((datosResp: Responsable[]) => {
      this.datosResp = datosResp as Responsable[];
    })
    this.datosService.obtenerCriticidades().subscribe((datosCriti: Criticidad[]) => {
      this.datosCriti = datosCriti as Criticidad[];
    })
    this.datosService.obtenerTecnologias().subscribe((datosTecno: Tecnologia[]) => {
      this.datosTecno = datosTecno as Tecnologia[];
    })
    this.datosService.obtenerVolumenesUsuarios().subscribe((datosVUser: VolumenUsuarios[]) => {
      this.datosVUser = datosVUser as VolumenUsuarios[];
    })
    this.datosService.obtenerVolumenesEvolutivo().subscribe((datosVEvo: VolumenEvolutivo[]) => {
      this.datosVEvo = datosVEvo as VolumenEvolutivo[];
    })
    this.datosService.obtenerTipos().subscribe((datosTipo: Tipo[]) => {
      this.datosTipo = datosTipo as Tipo[];
    })
    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: TecnologiaInterfaz[]) => {
      this.datosTecnoInt = datosTecnoInt as TecnologiaInterfaz[];
    })
  }

  constructor(private datosService: DatosService ,private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codApli: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      nombApli: new FormControl(''),
      nombArea: new FormControl(''),
      subArea: new FormControl(''),
      resp: new FormControl(0),
      tecn: new FormControl(0),
      criti: new FormControl(1),
      volEvol: new FormControl(0),
      volUsu: new FormControl(0),
      tipo: new FormControl(0),
      tecnInt: new FormControl(0)
    })
  }

  onSubmit(){
    console.log(this.aplicacionForm.value)
  }

}
