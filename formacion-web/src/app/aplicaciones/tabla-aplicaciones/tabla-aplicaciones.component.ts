import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink, RouterOutlet, RouterState } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../../../services/datos.service';
import { Aplicacion, AplicacionString, Area, Subarea } from '../../../models';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HistorialService } from '../../../services/historial.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { EmpFilter } from '../../../interfaces/aplicaciones/empfilter';

@Component({
  selector: 'app-tabla-aplicaciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatExpansionModule, MatSelectModule],
  templateUrl: './tabla-aplicaciones.component.html',
  styleUrl: './tabla-aplicaciones.component.css'
})

export class TablaAplicacionesComponent {
  readonly panelOpenState = signal(false);

  filterDictionary = new Map<string, string>();
  defaultValue = "All";
  dataSourceFilters: MatTableDataSource<AplicacionString> = new MatTableDataSource();
  empFilters: EmpFilter[] = [];
  datosArea: string[] = []
  datosSubarea: string[] = []
  datosResp: string[] = [];
  datosCriti: string[] = [];
  datosTecn: string[] = [];
  datosVUsu: string[] = [];
  datosVEvo: string[] = [];
  datosTipo: string[] = [];
  datosTecInt: string[] = [];

  datosAplicacion: AplicacionString[] = [];
  aplicaciones: Aplicacion[] = [];
  displayedColumns = ['codAplic', 'nombAplic', 'area', 'subArea', 'resp', 'tecn', 'criti', 'volEvol', 'volUsu', 'tipo', 'tecInt', 'acciones'];
  dataSource: MatTableDataSource<AplicacionString> = new MatTableDataSource();

  email?: string;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private historialService: HistorialService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.datosService.obtenerAplicaciones().subscribe((datos: Aplicacion[]) => {
      this.aplicaciones = datos as Aplicacion[];
      this.datosAplicacion = datos.map((aplicacion: Aplicacion) => {
        return new AplicacionString(
          aplicacion.codAplic,
          aplicacion.nombAplic,
          aplicacion.area.area,
          aplicacion.subArea.subarea,
          aplicacion.resp.responsable,
          aplicacion.tecn.tecnologia,
          aplicacion.criti.criticidad,
          aplicacion.volEvol.volumenEvolutivo,
          aplicacion.volUsu.volumenUsuarios,
          aplicacion.tipo.tipo,
          aplicacion.tecInt.tecnologiaInterfaz
        );
      });
      this.dataSource = new MatTableDataSource(this.datosAplicacion);
      this.dataSourceFilters = new MatTableDataSource(this.datosAplicacion)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    //APLICACIONES
    this.datosService.obtenerAreas().subscribe((datosArea: Area[]) => {
      this.datosArea.push("All");
      datosArea.forEach(a => {
        if (a.area!="") {
          this.datosArea.push(a.area);
        }
        
      });
    })

     this.datosService.obtenerSubareas().subscribe((datosSubarea: Subarea[]) => {
      this.datosSubarea.push("All");
      datosSubarea.forEach(a => {
        if (a.subarea!="") {
          this.datosSubarea.push(a.subarea);
        }
      });
   })

    // this.datosService.obtenerResponsables().subscribe((datosResp: Responsable[]) => {
    //   this.datosResp = datosResp as Responsable[];
    // })

    // this.datosService.obtenerCriticidades().subscribe((datosCriti: Criticidad[]) => {
    //   this.datosCriti = datosCriti as Criticidad[];
    // })

    // this.datosService.obtenerTecnologias().subscribe((datosTecno: Tecnologia[]) => {
    //   this.datosTecn = datosTecno as Tecnologia[];
    // })

    // this.datosService.obtenerVolumenesUsuarios().subscribe((datosVUsu: VolumenUsuarios[]) => {
    //   this.datosVUsu = datosVUsu as VolumenUsuarios[];
    // })

    // this.datosService.obtenerVolumenesEvolutivo().subscribe((datosVEvo: VolumenEvolutivo[]) => {
    //   this.datosVEvo = datosVEvo as VolumenEvolutivo[];
    // })

    // this.datosService.obtenerTipos().subscribe((datosTipo: Tipo[]) => {
    //   this.datosTipo = datosTipo as Tipo[];
    // })

    // this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: TecnologiaInterfaz[]) => {
    //   this.datosTecInt = datosTecnoInt as TecnologiaInterfaz[];
    // })

    this.dataSourceFilters.filterPredicate = function (record, filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for (let [key, value] of map) {
        isMatch = (value == "All") || (record[key as keyof AplicacionString] == value);
        if (!isMatch) return false;
      }
      return isMatch;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  applyEmpFilter(ob: MatSelectChange, empfilter: EmpFilter) {

    this.filterDictionary.set(empfilter.name, ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));

    this.dataSourceFilters.filter = jsonString;
    //console.log(this.filterValues);
  }


  borrarAplicacion(cod: string) {
    if (sessionStorage.getItem('app.roles') == "ROLE_admin") {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: { codigo: cod }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.datosService.borrarAplicacion(cod).subscribe((resultado) => {
            if (resultado) {
              console.log('Aplicación eliminada con éxito');
              this.email = sessionStorage.getItem('app.email') || "";
              this.historialService.insertarBorradoApliacion(this.email, cod).subscribe((res) => {
                console.log(res)
              })
              location.reload();
            } else {
              console.log('Error al eliminar la aplicación');
            }
          });
        }
      });
    } else {
      this.snackBar.open('No tienes suficientes permisos', '', {
        duration: 2500
      })
    }
  }

  informacionAplicacion(cod: string) {
    this.router.navigate(['/detalles-aplicacion'], {
      state: {
        key: 'cod',
        data: cod
      }
    });
  }

  editarAplicacion(dat: any) {
    this.router.navigate(['/editar-aplicacion'], {
      state: {
        key: 'aplicacion',
        data: this.buscarAplicacion(dat)
      }
    })
  }

  buscarAplicacion(cod: string) {
    return this.aplicaciones.find(element => element.codAplic === cod);
  }

}