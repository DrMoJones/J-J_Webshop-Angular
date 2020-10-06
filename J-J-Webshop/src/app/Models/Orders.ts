import { Customer } from '../Models/Customers'

export interface Order
{
    id: number,
    customerId: number,
    statusId: number,
    customer: Customer
}

export class ModelOrder
{
    id: number
    customerId: number
    statusId: number
    customer: Customer
}