import { ISituacionString } from "../../interfaces/situaciones/i-situacion-string";

export class SituacionString implements ISituacionString{
    id: number;
    codApli: string;
    pro: number;
    gruGit: number;
    master: string;
    develop: string;
    actualizado: number;
    produccion: string;
    despl: string;
    was: number;
    maven: string;
    doc: string;
    pruebas: string;
    test: string;
    inf: string;
    terc: string;

    constructor(codApli: string, pro: number, gruGit: number, master: string, develop: string, actualizado: number,
        produccion: string, despl: string, was: number, maven: string, doc: string, pruebas: string, test: string,
        inf: string, terc: string){
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
