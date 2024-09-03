import { IRegisterDto } from "../../interfaces/autentificacion/i-register";

export class RegisterDto implements IRegisterDto{
    email: string;
    password: string;
    fullName: string;
    role: string

    constructor(email:string, password:string,fullName:string,role: string){
        this.email=email,
        this.password=password
        this.fullName=fullName
        this.role=role
    }
}
