import { UserModel } from "../../models";

export interface IHistorial{
    id_cambio: number,
    usuario: UserModel,
    cambio:string,
    fecha:string
}