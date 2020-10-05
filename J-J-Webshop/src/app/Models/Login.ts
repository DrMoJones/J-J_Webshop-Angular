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

  public id: number;
  public email: string;
  public password: string;
  public role: number;
}
