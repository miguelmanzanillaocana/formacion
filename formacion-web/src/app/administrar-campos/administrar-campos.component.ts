import { Component } from '@angular/core';
import { TecnologiaInterfaz } from '../../models/aplicaciones/tecnologia-interfaz';
import { Tipo } from '../../models/aplicaciones/tipo';
import { DatosService } from '../../services/datos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaAreaComponent } from "./tabla-area/tabla-area.component";
import { TablaSubareaComponent } from "./tabla-subarea/tabla-subarea.component";
import { TablaResponsableComponent } from "./tabla-responsable/tabla-responsable.component";
import { TablaTecnologiaComponent } from "./tabla-tecnologia/tabla-tecnologia.component";
import { TablaTipoComponent } from "./tabla-tipo/tabla-tipo.component";
import { TablaTecnologiaInterfazComponent } from "./tabla-tecnologia-interfaz/tabla-tecnologia-interfaz.component";

@Component({
  selector: 'app-administrar-campos',
  standalone: true,
  imports: [MatTableModule, TablaAreaComponent, TablaSubareaComponent, TablaResponsableComponent, TablaTecnologiaComponent, TablaTipoComponent, TablaTecnologiaInterfazComponent],
  templateUrl: './administrar-campos.component.html',
  styleUrl: './administrar-campos.component.css'
})
export class AdministrarCamposComponent {
  datosTipo: Tipo[]=[];
  datosTecInt: TecnologiaInterfaz[]=[];

  ngOnInit(): void{

    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: TecnologiaInterfaz[]) => {
      this.datosTecInt = datosTecnoInt as TecnologiaInterfaz[];
    })
  }

  constructor(private datosService: DatosService) {
    
  }
}
