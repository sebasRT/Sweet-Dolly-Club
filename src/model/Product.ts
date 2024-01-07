import { ObjectId } from "mongodb";

export interface Product {
    _id?: ObjectId | string;
    name: string;
    description: string;
    imageID: string;
    category: "Waffle" | "Frosty" | "Malteada" | "Malteada natural" | "Frappé" | "Bebida fría" | "Bebida caliente" | "Otra"
    ingredients: string[]
    price: number
}