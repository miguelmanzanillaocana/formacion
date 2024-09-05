import { IHistorialIns } from "../../interfaces/autentificacion/i-historialins";
import { UserUpdate } from "./user-update";

export class HistorialIns implements IHistorialIns{
    id_cambio: number;
    usuario: UserUpdate;
    cambio: string;
    fecha: string;

    constructor(id:number, usuario:UserUpdate, cambio: string, fecha:string){
        this.id_cambio=id;
        this.usuario=usuario;
        this.cambio=cambio;
        this.fecha=fecha;
    }
}
