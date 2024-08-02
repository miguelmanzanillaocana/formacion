import { IArea } from "../interfaces/i-area";

export class Area implements IArea{
    id_Area: number;
    area: string;

    constructor(id_area: number, area: string){
        this.id_Area = id_area;
        this.area = area;
    }
}
