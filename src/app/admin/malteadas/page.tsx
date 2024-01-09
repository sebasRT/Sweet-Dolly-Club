import ProductCard from '@/components/admin/products/ProductCard'
import ProductGrid from '@/components/admin/products/ProductGrid'
import SectionTitle from '@/components/products/SectionTitle'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'

export const revalidate = 0

const page = async () => {

  const naturalShake = await getProductsByCategory("Malteada natural")
  const shake = await getProductsByCategory("Malteada")

  return (
    <div className='flex flex-col text-center'>
      <SectionTitle title="MALTEADAS NATURALES" />
      <ProductGrid>
        {naturalShake.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
      <SectionTitle title='MALTEADAS' />
      <ProductGrid>
        {shake.products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
  )
}

export default page