import { NextResponse } from "next/server"
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

export const POST = async (req: Request) => {
  
    const data = await req.formData();
    const image = await data.get("image") as File;
    const fileBuffer = await image.arrayBuffer();
  
    var mime = image.type; 
    var encoding = 'base64'; 
    var base64Data = Buffer.from(fileBuffer).toString('base64');
    var fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  
    try {
      
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
  
            var result = cloudinary.uploader.upload(fileUri, {
              invalidate: true
            })
              .then((result) => {
                console.log(result);
                resolve(result);
              })
              .catch((error) => {
                console.log(error);
                reject(error);
              });
        });
      };
  
      const result:any = await uploadToCloudinary();
      
      let imageUrl = result.secure_url;
      let imageID = result.public_id;

      return NextResponse.json(
        { success: true, imageUrl: imageUrl, imageID: imageID },
        { status: 200 }
      );
    } catch (error) {
      console.log("server err", error);
      return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
    }
  };