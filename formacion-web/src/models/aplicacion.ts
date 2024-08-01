import { AplicacionInterface } from "../interfaces/Aplicacion";
import { Area } from "../interfaces/area";
import { Criticidad } from "../interfaces/criticidad";
import { Responsable } from "../interfaces/responsable";
import { SubArea } from "../interfaces/subArea";
import { Tecnologia } from "../interfaces/tecnologia";
import { TecnologiaInterfaz } from "../interfaces/tecnologia-interfaz";
import { Tipo } from "../interfaces/tipo";
import { VolumenEvolutivo } from "../interfaces/volumen-evolutivo";
import { VolumenUsuarios } from "../interfaces/volumen-usuarios";

export class Aplicacion implements AplicacionInterface {

    id: number;
    codAplic: string;
    nombAplic: string;
    area: Area;
    subArea: SubArea;
    resp: Responsable;
    tecn: Tecnologia;
    criti: Criticidad;
    volEvol: VolumenEvolutivo;
    volUsu: VolumenUsuarios;
    tipo: Tipo;
    tecInt: TecnologiaInterfaz;

    constructor(codAplic: string, nombAplic: string, area: Area, subArea: SubArea, resp: Responsable,
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
