import { v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function postImage(image: Uint8Array) {
    
    const result = await new Promise((resolve, reject) => {

        cloudinary.uploader.upload_stream({folder: "Sweet-Dolly", }, (err, result)=>{

            if (err) {  
                reject(err)
            }
            resolve(result)
        }).end(image)

    })
    
    return result
}

export async function deleteImage (imageID: string){

    const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(`Sweet-Dolly/${imageID}`, (err,result)=>{
            if (err) {  
                reject(err)
            }
            resolve(result)
        })
    })

   return response
}