import React from 'react'

const Header = ({ title }) => {
  return (
    <header className='header text-white py-3 px-4 text-center text-2xl'>
     <p className='font-semibold capitalize'>{title}</p>
    </header>
  )
}

export default Header