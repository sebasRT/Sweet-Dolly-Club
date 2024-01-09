import { ReactNode } from "react"
import AddProduct from "./AddProduct"

type Props = {
    children: ReactNode
}

const ProductGrid = ({children}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4 text-left">
        {children}
    </div>
  )
}

export default ProductGrid