import { ICriticidad } from "../../interfaces/aplicaciones/i-criticidad";

export class Criticidad implements ICriticidad{

    id: number;
    criticidad: string;

    constructor(id: number, criticidad: string){
        this.id = id;
        this.criticidad = criticidad;
    }

}
