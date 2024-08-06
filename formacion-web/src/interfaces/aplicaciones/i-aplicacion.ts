import { Area } from "../../models/aplicaciones/area";
import { Criticidad } from "./i-criticidad";
import { Responsable } from "../../models/aplicaciones/responsable";
import { Subarea } from "../../models/aplicaciones/subarea";
import { Tecnologia } from "../../models/aplicaciones/tecnologia";
import { TecnologiaInterfaz } from "./i-tecnologia-interfaz";
import { Tipo } from "./i-tipo";
import { VolumenEvolutivo } from "./i-volumen-evolutivo";
import { VolumenUsuarios } from "./i-volumen-usuarios";

export interface IAplicacion {
    id: number;
    codAplic: string;
    nombAplic: string;
    area: Area;
    subArea: Subarea;
    resp: Responsable;
    tecn: Tecnologia;
    criti: Criticidad;
    volEvol: VolumenEvolutivo;
    volUsu: VolumenUsuarios;
    tipo: Tipo;
    tecInt: TecnologiaInterfaz;
}
