import { Order } from './Orders';
import { Product } from './Product';

export interface OrderLine{
    id: number,
    orderId: number,
    productId: number,
    price: number,
    order: Order,
    product: Product
}