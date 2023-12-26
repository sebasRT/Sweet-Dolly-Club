import AuthModal from '@/components/admin/auth/AuthModal'
import ProductCard from '@/components/admin/products/ProductCard'
import ProductGrid from '@/components/admin/products/ProductGrid'
import { getProducts } from '@/lib/mongo/products'

export const revalidate = 0

const AdminPage = async () => {
  const key: string | undefined = process.env.ADMIN_PASSWORD
    const {products} = await getProducts()
  
    return (
      <div>
        <AuthModal key={key}/>
        <ProductGrid>
        {products?.map(product =><ProductCard key={product._id?.toString()} product={{...product, _id: product._id?.toString()}}/>)}
        </ProductGrid>
      </div>
    )
}


export default AdminPage