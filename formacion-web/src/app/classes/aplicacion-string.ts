import { IAplicacionString } from "../interfaces/AplicacionString";

export class AplicacionString implements IAplicacionString{

    id: number;
    codAplic: string;
    nombAplic: string;
    nombArea: string;
    subArea: string;
    resp: string;
    tecn: string;
    criti: string;
    volEvol: string;
    volUsu: string;
    tipo: string;
    tecInt: string;

    constructor(codAplic: string, nombAplic: string, nombArea: string, subArea: string, resp: string,
        tecn: string, criti: string, volEvol: string, volUsu: string, tipo: string, tecInt: string) {
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
