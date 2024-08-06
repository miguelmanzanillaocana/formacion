import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Responsable } from '../../../models/aplicaciones/responsable';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { ICriticidad } from '../../../interfaces/aplicaciones/i-criticidad';
import { Tecnologia } from '../../../models/aplicaciones/tecnologia';
import { IVolumenUsuarios } from '../../../interfaces/aplicaciones/i-volumen-usuarios';
import { IVolumenEvolutivo } from '../../../interfaces/aplicaciones/i-volumen-evolutivo';
import { ITipo } from '../../../interfaces/aplicaciones/i-tipo';
import { ITecnologiaInterfaz } from '../../../interfaces/aplicaciones/i-tecnologia-interfaz';
import { Aplicacion } from '../../../models/aplicaciones/aplicacion';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrearDialogComponent } from './crear-dialog/crear-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Area } from '../../../models/aplicaciones/area';
import { Subarea } from '../../../models/aplicaciones/subarea';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  datosArea: Area[]=[]
  datosSubarea: Subarea[]=[]
  datosResp: Responsable[]=[];
  datosCriti: ICriticidad[]=[];
  datosTecn: Tecnologia[]=[];
  datosVUsu: IVolumenUsuarios[]=[];
  datosVEvo: IVolumenEvolutivo[]=[];
  datosTipo: ITipo[]=[];
  datosTecInt: ITecnologiaInterfaz[]=[];
  aplicacionForm: FormGroup;
  
  area!: Area;
  subarea!: Subarea;
  resp!:Responsable;
  tecn!: Tecnologia;
  criti!: ICriticidad;
  volEvol!: IVolumenEvolutivo;
  volUsu!: IVolumenUsuarios;
  tipo!: ITipo;
  tecInt!: ITecnologiaInterfaz;
  apl: Aplicacion = new Aplicacion('', '', this.area, this.subarea, this.resp, this.tecn, this.criti, this.volEvol, this.volUsu, this.tipo, this.tecInt);
  aplicacion!: Aplicacion;

  constructor(private datosService: DatosService, private dialog: MatDialog, private router: Router,private snackBar:MatSnackBar, private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codAplic: new FormControl(this.apl.codAplic, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])),
      nombAplic: new FormControl(this.apl.nombAplic),
      area: new FormControl(this.apl.area),
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

  ngOnInit(){
    this.datosService.obtenerAreas().subscribe((datosArea: Area[]) => {
      this.datosArea = datosArea as Area[];
    })

    this.datosService.obtenerSubareas().subscribe((datosSubarea: Subarea[]) => {
      this.datosSubarea = datosSubarea as Subarea[];
    })

    this.datosService.obtenerResponsables().subscribe((datosResp: Responsable[]) => {
      this.datosResp = datosResp as Responsable[];
    })

    this.datosService.obtenerCriticidades().subscribe((datosCriti: ICriticidad[]) => {
      this.datosCriti = datosCriti as ICriticidad[];
    })

    this.datosService.obtenerTecnologias().subscribe((datosTecno: Tecnologia[]) => {
      this.datosTecn = datosTecno as Tecnologia[];
    })

    this.datosService.obtenerVolumenesUsuarios().subscribe((datosVUsu: IVolumenUsuarios[]) => {
      this.datosVUsu = datosVUsu as IVolumenUsuarios[];
    })

    this.datosService.obtenerVolumenesEvolutivo().subscribe((datosVEvo: IVolumenEvolutivo[]) => {
      this.datosVEvo = datosVEvo as IVolumenEvolutivo[];
    })

    this.datosService.obtenerTipos().subscribe((datosTipo: ITipo[]) => {
      this.datosTipo = datosTipo as ITipo[];
    })

    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: ITecnologiaInterfaz[]) => {
      this.datosTecInt = datosTecnoInt as ITecnologiaInterfaz[];
    })
  }

  onSubmit(){
    this.area = this.datosArea[this.aplicacionForm.get('area')?.value] || this.datosArea[0];
    this.subarea = this.datosSubarea[this.aplicacionForm.get('subArea')?.value] || this.datosSubarea[0];
    this.resp = this.datosResp[this.aplicacionForm.get('resp')?.value] || this.datosResp[0];
    this.tecn = this.datosTecn[this.aplicacionForm.get('tecn')?.value] || this.datosTecn[0];
    this.criti = this.datosCriti[this.aplicacionForm.get('criti')?.value] || this.datosCriti[0];
    this.volEvol = this.datosVEvo[this.aplicacionForm.get('volEvol')?.value] || this.datosVEvo[0];
    this.volUsu = this.datosVUsu[this.aplicacionForm.get('volUsu')?.value] || this.datosVUsu[0];
    this.tipo = this.datosTipo[this.aplicacionForm.get('tipo')?.value] || this.datosTipo[0];
    this.tecInt = this.datosTecInt[this.aplicacionForm.get('tecInt')?.value] || this.datosTecInt[0];

    this.apl = new Aplicacion(
      this.aplicacionForm.get('codAplic')?.value,
      this.aplicacionForm.get('nombAplic')?.value,
      this.area,
      this.subarea,
      this.resp,
      this.tecn,
      this.criti,
      this.volEvol,
      this.volUsu,
      this.tipo,
      this.tecInt
    );

    this.datosService.insertarAplicacion(this.apl).subscribe(aplicacion => this.aplicacion = aplicacion);

    // const dialogRef = this.dialog.open(CrearDialogComponent, {
    //   width: '350px',
    // });

    // dialogRef.afterClosed().subscribe(() => {
    //   this.router.navigate(['/aplicaciones']);
    // });
    this.router.navigate(['/aplicaciones']);
    this.snackBar.open('Aplicacion ' + this.apl.codAplic + ' creada', '', {
      duration: 2500
    })
  }

  cancelarInsert() {
    this.router.navigate(['/aplicaciones']);
  }

}
