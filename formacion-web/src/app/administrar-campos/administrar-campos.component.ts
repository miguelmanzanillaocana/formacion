import { Component } from '@angular/core';
import { ITecnologiaInterfaz } from '../../interfaces/aplicaciones/i-tecnologia-interfaz';
import { ITipo } from '../../interfaces/aplicaciones/i-tipo';
import { DatosService } from '../../services/datos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaAreaComponent } from "./tabla-area/tabla-area.component";
import { TablaSubareaComponent } from "./tabla-subarea/tabla-subarea.component";
import { TablaResponsableComponent } from "./tabla-responsable/tabla-responsable.component";
import { TablaTecnologiaComponent } from "./tabla-tecnologia/tabla-tecnologia.component";

@Component({
  selector: 'app-administrar-campos',
  standalone: true,
  imports: [MatTableModule, TablaAreaComponent, TablaSubareaComponent, TablaResponsableComponent, TablaTecnologiaComponent],
  templateUrl: './administrar-campos.component.html',
  styleUrl: './administrar-campos.component.css'
})
export class AdministrarCamposComponent {
  datosTipo: ITipo[]=[];
  datosTecInt: ITecnologiaInterfaz[]=[];

  ngOnInit(): void{

    this.datosService.obtenerTipos().subscribe((datosTipo: ITipo[]) => {
      this.datosTipo = datosTipo as ITipo[];
    })

    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: ITecnologiaInterfaz[]) => {
      this.datosTecInt = datosTecnoInt as ITecnologiaInterfaz[];
    })
  }

  constructor(private datosService: DatosService) {
    
  }
}
