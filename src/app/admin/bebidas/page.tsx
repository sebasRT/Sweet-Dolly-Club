import ProductCard from '@/components/admin/products/ProductCard'
import ProductGrid from '@/components/admin/products/ProductGrid'
import SectionTitle from '@/components/products/SectionTitle'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'

const page = async () => {

  const hotDrinks = await getProductsByCategory("Bebida caliente")
  const coolDrinks = await getProductsByCategory("Bebida fría")

  return (
    <div>
      <SectionTitle title= "BEBIDAS CALIENTES" />
      <ProductGrid>
        {hotDrinks.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
      <SectionTitle title= "BEBIDAS FRÍAS" />
      <ProductGrid>
        {coolDrinks.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
  )
}

export default page