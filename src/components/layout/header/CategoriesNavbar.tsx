import Link from 'next/link'
import React from 'react'

const categories = [
    "waffles",
    "frosties",
    "malteadas",
    "frappes",
    "bebidas",
    "otros",
]

const CategoriesNavbar = ({location}:{location:  "admin/" | "client"} ) => {
  const route = location.replace("client", "")
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center text-center font-bold'>
        {categories.map(category=> 
          <Link key={category} href={`/${route}${category}`} className='bg-secondary/70 rounded-md h-fit p-3'>
            <div className='first-letter:uppercase'>{category}</div>
          </Link>
        )}
    </div>
  )
}

export default CategoriesNavbar