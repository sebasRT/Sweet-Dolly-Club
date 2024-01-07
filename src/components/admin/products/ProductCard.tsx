'use client'
import { Product } from "@/model/Product"
import { useState } from "react"
import UpdatePModal from "./modals/UpdateProductModal"
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ObjectId } from "mongodb";
import DeletePModal from "./modals/DeleteProductModal";

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  return (
    <div className="flex justify-between bg-primary/50 text-textLightPrimary p-4">
      <div>
        <b className="uppercase">{product.name}</b>
        <p className="first-letter:uppercase">{product.description}</p>
      </div>

      <div className="flex flex-col">

        <b>$ {product.price}</b>
        <div className="flex  gap-2 text-3xl">

          <div onClick={() => setOpenEditModal(true)} className="text-textLightSecondary/60 cursor-pointer "><MdEditSquare /></div>
          <div onClick={() => setOpenDeleteModal(true)} className="text-textWarning/60 cursor-pointer"><MdDelete /></div>
        </div>

      </div>
      <UpdatePModal isOpen={openEditModal} setOpen={setOpenEditModal} product={product} />
      <DeletePModal isOpen={openDeleteModal} setOpen={setOpenDeleteModal} product={product} />
    </div>
  )
}

export default ProductCard
