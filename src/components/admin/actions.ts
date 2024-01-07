'use server'
import {v2 as cloudinary} from 'cloudinary';

export async function uploadImage (formData: FormData){

    const image = formData.get('image') as File;
    const arrayBuffer = await image.arrayBuffer(); 
    const buffer = new Uint8Array(arrayBuffer);
 
    const result:any = await new Promise((resolve, reject) => {

        cloudinary.uploader.upload_stream({folder: "Sweet-Dolly"}, (err, result)=>{

            if (err) {  
                reject(err)
                return;
            }
            resolve(result)
        }).end(buffer)

    })

    console.log(result);
    
 
}
