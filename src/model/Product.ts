import { ObjectId } from "mongodb";

export interface Product {
    _id?: ObjectId | string;
    name: string;
    description: string;
    ingredients: string[]
    price: number
}