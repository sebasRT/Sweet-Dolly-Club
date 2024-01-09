import Image from 'next/image'
import React from 'react'

const Background = () => {

  return (

    <div className='w-screen h-screen grid grid-cols-3 place-items-center overflow-hidden fixed top-0 left-0 -z-10'>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755212/Sweet-Dolly/dbdvwafvzeecix0gj5du.png' classname="w-20 rotate-45" />
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755268/Sweet-Dolly/jm6l8zarmc7033fdqtvm.png' classname="w-20 -rotate-45" />
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755163/Sweet-Dolly/ywfrzfv4h6exsshh1jf0.png' classname="w-20 "/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704765102/Sweet-Dolly/ofsqcoxqnsjcs4tczpp8.png' classname="w-20 rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755545/Sweet-Dolly/atd11i2s4milszj6qdp5.png' classname="w-20 rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755350/Sweet-Dolly/nhv8dngfe2zvjkyx6wm8.png' classname="w-20 -rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704765485/Sweet-Dolly/fm7uyys6wlma5h6stlip.png' classname="w-20 rotate-12"/>
        <div></div>
    </div>
    
  )
}

const ProductImage = ({classname, src}:{classname: string, src:string}) =>{
    return (

        <div className={classname}>
    <Image src={src} width={1000} height={1000} alt='product'/>
</div>
        )

}
export default Background