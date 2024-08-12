import { IComentarioSituacion } from "../../interfaces/situaciones/i-comentariosituacion";

export class ComentarioSituacion implements IComentarioSituacion{
    idSit: number;
    idCom: number;
    com: string;

    constructor (idSit: number, idCom: number, com: string){
        this.idSit=idSit,
        this.idCom=idCom,
        this.com=com
    }
}
