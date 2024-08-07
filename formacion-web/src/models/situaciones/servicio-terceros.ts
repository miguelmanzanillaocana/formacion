import { IServicioTerceros } from "../../interfaces/situaciones/i-servicio-terceros"

export class ServicioTerceros implements IServicioTerceros{
    id: number;
    serviciosTerceros: string;

    constructor(id: number, serviciosTerceros: string) {
        this.id = id;
        this.serviciosTerceros = serviciosTerceros;
    }
}
