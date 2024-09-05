import { UserUpdate } from "../../models";

export interface IHistorialIns{
    id_cambio: number,
    usuario: UserUpdate,
    cambio:string,
    fecha:string
}