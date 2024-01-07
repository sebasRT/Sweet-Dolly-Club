import React from 'react'

const SectionTitle = ({title}:{title: string}) => {
  return (
    <p className='text-3xl mx-auto text-center my-3 font-semibold'>{title}</p>
  )
}

export default SectionTitle