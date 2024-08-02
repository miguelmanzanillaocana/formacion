import { ISubArea } from "../interfaces/i-subarea";

export class Subarea implements ISubArea{
    id: number;
    subarea: string;

    constructor(id: number, subarea: string){
        this.id = id;
        this.subarea = subarea;
    }
}
