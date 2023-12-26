'use client'
import { Product } from "@/model/Product"
import ProductModal from "./ProductModal"
import { useState } from "react"

type Props = {
    product: Product
}


const ProductCard = ({product}: Props) => {
    const [openModal, setOpenModal] = useState(false)
    let ingredients = product.ingredients.join(", ")

  return (
    <div className="flex justify-between bg-productCardBG text-textLightPrimary p-4">
        <div>
        <b className="text-xl uppercase">{product.name}</b>
        <p>{product.description}</p>
        <b className="text-xs">INGREDIENTES</b>
        <p>{ingredients}</p>
        </div>

        <div className="flex flex-col">

        <b>$ {product.price}</b>
        <button onClick={()=>setOpenModal(true)} className="text-textLightSecondary rounded-sm px-1 bg-white/10">VER</button>
        </div>
        <ProductModal isOpen={openModal} setOpen={setOpenModal} product={product}></ProductModal>
    </div>
  )
}

export default ProductCard