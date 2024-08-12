import { ISituacion } from "../../interfaces/situaciones/i-situacion";
import { Despliegue, Documentacion, Informes, Maven, Pruebas, ServicioTerceros, Testing } from "./";

export class Situacion implements ISituacion{
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

    constructor(codApli: string, pro: number, gruGit: number, master: string, develop: string, actualizado: number,
            produccion: string, despl: Despliegue, was: number, maven: Maven, doc: Documentacion, pruebas: Pruebas, test: Testing,
            inf: Informes, terc: ServicioTerceros){
        this.id = 0;
        this.codApli = codApli;
        this.pro = pro;
        this.gruGit = gruGit;
        this.master = master;
        this.develop = develop;
        this.actualizado = actualizado;
        this.produccion = produccion;
        this.despl = despl;
        this.was = was;
        this.maven = maven;
        this.doc = doc;
        this.pruebas = pruebas;
        this.test = test;
        this.inf = inf;
        this.terc = terc;
    }
}
