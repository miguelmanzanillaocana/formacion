import { IloginUserDto } from "../../interfaces/autentificacion/i-login";

export class LoginUserDto implements IloginUserDto{
    email: string;
    password: string;

    constructor(email:string, password:string){
        this.email=email,
        this.password=password
    }
}
