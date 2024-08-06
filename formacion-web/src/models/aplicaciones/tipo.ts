import { ITipo } from "../../interfaces/aplicaciones/i-tipo";

export class Tipo implements ITipo{

    id: number;
    tipo: string;

    constructor(id: number, tipo: string) {
        this.id = id;
        this.tipo = tipo;
    }

}
