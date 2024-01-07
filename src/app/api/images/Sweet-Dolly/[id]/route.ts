import { deleteImage } from "@/lib/cloudinary/images";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, {params}:{params: {id: string}}){

    const response = await deleteImage(params.id)
    
    return NextResponse.json(response)
 }