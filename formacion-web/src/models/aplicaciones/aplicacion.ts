import { IAplicacion } from "../../interfaces/aplicaciones/i-aplicacion";
import { Area } from "./area";
import { Criticidad } from "./criticidad";
import { Responsable } from "./responsable";
import { Subarea } from "./subarea";
import { Tecnologia } from "./tecnologia";
import { TecnologiaInterfaz } from "./tecnologia-interfaz";
import { Tipo } from "./tipo";
import { VolumenEvolutivo } from "./volumen-evolutivo";
import { VolumenUsuarios } from "./volumen-usuarios";

export class Aplicacion implements IAplicacion {

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

    constructor(codAplic: string, nombAplic: string, area: Area, subArea: Subarea, resp: Responsable,
         tecn: Tecnologia, criti: Criticidad, volEvol: VolumenEvolutivo, volUsu: VolumenUsuarios, tipo: Tipo, tecInt: TecnologiaInterfaz) {
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
