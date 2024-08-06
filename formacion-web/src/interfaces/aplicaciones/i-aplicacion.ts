import { Area } from "../../models/aplicaciones/area";
import { Criticidad } from "../../models/aplicaciones/criticidad";
import { Responsable } from "../../models/aplicaciones/responsable";
import { Subarea } from "../../models/aplicaciones/subarea";
import { Tecnologia } from "../../models/aplicaciones/tecnologia";
import { TecnologiaInterfaz } from "../../models/aplicaciones/tecnologia-interfaz";
import { Tipo } from "../../models/aplicaciones/tipo";
import { VolumenEvolutivo } from "../../models/aplicaciones/volumen-evolutivo";
import { VolumenUsuarios } from "../../models/aplicaciones/volumen-usuarios";

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
