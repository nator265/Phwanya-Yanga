import React from 'react'

const header = () => {
  return (
    <div className='py-4 px-5 display flex justify-between'>
        <div className=''>
          Phwanya Yanga
        </div>
        <div className='menu md:show'>
          take the menu from the database
        </div>
        <div className='mobileMenu md:hidden'>
          take the mobile menu from the database
        </div>
    </div>
  )
}

export default header