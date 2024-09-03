import { Authority } from "../../models"

export interface IUserModel{
    id: number,
    fullName:string,
    email:string,
    password:string,
    createdAt:string,
    updatedAt:string,
    aceptado:boolean,
    role:string,
    enabled: boolean,
    authorities:Array<Authority>,
    username:string,
    accountNonExpired:boolean,
    credentialsNonExpired:boolean,
    accountNonLocked:boolean

}