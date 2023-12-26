import { createProduct, getProducts } from "@/lib/mongo/products"
import { Product } from "@/model/Product"
import { NextResponse } from "next/server"

export async function GET () {
    const data = await getProducts()
    if(data.success){
        return NextResponse.json(data)
    }
    else{
        return NextResponse.json({products: [], success: false}, {status: 500})
    }
}

export async function POST (request: Request) {
    
    try {
        if( typeof request === 'object' && request !== null ){

            const product: Product = await request.json()
            const data = await createProduct(product)
            return NextResponse.json(data)
        }    
    } catch (error: any) {
        
        return NextResponse.json({error: error?.message}, {status: 500})
    }

}
