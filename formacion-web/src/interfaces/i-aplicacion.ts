import { Area } from "../models/area";
import { Criticidad } from "./criticidad";
import { Responsable } from "../models/responsable";
import { Subarea } from "../models/subarea";
import { Tecnologia } from "../models/tecnologia";
import { TecnologiaInterfaz } from "./tecnologia-interfaz";
import { Tipo } from "./tipo";
import { VolumenEvolutivo } from "./volumen-evolutivo";
import { VolumenUsuarios } from "./volumen-usuarios";

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
