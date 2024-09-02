import { IToken } from "../../interfaces/autentificacion/i-token";

export class Token implements IToken{

    token: string;

    constructor(token: string){
        this.token = token;
    }
}
