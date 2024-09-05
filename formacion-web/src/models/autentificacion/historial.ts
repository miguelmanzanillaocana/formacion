import { IHistorial } from "../../interfaces/autentificacion/i-historial";
import { UserModel } from "./user-model";

export class Historial implements IHistorial {
    id_cambio: number;
    usuario: UserModel;
    cambio: string;
    fecha: string;

    constructor(id:number, usuario:UserModel, cambio: string, fecha:string){
        this.id_cambio=id;
        this.usuario=usuario;
        this.cambio=cambio;
        this.fecha=fecha;
    }
}
