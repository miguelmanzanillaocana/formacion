import { IAuthority } from "../../interfaces/autentificacion/i-authority";

export class Authority implements IAuthority{
    authority: string;

    constructor(auth:string){
        this.authority=auth
    }
}
