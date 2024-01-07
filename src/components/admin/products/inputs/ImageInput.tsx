'use client'
import { CldImage } from 'next-cloudinary'
import React, {  useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CiImageOn } from "react-icons/ci";
import { RotatingLines } from 'react-loader-spinner';
import { Product } from '../modals/utils/model';
import { MdEditSquare } from "react-icons/md";
import { uploadImage } from '../../actions';

const ImageInput = () => {

    const [imageID, setImageID] = useState("")
    const [inputState, setInputState] = useState<"none" | "loading" | "done">("none")
   
    const {register, setValue, getValues, formState, trigger} = useFormContext<Product>()
    const {errors} = formState

    const fileInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
      
        const savedImage = getValues("imageID")

        if (savedImage) {
            setImageID(savedImage)
            setInputState("done")
        }
        
    }, [])
    
    const handlePostImage = async (files: FileList | null)=>{

        // deleteImage(imageID)

        
        if(files){

            const file = files[0]
            
            setInputState("loading")
        try {
            
            if (!file) {
             return;    
            }

            const data = await postImage(file)
            
            setValue("imageID", data.imageID)
            setImageID(data.imageID)
            setInputState("done")
            trigger("imageID")
            console.log(data)
        } catch (error: any) {
            throw new error(error.message)
        }
    }
    }



  return (
    <div className='h-28 flex flex-row items-center justify-around'>

    <div className='w-1/2 h-fit flex flex-col items-center bg-primary rounded-md'>
    {
        (()=>{
            switch (inputState) {
                case "none":
                 return <div className='text-8xl text-center'>
                        <CiImageOn/>
                    </div>
                 case "loading": 
                 return <div>
                    <RotatingLines visible={true} strokeColor="#e6e6ff"/>
                 </div>   
                 case "done":
                   return <div className='h-25'>
                        <CldImage src={imageID} width={500} height={500} alt="product's image" className='h-25 w-full'/>
                   </div>
                    
                 default:
                     break;
                    }
                })()
            }
    </div>


    <div onClick={()=> fileInput.current?.click()}>
        
            <input name="image" type="file" id="file" onChange={(e)=>{handlePostImage(e.target.files)} } accept='image/*' hidden ref={fileInput}/>
    {/* <CldImage src={`Sweet-Dolly/${imageID}`} alt="product's image" width={50} height={50}/> */}
        <input {...register('imageID')} hidden/>

    <button className='relative top-0 left-0 text-2xl m-2'><MdEditSquare/></button>
    </div>

    {
            errors.imageID && 
            <span className="text-textWarning text-xs font-semibold">{errors.imageID?.message}</span>
        }
    
    </div>
  )
}

const postImage = async (file: File)=>{

    const formData = new FormData();
    formData.append('image', file);

    try {
        
        const response = await fetch("/api/images", {method: 'POST', body: formData});
        const data = await response.json()

    return data
    } catch (error) {
        console.log(error);
    }
    
}

const deleteImage = async (imageID: string)=>{

    const request = await fetch(`/api/images/${imageID}`, {method: 'DELETE'})
    const data = request.json()

    return data
}

export default ImageInput