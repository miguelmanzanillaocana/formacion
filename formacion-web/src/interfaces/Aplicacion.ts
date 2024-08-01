import { Area } from "./area";
import { Criticidad } from "./criticidad";
import { Responsable } from "./responsable";
import { SubArea } from "./subArea";
import { Tecnologia } from "./tecnologia";
import { TecnologiaInterfaz } from "./tecnologia-interfaz";
import { Tipo } from "./tipo";
import { VolumenEvolutivo } from "./volumen-evolutivo";
import { VolumenUsuarios } from "./volumen-usuarios";

export interface AplicacionInterface {
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
}
