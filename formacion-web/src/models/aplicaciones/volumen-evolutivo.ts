import { IVolumenEvolutivo } from "../../interfaces/aplicaciones/i-volumen-evolutivo";

export class VolumenEvolutivo implements IVolumenEvolutivo{

    id: number;
    volumenEvolutivo: string;

    constructor(id: number, volumenEvolutivo: string){
        this.id = id;
        this.volumenEvolutivo = volumenEvolutivo;
    }

}
