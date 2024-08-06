import { ITesting } from "../../interfaces/situaciones/i-testing";

export class Testing implements ITesting{

    id: number;
    testing: string;

    constructor(id: number, testing: string) {
        this.id = id;
        this.testing = testing;
    }

}
