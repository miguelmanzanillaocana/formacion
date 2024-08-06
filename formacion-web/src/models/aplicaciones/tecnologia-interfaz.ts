import { ITecnologiaInterfaz } from "../../interfaces/aplicaciones/i-tecnologia-interfaz";

export class TecnologiaInterfaz implements ITecnologiaInterfaz{
    
    id: number;
    tecnologiaInterfaz: string;

    constructor(id: number, tecnologiaInterfaz: string) {
        this.id = id;
        this.tecnologiaInterfaz = tecnologiaInterfaz;
    }
    
}
