import { ClassLogin, Login } from "../Models/Login"

export interface Customer {
    id: number;
    name: string;
    telephoneNumber: number;
    address: string;
    loginId: number;
    login: Login;
}

export class Customer {
    id: number;
    name: string;
    telephoneNumber: number;
    address: string;
    loginId: number;
    login: ClassLogin;
}