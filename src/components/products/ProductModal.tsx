import { Product } from '@/model/Product'
import { Dialog } from '@headlessui/react'
import { CldImage } from 'next-cloudinary'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  product: Product
}

const ProductModal = ({isOpen, setOpen, product}: Props) => {
  const {name, description, imageID, price, category, ingredients} = product
  let productIngredients = ingredients.join(", ")
  const productCategory = category.replace("Otra", "")

  return (
   <Dialog open={isOpen} onClose={()=> setOpen(false)} className="relative z-50 ">
    <div className="fixed inset-0 bg-black/30 z-0 " aria-hidden="true" />
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

      <Dialog.Panel className="mx-auto
      max-w-sm 
      rounded 
      bg-primary
      text-textLightPrimary
      z-10 
      flex  
      flex-col 
      justify-center 
      p-10 
      text-center
      gap-4
      ">

        <Dialog.Title className="font-bold text-xl uppercase ">{name} <span>{productCategory}</span> </Dialog.Title>
        <Dialog.Description>
          {description}
        </Dialog.Description>
        <CldImage src={imageID} width={500} height={500} alt="product's image" className='h-25 w-full' />

        <div>
            <b>INGREDIENTES</b>
            <p>{productIngredients}</p>
        </div>
          <b className='text-lg'>$ {price}</b>
          <button onClick={() => setOpen(false)} className='font-semibold bg-black/30'>OK</button>
      </Dialog.Panel>
    </div>
   </Dialog>
  )
}

export default ProductModal
