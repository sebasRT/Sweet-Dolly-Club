import ProductCard from '@/components/products/ProductCard';
import ProductGrid from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/mongo/products';

export const revalidate = 0

export default async function Home() {
  
  const {products} = await getProducts()

  return (
    <div>
      <ProductGrid>
      {products?.map(product =><ProductCard key={product._id?.toString()} product={{...product, _id: product._id?.toString()}}/>)}

      </ProductGrid>
    </div>
  )
}

// const getProducts = async() =>{
//   const response = await fetch('api/products', {cache: 'no-store', method: 'GET'})

//   const data:{products: Product[], success: boolean} =await response.json()

//     return data
// }
