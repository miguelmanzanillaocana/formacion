import { Area } from "../../models/aplicaciones/area";
import { ICriticidad } from "./i-criticidad";
import { Responsable } from "../../models/aplicaciones/responsable";
import { Subarea } from "../../models/aplicaciones/subarea";
import { Tecnologia } from "../../models/aplicaciones/tecnologia";
import { ITecnologiaInterfaz } from "./i-tecnologia-interfaz";
import { ITipo } from "./i-tipo";
import { IVolumenEvolutivo } from "./i-volumen-evolutivo";
import { IVolumenUsuarios } from "./i-volumen-usuarios";

export interface IAplicacion {
    id: number;
    codAplic: string;
    nombAplic: string;
    area: Area;
    subArea: Subarea;
    resp: Responsable;
    tecn: Tecnologia;
    criti: ICriticidad;
    volEvol: IVolumenEvolutivo;
    volUsu: IVolumenUsuarios;
    tipo: ITipo;
    tecInt: ITecnologiaInterfaz;
}
