import { IDespliegue } from "../../interfaces/situaciones/i-despliegue";

export class Despliegue implements IDespliegue{

    id: number;
    despliegue: string;

    constructor(id: number, despliegue: string) {
        this.id = id;
        this.despliegue = despliegue;
    }

}
