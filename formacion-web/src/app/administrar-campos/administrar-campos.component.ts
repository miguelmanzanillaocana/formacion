import { Component } from '@angular/core';
import { TecnologiaInterfaz } from '../../interfaces/tecnologia-interfaz';
import { Tipo } from '../../interfaces/tipo';
import { Responsable } from '../../interfaces/responsable';
import { Criticidad } from '../../interfaces/criticidad';
import { Tecnologia } from '../../interfaces/tecnologia';
import { VolumenUsuarios } from '../../interfaces/volumen-usuarios';
import { VolumenEvolutivo } from '../../interfaces/volumen-evolutivo';
import { DatosService } from '../../services/datos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaAreaComponent } from "./tabla-area/tabla-area.component";
import { TablaSubareaComponent } from "./tabla-subarea/tabla-subarea.component";

@Component({
  selector: 'app-administrar-campos',
  standalone: true,
  imports: [MatTableModule, TablaAreaComponent, TablaSubareaComponent],
  templateUrl: './administrar-campos.component.html',
  styleUrl: './administrar-campos.component.css'
})
export class AdministrarCamposComponent {
  
  datosResp: Responsable[]=[];
  datosCriti: Criticidad[]=[];
  datosTecn: Tecnologia[]=[];
  datosVUsu: VolumenUsuarios[]=[];
  datosVEvo: VolumenEvolutivo[]=[];
  datosTipo: Tipo[]=[];
  datosTecInt: TecnologiaInterfaz[]=[];

  ngOnInit(): void{
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
  }

  constructor(private datosService: DatosService) {
    
  }
}
