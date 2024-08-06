import { IMaven } from "../../interfaces/situaciones/i-maven";

export class Maven implements IMaven{
    id: number;
    maven: string;

    constructor(id: number, maven: string){
        this.id = id;
        this.maven = maven;
    }
}
