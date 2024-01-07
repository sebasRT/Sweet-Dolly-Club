import Header from '@/components/layout/header/Header'
import CategoriesNavbar from '@/components/layout/header/CategoriesNavbar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>
      <div className='text-textLightPrimary flex flex-row w-full justify-around h-56'>
        <Header />
        <CategoriesNavbar location='client' />
      </div>
      {children}
    </div>


  )
}
