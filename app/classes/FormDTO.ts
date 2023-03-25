import { IFormOutput } from "./Interfaces";

export class FromDTO implements IFormOutput {
    nick!: string;
    name!: string;
    date!: Date;
    caseHistory!: string;
}


export class backendDTO implements IFormOutput, IBack   {
    nick!: string;
    name!: string;
    date!: Date;
    caseHistory!: string;
    formState: any;
    data: any;
}

export interface IBack {
    caseHistory: string;
    formState: any;
    data: any;
} 