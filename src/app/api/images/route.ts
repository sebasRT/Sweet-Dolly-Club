import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true
})


export async function POST (request:NextRequest) {

    const data = await request.formData()
    
    const image = data.get('image') as unknown as File

    if (!image) {
        return NextResponse.json({error: "Invalid image"}, {status: 404})
    }

    const bytes = await image.arrayBuffer()
    const buffer = new Uint8Array(bytes)
    
    const result: any = await new Promise(async(resolve, reject) => {

       await cloudinary.uploader.upload_stream({resource_type: "auto", folder: "Sweet-Dolly"},async(err, result)=>{
            resolve(result)
        }).end(buffer)

    })
    
    return NextResponse.json({imageID: result.public_id, imageURL: result.secure_url})

} 


export async function DELETE (request: Request){

    return NextResponse.json({result: 0})
}
