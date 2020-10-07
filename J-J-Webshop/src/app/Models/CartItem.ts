import { cpuUsage } from 'process';

export class CartItem
{
  productId: number;
  name: string;
  price: number;
  amount: number;

  constructor(cProductId: number, cName: string, cPrice: number, cAmount: number)
  {
    this.productId = cProductId;
    this.name = cName;
    this.price = cPrice;
    this.amount = cAmount;
  }
}
