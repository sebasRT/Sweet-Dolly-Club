'use client'
import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import CreatePModal from './modals/CreateProductModal';
import { Product } from './modals/utils/model';

const InitialProduct: Product = {
  name: "",
  description: "",
  imageID: "",
  category: "",
  price: 0,
  ingredients: [""]
}

const AddProduct = () => {

  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="flex flex-col items-center bg-primary/50 text-textLightPrimary w-1/2 md:w-1/3 mx-auto font-extrabold cursor-pointer md:col-span-2"
      onClick={() => setOpenModal(true)}>

      <div className='m-2'>

        <IoMdAddCircle className="text-6xl self-center" />
        <span> AÑADIR</span>
      </div>
      <CreatePModal isOpen={openModal} setOpen={setOpenModal} product={InitialProduct} />
    </div>
  )
}

export default AddProduct