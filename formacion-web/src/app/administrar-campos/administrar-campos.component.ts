import { Component } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaAreaComponent, TablaSubareaComponent, TablaResponsableComponent, TablaTecnologiaComponent, TablaTipoComponent, TablaTecnologiaInterfazComponent } from "./aplicacion";
import { TablaDespliegueComponent, TablaDocumentacionComponent, TablaInformesComponent } from "./situacion";

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
