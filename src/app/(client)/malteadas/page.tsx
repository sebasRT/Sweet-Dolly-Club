import SectionTitle from '@/components/products/SectionTitle'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/ProductGrid'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'
import Background from './background'

export const revalidate = 0

const page = async () => {

  const naturalShake = await getProductsByCategory("Malteada natural")
  const shake = await getProductsByCategory("Malteada")

  return (
    <>
    <Background/>
    <div className='flex flex-col text-center'>
      <SectionTitle title='MALTEADAS NATURALES' />
      <ProductGrid>
        {naturalShake.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
      <SectionTitle title='MALTEADAS' />
      <ProductGrid>
        {shake.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>

    </div>
    </>
  )
}

export default page