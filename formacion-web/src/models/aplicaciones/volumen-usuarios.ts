import { IVolumenUsuarios } from "../../interfaces/aplicaciones/i-volumen-usuarios";

export class VolumenUsuarios implements IVolumenUsuarios{

    id: number;
    volumenUsuarios: string;

    constructor(id: number, volumenUsuarios: string) {
        this.id = id;
        this.volumenUsuarios = volumenUsuarios;
    }

}
