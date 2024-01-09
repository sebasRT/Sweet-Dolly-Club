import Link from "next/link"
import  React, { ReactNode } from "react"

type Props ={
  children: ReactNode
}

const ProductGrid = async({children}: Props) => {

  const hasProducts = React.Children.count(children)
  
  return (
    <div>

    {
      !hasProducts? 
      <div className="m-5 text-textLightPrimary text-center">
        <b>Aun no hay productos por mostrar</b>
        <p>Si eres el propietario dirígete a la sección administrativa y gestiona tus productos </p>

        <div className="m-10">
          <Link href="/admin" className="bg-black/50 max-w-fit p-4 font-bold">ADMINISTRAR</Link>
        </div>

      </div>
       : 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4 text-left">
        {children}
      </div>

    }
        </div>
  )
}


export default ProductGrid