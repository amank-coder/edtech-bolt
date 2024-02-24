import React from 'react'
import SideBarNav from './_components/SideBarNav'
import Header from './_components/Header'

const homeLayout = ({children}) => {
  return (
    <div>
        <div className='h-full w-64 fixed flex-col inset-y-0 z-40'>
            <SideBarNav />
        </div>
        <Header />
        <div className='ml-64 p-5'>
            {children}
        </div>
    </div>
  )
}

export default homeLayout