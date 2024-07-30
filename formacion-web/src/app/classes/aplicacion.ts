import { AplicacionInterface } from "../interfaces/AplicacionInterface";

export class Aplicacion implements AplicacionInterface {

    id: number;
    codAplic: string;
    nombAplic: string;
    nombArea: number;
    subArea: number;
    resp: number;
    tecn: number;
    criti: number;
    volEvol: number;
    volUsu: number;
    tipo: number;
    tecInt: number;

    constructor(codAplic: string, nombAplic: string, nombArea: number, subArea: number, resp: number,
         tecn: number, criti: number, volEvol: number, volUsu: number, tipo: number, tecInt: number) {
        this.id = 0;
        this.codAplic = codAplic,
        this.nombAplic = nombAplic,
        this.nombArea = nombArea,
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
