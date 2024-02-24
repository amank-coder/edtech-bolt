"use client"
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {
    const {user} = useUser();
    const router = useRouter();
    useEffect(()=>{
        console.log(user)
    },[user])
    const [show, setShow] = useState(false);
    const toggle = ()=>{
        setShow(!show);
    }
    return (

    <div className='md:ml-64 p-6 border-b flex justify-between -ml-64'>

        <SearchBar />
        <div onClick={toggle} className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </div>
        <div className='ml-12 md:hidden'><SearchBar /></div>
        {!user ? <button onClick={()=>router.push('/signi-in')}>Login</button> : <UserButton />}
    </div>
  )
}

export default Header