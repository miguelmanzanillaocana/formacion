import { IInformes } from "../../interfaces/situaciones/i-informes";

export class Informes implements IInformes{

    id: number;
    informes: string;

    constructor(id: number, informes: string) {
        this.id = id;
        this.informes = informes;
    }

}
