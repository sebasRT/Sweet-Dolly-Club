import ProductCard from '@/components/admin/products/ProductCard'
import ProductGrid from '@/components/admin/products/ProductGrid'
import SectionTitle from '@/components/products/SectionTitle'
import { getProductsByCategory } from '@/lib/mongo/products'
import React from 'react'

const page = async () => {

  const { products } = await getProductsByCategory("Frappé")

  return (
    <div>
      <SectionTitle title='FRAPPÉS'/>
      <ProductGrid>
        {products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
  )
}

export default page