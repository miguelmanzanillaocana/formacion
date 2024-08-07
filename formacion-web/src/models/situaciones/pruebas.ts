import { IPlanPruebas } from "../../interfaces/situaciones/i-pruebas";

export class Pruebas implements IPlanPruebas {

    id: number;
    planPruebas: string;

    constructor(id: number, planPruebas: string) {
        this.id = id;
        this.planPruebas = planPruebas;
    }

}
