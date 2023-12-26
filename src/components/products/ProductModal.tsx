import { Product } from '@/model/Product'
import { Dialog } from '@headlessui/react'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  product: Product
}

const ProductModal = ({isOpen, setOpen, product}: Props) => {
  return (
   <Dialog open={isOpen} onClose={()=> setOpen(false)} className="relative z-50 ">
    <div className="fixed inset-0 bg-black/30 z-0 " aria-hidden="true" />
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

      <Dialog.Panel className="mx-auto
      max-w-sm 
      rounded 
      bg-productModalBG 
      text-textLightPrimary
      z-10 
      flex  
      flex-col 
      justify-center 
      p-10 
      text-center
      gap-4
      ">

        <Dialog.Title className="font-bold ">{product.name}</Dialog.Title>
        <Dialog.Description>
          {product.description}
        </Dialog.Description>
          <b>$ {product.price}</b>
        
          <button onClick={() => setOpen(false)} className='font-semibold bg-black/30'>OK</button>
      </Dialog.Panel>
    </div>
   </Dialog>
  )
}

export default ProductModal
