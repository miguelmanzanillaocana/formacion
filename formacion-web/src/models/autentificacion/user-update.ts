import { IUserUpdate } from "../../interfaces/autentificacion/i-userupdate";

export class UserUpdate implements IUserUpdate{
    id: number;
    fullName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    aceptado: boolean;
    role: string;
    
    constructor(fullName: string, email: string, createdAt: string, updatedAt: string, aceptado: boolean, role: string){
        this.id = 0,
        this.fullName = fullName,
        this.email = email,
        this.password = "",
        this.createdAt = createdAt,
        this.updatedAt = updatedAt,
        this.aceptado = aceptado,
        this.role = role
    }
}
