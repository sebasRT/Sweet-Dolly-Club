import { NextResponse } from "next/server";
import { v2 as cloudinary} from "cloudinary"

export async function DELETE(request: Request, {params}:{params: {id: string}}){

        const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(`Sweet-Dolly/${params.id}`, (err,result)=>{
            if (err) {  
                reject(err)
            }
            resolve(result)
        })
    })

    return NextResponse.json(response)
 }