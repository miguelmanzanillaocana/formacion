import { IRol } from "../../interfaces/autentificacion/i-role";

export class Rol implements IRol{
    id: number;
    nombre: string;

    constructor(id: number, nombre: string){
        this.id=id,
        this.nombre=nombre
    }
}
