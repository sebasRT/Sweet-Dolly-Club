import SectionTitle from '@/components/products/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import ProductGrid from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/mongo/products';
import Background from './background';

export const revalidate = 0

export default async function Home() {

  const { products } = await getProducts()

  return (
    <>
    <Background/>
    <div>
      <SectionTitle title='NUESTROS PRODUCTOS' />
      <ProductGrid>
        {products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
    </>
  )
}
