import { IAplicacion } from "../interfaces/i-aplicacion";
import { Area } from "./area";
import { Criticidad } from "../interfaces/criticidad";
import { Responsable } from "../models/responsable";
import { Subarea } from "../models/subarea";
import { Tecnologia } from "../models/tecnologia";
import { TecnologiaInterfaz } from "../interfaces/tecnologia-interfaz";
import { Tipo } from "../interfaces/tipo";
import { VolumenEvolutivo } from "../interfaces/volumen-evolutivo";
import { VolumenUsuarios } from "../interfaces/volumen-usuarios";

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
