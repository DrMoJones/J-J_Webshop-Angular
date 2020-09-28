import { Genre } from './Genre';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    genreId: number;
    stock: number;
    genre: Genre;
}