import { EmailValidator } from '@angular/forms';


export interface Login
{
  id: number;
  email: string;
  password: string;
  role: number;
}

export class ClassLogin
{
  constructor(){
    this.id = 1,
    this.email = '',
    this.password = '',
    this.role = 0
  }
  public id: number;
  public email: string;
  public password: string;
  public role: number;
}
