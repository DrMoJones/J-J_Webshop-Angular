import { EmailValidator } from '@angular/forms';
import { EphemeralKeyInfo } from 'tls';

export interface Login
{
  id: number;
  email: string;
  password: string;
  role: number;
}

export class ClassLogin
{
  id: number;
  email: string;
  password: string;
  role: number;
}
