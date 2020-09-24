import { Genre } from './Genre';

export interface Product {
    Id: number;
    Name: string;
    Price: number;
    Description: string;
    GenreId: number;
    Stock: number;
    Genre: Genre;
}