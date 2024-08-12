import { Despliegue, Documentacion, Informes, Maven, Pruebas, ServicioTerceros, Testing } from "../../models/situaciones";

export interface ISituacion {
    id: number;
    codApli: string;
    pro: number;
    gruGit: number;
    master: string;
    develop: string;
    actualizado: number;
    produccion: string;
    despl: Despliegue;
    was: number;
    maven: Maven;
    doc: Documentacion;
    pruebas: Pruebas;
    test: Testing;
    inf: Informes;
    terc: ServicioTerceros;
}