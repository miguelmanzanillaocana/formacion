import { IloginDto } from "../../interfaces/autentificacion/i-login";

export class LoginDto implements IloginDto{
    email: string;
    password: string;

    constructor(email:string, password:string){
        this.email=email,
        this.password=password
    }
}
