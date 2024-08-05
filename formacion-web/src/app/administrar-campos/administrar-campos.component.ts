import { Component } from '@angular/core';
import { TecnologiaInterfaz } from '../../interfaces/tecnologia-interfaz';
import { Tipo } from '../../interfaces/tipo';
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
  datosTipo: Tipo[]=[];
  datosTecInt: TecnologiaInterfaz[]=[];

  ngOnInit(): void{

    this.datosService.obtenerTipos().subscribe((datosTipo: Tipo[]) => {
      this.datosTipo = datosTipo as Tipo[];
    })

    this.datosService.obtenerTecnologiaInterfaz().subscribe((datosTecnoInt: TecnologiaInterfaz[]) => {
      this.datosTecInt = datosTecnoInt as TecnologiaInterfaz[];
    })
  }

  constructor(private datosService: DatosService) {
    
  }
}
