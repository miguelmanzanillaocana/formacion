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
import { Aplicacion } from '../../classes/aplicacion';

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
  aplicacionForm: FormGroup;

  apl: Aplicacion = new Aplicacion('', '', '', '', 0, 0, 0, 0, 0, 0, 0);
  aplicacion!: Aplicacion;
  
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

  constructor(private datosService: DatosService, private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codAplic: new FormControl(this.apl.codAplic, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])),
      nombAplic: new FormControl(this.apl.nombAplic),
      nombArea: new FormControl(this.apl.nombArea),
      subArea: new FormControl(this.apl.subArea),
      resp: new FormControl(this.apl.resp),
      tecn: new FormControl(this.apl.tecn),
      criti: new FormControl(this.apl.criti),
      volEvol: new FormControl(this.apl.volEvol),
      volUsu: new FormControl(this.apl.volUsu),
      tipo: new FormControl(this.apl.tipo),
      tecInt: new FormControl(this.apl.tecInt)
    });
  }

  onSubmit(){
    this.apl = new Aplicacion(
      this.aplicacionForm.get('codAplic')?.value,
      this.aplicacionForm.get('nombAplic')?.value,
      this.aplicacionForm.get('nombArea')?.value,
      this.aplicacionForm.get('subArea')?.value,
      this.aplicacionForm.get('resp')?.value,
      this.aplicacionForm.get('tecn')?.value,
      this.aplicacionForm.get('criti')?.value,
      this.aplicacionForm.get('volEvol')?.value,
      this.aplicacionForm.get('volUsu')?.value,
      this.aplicacionForm.get('tipo')?.value,
      this.aplicacionForm.get('tecInt')?.value
    );

    this.datosService.insertarAplicacion(this.apl).subscribe(aplicacion => this.aplicacion = aplicacion);
    console.log(this.aplicacion);
  }

}
