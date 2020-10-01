import { Login } from "../Models/Login"

export interface Customer {
    id: number;
    name: string;
    telephoneNumber: number;
    address: string;
    logInId: number;
    login: Login;
}

export class Customer {
    id: number;
    name: string;
    telephoneNumber: number;
    address: string;
    logInId: number;
    login: Login;
}