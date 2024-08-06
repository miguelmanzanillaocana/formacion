import { IComun } from "../interfaces/i-comun";

export class Comun implements IComun{

    id: number;
    valor: string;

    constructor(id: number, valor: string){
        this. id = id;
        this.valor = valor;
    }

}
