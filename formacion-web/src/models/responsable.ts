import { IResponsable } from "../interfaces/i-responsable";

export class Responsable implements IResponsable{
    id: number;
    responsable: string;

    constructor(id: number, responsable: string) {
        this.id = id;
        this.responsable = responsable;
    }
}
