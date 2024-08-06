import { IPlanPruebas } from "../../interfaces/situaciones/i-pruebas";

export class Pruebas implements IPlanPruebas {

    id: number;
    pruebas: string;

    constructor(id: number, pruebas: string) {
        this.id = id;
        this.pruebas = pruebas;
    }

}
