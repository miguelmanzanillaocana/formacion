import { Despliegue } from "../../models/situaciones/despliegue";
import { Documentacion } from "../../models/situaciones/documentacion";
import { Informes } from "../../models/situaciones/informes";
import { Maven } from "../../models/situaciones/maven";
import { Pruebas } from "../../models/situaciones/pruebas";
import { ServicioTerceros } from "../../models/situaciones/servicio-terceros";
import { Testing } from "../../models/situaciones/testing";

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