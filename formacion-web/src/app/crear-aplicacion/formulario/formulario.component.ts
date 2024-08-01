import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Responsable } from '../../../interfaces/responsable';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { Criticidad } from '../../../interfaces/criticidad';
import { Tecnologia } from '../../../interfaces/tecnologia';
import { VolumenUsuarios } from '../../../interfaces/volumen-usuarios';
import { VolumenEvolutivo } from '../../../interfaces/volumen-evolutivo';
import { Tipo } from '../../../interfaces/tipo';
import { TecnologiaInterfaz } from '../../../interfaces/tecnologia-interfaz';
import { Aplicacion } from '../../../models/aplicacion';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrearDialogComponent } from './crear-dialog/crear-dialog.component';
import { Area } from '../../../interfaces/area';
import { SubArea } from '../../../interfaces/subArea';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  datosResp: Responsable[]=[];
  datosCriti: Criticidad[]=[];
  datosTecno: Tecnologia[]=[];
  datosVUser: VolumenUsuarios[]=[];
  datosVEvo: VolumenEvolutivo[]=[];
  datosTipo: Tipo[]=[];
  datosTecnoInt: TecnologiaInterfaz[]=[];
  aplicacionForm: FormGroup;
  
  area!: Area;
  subarea!: SubArea;
  resp!:Responsable;
  apl: Aplicacion = new Aplicacion('', '', this.area, this.subarea, this.resp, 0, 0, 0, 0, 0, 0);
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

  constructor(private datosService: DatosService, private dialog: MatDialog, private router: Router, private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codAplic: new FormControl(this.apl.codAplic, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])),
      nombAplic: new FormControl(this.apl.nombAplic),
      nombArea: new FormControl(this.apl.area.id_Area),
      subArea: new FormControl(this.apl.subArea.id),
      resp: new FormControl(this.apl.resp.id),
      tecn: new FormControl(this.apl.tecn.id),
      criti: new FormControl(this.apl.criti.id),
      volEvol: new FormControl(this.apl.volEvol.id),
      volUsu: new FormControl(this.apl.volUsu.id),
      tipo: new FormControl(this.apl.tipo.id),
      tecInt: new FormControl(this.apl.tecInt.id)
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

    const dialogRef = this.dialog.open(CrearDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/aplicaciones']);
    });
  }

}
