import { IAplicacion } from "../../interfaces/aplicaciones/i-aplicacion";
import { Area } from "./area";
import { ICriticidad } from "../../interfaces/aplicaciones/i-criticidad";
import { Responsable } from "./responsable";
import { Subarea } from "./subarea";
import { Tecnologia } from "./tecnologia";
import { ITecnologiaInterfaz } from "../../interfaces/aplicaciones/i-tecnologia-interfaz";
import { ITipo } from "../../interfaces/aplicaciones/i-tipo";
import { IVolumenEvolutivo } from "../../interfaces/aplicaciones/i-volumen-evolutivo";
import { IVolumenUsuarios } from "../../interfaces/aplicaciones/i-volumen-usuarios";

export class Aplicacion implements IAplicacion {

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

    constructor(codAplic: string, nombAplic: string, area: Area, subArea: Subarea, resp: Responsable,
         tecn: Tecnologia, criti: ICriticidad, volEvol: IVolumenEvolutivo, volUsu: IVolumenUsuarios, tipo: ITipo, tecInt: ITecnologiaInterfaz) {
        this.id = 0;
        this.codAplic = codAplic,
        this.nombAplic = nombAplic,
        this.area = area,
        this.subArea = subArea,
        this.resp = resp,
        this.tecn = tecn,
        this.criti = criti,
        this.volEvol = volEvol,
        this.volUsu = volUsu,
        this.tipo = tipo,
        this.tecInt = tecInt
    }
}
