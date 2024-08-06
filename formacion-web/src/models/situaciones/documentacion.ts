import { IDocumentacion } from "../../interfaces/situaciones/i-documentacion";

export class Documentacion implements IDocumentacion{

    id: number;
    documentacion: string;

    constructor(id: number, documentacion: string) {
        this.id = id;
        this.documentacion = documentacion;
    }

}
