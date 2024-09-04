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
    
    constructor(id: number, fullName: string, email: string, pass: string, createdAt: string, updatedAt: string, aceptado: boolean, role: string){
        this.id = id,
        this.fullName = fullName,
        this.email = email,
        this.password = pass,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt,
        this.aceptado = aceptado,
        this.role = role
    }
}
