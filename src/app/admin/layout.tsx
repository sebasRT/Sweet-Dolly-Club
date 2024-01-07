import Header from '@/components/layout/header/Header'
import CategoriesNavbar from '@/components/layout/header/CategoriesNavbar'
import AddProduct from '@/components/admin/products/AddProduct'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <div>
      <div className='text-textLightPrimary flex flex-row w-full justify-around h-56'>
        <Header/>
        <CategoriesNavbar location='admin/'/>
      </div>
      <AddProduct/>
        {children}
   
    </div>
     
   
  ) 
}
