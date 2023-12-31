import AuthModal from '@/components/admin/auth/AuthModal'
import ProductCard from '@/components/admin/products/ProductCard'
import ProductGrid from '@/components/admin/products/ProductGrid'
import SectionTitle from '@/components/products/SectionTitle'
import { getProducts } from '@/lib/mongo/products'

export const revalidate = 0

const AdminPage = async () => {

  const { products } = await getProducts()

  return (
    <div>
      <AuthModal
      />
      <SectionTitle title='PRODUCTOS' />
      <ProductGrid>
        {products?.map(product => <ProductCard key={product._id?.toString()} product={{ ...product, _id: product._id?.toString() }} />)}
      </ProductGrid>
    </div>
  )
}


export default AdminPage