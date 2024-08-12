import { Area, Criticidad, Responsable, Subarea, Tecnologia, TecnologiaInterfaz, Tipo, VolumenEvolutivo, VolumenUsuarios } from "../../models/aplicaciones";

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
