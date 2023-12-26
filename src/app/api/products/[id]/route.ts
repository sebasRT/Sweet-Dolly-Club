import { deleteProductById, getProductById, updateProduct } from "@/lib/mongo/products";
import { Product } from "@/model/Product";
import {  NextResponse } from "next/server"

export async function GET (req: Request, {params}: {params: {id: string}} ) {

    
    const {product,error} = await getProductById(params.id)
    
    return NextResponse.json({
        product: product,
        error: error
    })
}


export async function PUT (request: Request, {params}: {params: {id: string}}) {

    try {
        if( typeof request === 'object' && request !== null ){

            const product: Product = await request.json()

            const data = await updateProduct(params.id,product)
            if (data.success) {
                return NextResponse.json(data)
                
            }else{ return NextResponse.json(data,{status: 500})}
        }    
    } catch (error: any) {
        
        return NextResponse.json({error: error?.message}, {status: 500})
    }
}

export async function DELETE (request: Request, {params}: {params: {id: string}}) {

    const result = await deleteProductById(params.id)
    
    if (!result.success) {
        
        return NextResponse.json(result,{status: 500})
    }

    return NextResponse.json(result)
}