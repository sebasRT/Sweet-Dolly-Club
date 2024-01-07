import SectionTitle from '@/components/products/SectionTitle'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/ProductGrid'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'

const page = async() => {

    const {products} = await getProductsByCategory("Waffle")

  return (
    <div>
      <SectionTitle title='WAFFLES' />
        <ProductGrid>
            {products?.map(product =><ProductCard key={product._id?.toString()} product={{...product, _id: product._id?.toString()}}/>)}
      </ProductGrid>

    </div>
  )
}

export default page