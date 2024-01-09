import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header/Header'
import background from "@public/background.jpeg"
import CategoriesNavbar from '@/components/layout/header/CategoriesNavbar'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sweet-Dolly Club',
  description: 'Disfruta sin remordimientos',
  openGraph: {
    title: 'Sweet-Dolly Club',
    description: 'Disfruta sin remordimientos',
    url: 'https://sweet-dolly-club.vercel.app',
    siteName: 'Sweet-Dolly Club',
    images: [
      {
        url: './opengraph-image.jpg',
        width: 1260,
        height: 800
      }
    ],
    locale: 'es'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body className={inter.className} style={{
        // use the src property of the image object
        backgroundImage: `url(${background.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      >
        {children}
      </body>
    </html>
  )
}
