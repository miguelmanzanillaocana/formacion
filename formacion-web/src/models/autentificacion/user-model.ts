import { IUserModel } from "../../interfaces/autentificacion/i-usermodel";
import { Authority } from "./authority";

export class UserModel implements IUserModel {
    id: number;
    fullName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    aceptado: boolean;
    role: string;
    enabled: boolean;
    authorities: Authority[];
    username: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;

    constructor(
        id: number,
        fullName: string,
        email: string,
        password: string,
        createdAt: string,
        updatedAt: string,
        aceptado: boolean,
        role: string,
        enabled: boolean,
        authorities: Authority[],
        username: string,
        accountNonExpired: boolean,
        credentialsNonExpired: boolean,
        accountNonLocked: boolean
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.aceptado = aceptado;
        this.role = role;
        this.enabled = enabled;
        this.authorities = authorities;
        this.username = username;
        this.accountNonExpired = accountNonExpired;
        this.credentialsNonExpired = credentialsNonExpired;
        this.accountNonLocked = accountNonLocked;
    }
}
