import { Order } from './Orders';
import { Product } from './Product';

export interface OrderLine{
    id: number,
    orderId: number,
    productId: number,
    price: number,
    amount: number,
    order: Order,
    product: Product
}

export class ModelOrderLine{
    id: number;
    orderId: number;
    productId: number;
    price: number;
    amount: number;
    order: Order;
    product: Product;
}