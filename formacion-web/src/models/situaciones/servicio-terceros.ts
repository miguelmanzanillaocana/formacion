import { IServicioTerceros } from "../../interfaces/situaciones/i-servicio-terceros"

export class ServicioTerceros implements IServicioTerceros{
    id: number;
    servicioTerceros: string;

    constructor(id: number, servicioTerceros: string) {
        this.id = id;
        this.servicioTerceros = servicioTerceros;
    }
}
