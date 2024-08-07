import { Component } from '@angular/core';
import { TecnologiaInterfaz } from '../../models/aplicaciones/tecnologia-interfaz';
import { Tipo } from '../../models/aplicaciones/tipo';
import { DatosService } from '../../services/datos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaAreaComponent } from "./aplicacion/tabla-area/tabla-area.component";
import { TablaSubareaComponent } from "./aplicacion/tabla-subarea/tabla-subarea.component";
import { TablaResponsableComponent } from "./aplicacion/tabla-responsable/tabla-responsable.component";
import { TablaTecnologiaComponent } from './aplicacion/tabla-tecnologia/tabla-tecnologia.component';
import { TablaTipoComponent } from "./aplicacion/tabla-tipo/tabla-tipo.component";
import { TablaTecnologiaInterfazComponent } from "./aplicacion/tabla-tecnologia-interfaz/tabla-tecnologia-interfaz.component";
import { TablaDespliegueComponent } from "./situacion/tabla-despliegue/tabla-despliegue.component";
import { TablaDocumentacionComponent } from "./situacion/tabla-documentacion/tabla-documentacion.component";
import { TablaInformesComponent } from "./situacion/tabla-informes/tabla-informes.component";

@Component({
  selector: 'app-administrar-campos',
  standalone: true,
  imports: [MatTableModule, TablaAreaComponent, TablaSubareaComponent, TablaResponsableComponent, TablaTecnologiaComponent, TablaTipoComponent, TablaTecnologiaInterfazComponent, TablaDespliegueComponent, TablaDocumentacionComponent, TablaInformesComponent],
  templateUrl: './administrar-campos.component.html',
  styleUrl: './administrar-campos.component.css'
})
export class AdministrarCamposComponent {

  constructor(private datosService: DatosService) {
    
  }
}
