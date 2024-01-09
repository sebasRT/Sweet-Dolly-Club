import Image from 'next/image'
import React from 'react'

const page = () => {

  return (

    <div className='w-screen h-screen grid grid-cols-3 place-items-center overflow-hidden absolute top-0 left-0 -z-10'>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704764992/Sweet-Dolly/ieaatzqybiqkhy6eaus6.png' classname="w-20 rotate-45" />
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755632/Sweet-Dolly/pvc40kmuonvqwuul9sjr.png' classname="w-20 -rotate-45" />
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755632/Sweet-Dolly/pvc40kmuonvqwuul9sjr.png' classname="w-20 rotate-12"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755722/Sweet-Dolly/faklo4wxkftwnwfvfrdw.png' classname="w-20 rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755722/Sweet-Dolly/faklo4wxkftwnwfvfrdw.png' classname="w-20 rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755632/Sweet-Dolly/pvc40kmuonvqwuul9sjr.png' classname="w-20 -rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704764992/Sweet-Dolly/ieaatzqybiqkhy6eaus6.png' classname="w-20 rotate-45"/>
        <div></div>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755632/Sweet-Dolly/pvc40kmuonvqwuul9sjr.png' classname="w-20 rotate-12"/>
        <ProductImage src='https://res.cloudinary.com/deyofhj4o/image/upload/v1704755722/Sweet-Dolly/faklo4wxkftwnwfvfrdw.png' classname="w-20 rotate-45"/>
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
export default page