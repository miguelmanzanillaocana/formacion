import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosService } from '../../../services/datos.service';
import { Aplicacion, Area, Criticidad, Responsable, Subarea, Tecnologia, TecnologiaInterfaz, Tipo, VolumenEvolutivo, VolumenUsuarios } from '../../../models/aplicaciones';
import { Despliegue, Documentacion, Informes, Maven, Pruebas, ServicioTerceros, Situacion, Testing } from '../../../models/situaciones';
import { delay, pipe } from 'rxjs';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  state: any;

  aplicacionForm: FormGroup;
  datosArea: Area[] = []
  datosSubarea: Subarea[] = []
  datosResp: Responsable[] = [];
  datosCriti: Criticidad[] = [];
  datosTecn: Tecnologia[] = [];
  datosVUsu: VolumenUsuarios[] = [];
  datosVEvo: VolumenEvolutivo[] = [];
  datosTipo: Tipo[] = [];
  datosTecInt: TecnologiaInterfaz[] = [];

  area!: Area;
  subarea!: Subarea;
  resp!: Responsable;
  tecn!: Tecnologia;
  criti!: Criticidad;
  volEvol!: VolumenEvolutivo;
  volUsu!: VolumenUsuarios;
  tipo!: Tipo;
  tecInt!: TecnologiaInterfaz;
  apl: Aplicacion = new Aplicacion('', '', this.area, this.subarea, this.resp, this.tecn, this.criti, this.volEvol, this.volUsu, this.tipo, this.tecInt);
  aplicacion!: Aplicacion;

  situacionForm: FormGroup;
  datosDespl: Despliegue[] = [];
  datosMaven: Maven[] = [];
  datosDoc: Documentacion[] = [];
  datosPrueba: Pruebas[] = [];
  datosTest: Testing[] = [];
  datosInf: Informes[] = [];
  datosTerc: ServicioTerceros[] = [];

  desp!: Despliegue;
  mav!: Maven;
  doc!: Documentacion;
  pruebas!: Pruebas;
  test!: Testing;
  inf!: Informes;
  serv!: ServicioTerceros;
  situ: Situacion = new Situacion('', 0, 0, '', '', 0, '', this.desp, 0, this.mav, this.doc, this.pruebas, this.test, this.inf, this.serv)

  constructor(private datosService: DatosService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.state = this.router.getCurrentNavigation()?.extras.state;

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

    this.aplicacionForm.setValue({
      codAplic: this.state.data.codAplic,
      nombAplic: this.state.data.nombAplic,
      area: this.state.data.area.id_Area,
      subArea: this.state.data.subArea.id,
      resp: this.state.data.resp.id,
      tecn: this.state.data.tecn.id,
      criti: this.state.data.criti.id,
      volEvol: this.state.data.volEvol.id,
      volUsu: this.state.data.volUsu.id,
      tipo: this.state.data.tipo.id,
      tecInt: this.state.data.tecInt.id
    })
    
    console.log(this.state.data.codAplic)
    this.datosService.obtenerSituacionPorCod(this.state.data.codAplic).subscribe(situacion => {
      this.situ = situacion as Situacion;
    })

    console.log(this.situ)

    this.situacionForm = this.fb.group({
      prosa: new FormControl(this.situ.pro),
      gruGit: new FormControl(this.situ.gruGit),
      master: new FormControl(this.situ.master),
      develop: new FormControl(this.situ.develop),
      actualizado: new FormControl(this.situ.actualizado),
      produccion: new FormControl(this.situ.produccion),
      desp: new FormControl(this.situ.despl),
      was: new FormControl(this.situ.was),
      maven: new FormControl(this.situ.maven),
      doc: new FormControl(this.situ.doc),
      pruebas: new FormControl(this.situ.pruebas),
      test: new FormControl(this.situ.test),
      inf: new FormControl(this.situ.inf),
      serv: new FormControl(this.situ.terc)
    });

  //   this.situacionForm.setValue({
  //     prosa: this.situ.pro,
  //     gruGit: this.situ.gruGit,
  //     master: this.situ.master,
  //     develop: this.situ.develop,
  //     actualizado: this.situ.actualizado,
  //     produccion: this.situ.produccion,
  //     desp: this.situ.despl,
  //     was: this.situ.was,
  //     maven: this.situ.maven,
  //     doc: this.situ.doc,
  //     pruebas: this.situ.pruebas,
  //     test: this.situ.test,
  //     inf: this.situ.inf,
  //     serv: this.situ.terc
  //   })
  }

  ngOnInit() {
    //APLICACIONES
    this.datosService.obtenerAreas().subscribe((datosArea: Area[]) => {
      this.datosArea = datosArea as Area[];
    })

    this.datosService.obtenerSubareas().subscribe((datosSubarea: Subarea[]) => {
      this.datosSubarea = datosSubarea as Subarea[];
    })

    this.datosService.obtenerResponsables().subscribe((datosResp: Responsable[]) => {
      this.datosResp = datosResp as Responsable[];
    })

    this.datosService.obtenerCriticidades().subscribe((datosCriti: Criticidad[]) => {
      this.datosCriti = datosCriti as Criticidad[];
    })

    this.datosService.obtenerTecnologias().subscribe((datosTecno: Tecnologia[]) => {
      this.datosTecn = datosTecno as Tecnologia[];
    })

    this.datosService.obtenerVolumenesUsuarios().subscribe((datosVUsu: VolumenUsuarios[]) => {
      this.datosVUsu = datosVUsu as VolumenUsuarios[];
    })

    this.datosService.obtenerVolumenesEvolutivo().subscribe((datosVEvo: VolumenEvolutivo[]) => {
      this.datosVEvo = datosVEvo as VolumenEvolutivo[];
    })

    this.datosService.obtenerTipos().subscribe((datosTipo: Tipo[]) => {
      this.datosTipo = datosTipo as Tipo[];
    })

    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: TecnologiaInterfaz[]) => {
      this.datosTecInt = datosTecnoInt as TecnologiaInterfaz[];
    })

    //SITUACIONES
    this.datosService.obtenerDespliegues().subscribe((datosDespl: Despliegue[]) => {
      this.datosDespl = datosDespl as Despliegue[];
    })

    this.datosService.obtenerMavens().subscribe((datosMaven: Maven[]) => {
      this.datosMaven = datosMaven as Maven[];
    })

    this.datosService.obtenerDocumentacion().subscribe((datosDoc: Documentacion[]) => {
      this.datosDoc = datosDoc as Documentacion[]
    })

    this.datosService.obtenerPlanPruebas().subscribe((datosPrueba: Pruebas[]) => {
      this.datosPrueba = datosPrueba as Pruebas[]
    })

    this.datosService.obtenerTesting().subscribe((datosTest: Testing[]) => {
      this.datosTest = datosTest as Testing[]
    })

    this.datosService.obtenerInformes().subscribe((datosInf: Informes[]) => {
      this.datosInf = datosInf as Informes[]
    })

    this.datosService.obtenerServicioTerceros().subscribe((datosTerc: ServicioTerceros[]) => {
      this.datosTerc = datosTerc as ServicioTerceros[]
    })
  }

  onSubmit() {
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

    this.desp = this.datosDespl[this.situacionForm.get('desp')?.value] || this.datosDespl[0];
    this.mav = this.datosMaven[this.situacionForm.get('maven')?.value] || this.datosMaven[0];
    this.doc = this.datosDoc[this.situacionForm.get('doc')?.value] || this.datosDoc[0];
    this.pruebas = this.datosPrueba[this.situacionForm.get('pruebas')?.value] || this.datosPrueba[0];
    this.test = this.datosTest[this.situacionForm.get('test')?.value] || this.datosTest[0];
    this.inf = this.datosInf[this.situacionForm.get('inf')?.value] || this.datosInf[0];
    this.serv = this.datosTerc[this.situacionForm.get('serv')?.value] || this.datosTerc[0];

    this.situ = new Situacion(
      this.aplicacionForm.get('codAplic')?.value,
      this.situacionForm.get('prosa')?.value,
      this.situacionForm.get('gruGit')?.value,
      this.situacionForm.get('master')?.value,
      this.situacionForm.get('develop')?.value,
      this.situacionForm.get('actualizado')?.value,
      this.situacionForm.get('produccion')?.value,
      this.desp,
      this.situacionForm.get('was')?.value,
      this.mav,
      this.doc,
      this.pruebas,
      this.test,
      this.inf,
      this.serv
    );

    this.datosService.insertarAplicacion(this.apl).subscribe(aplicacion => {
      this.aplicacion = aplicacion;
      this.datosService.insertarSituacion(this.situ).subscribe(situ => this.situ = situ);
      this.router.navigate(['/aplicaciones']);
      this.snackBar.open('Aplicacion ' + this.apl.codAplic + ' creada', '', {
        duration: 2500
      })
    });

  }

  cancelarInsert() {
    this.router.navigate(['/aplicaciones']);
  }

}