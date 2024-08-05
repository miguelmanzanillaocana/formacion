import { ITecnologia } from "../interfaces/i-tecnologia";

export class Tecnologia implements ITecnologia{
    id: number;
    tecnologia: string;

    constructor(id: number, tecnologia: string){
        this.id=id;
        this.tecnologia=tecnologia;
    }
}
