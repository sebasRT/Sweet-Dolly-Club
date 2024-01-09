import SectionTitle from '@/components/products/SectionTitle'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/ProductGrid'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'
import Background from './background'

const page = async () => {

  const hotDrinks = await getProductsByCategory("Bebida caliente")
  const coolDrinks = await getProductsByCategory("Bebida fría")

  return (
    <>
    <Background/>
    <div>
    <div>
      <SectionTitle title='BEBIDAS CALIENTES' />
      <ProductGrid>
        {hotDrinks.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
      <SectionTitle title='BEBIDAS FRÍAS' />
      <ProductGrid>
        {coolDrinks.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
    </div>
    </>
  )
}

export default page