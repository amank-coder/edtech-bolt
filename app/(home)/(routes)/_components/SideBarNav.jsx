"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Layout, Search, Brain } from 'lucide-react'

const SideBarNav = () => {
    const menuList =[
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/browse'
        },
        {
            id:2,
            name:'Doubt',
            icon:Layout,
            path:'/doubt'
        },
        {
            id:2,
            name:'Course recommender',
            icon:Brain,
            path:'/recommend'
        },
        
    ]

    const [activeIndex, setActiveIndex] = useState()
  
    return (
    <div className='h-full border-r md:flex flex-col overflow-y-auto shadow-md hidden'>
        <div className='p-5 text-2xl font-bold'>
            {/* <img src='/logo.svg' 
            alt='logo'
            width={80}
            height={40}
            /> */}
            <a href='/'>AI Guru</a>
        </div>
        <div className='flex flex-col'>
            
                {menuList.map((item,index)=>(
                    <div 
                    onClick={()=>setActiveIndex(index)}
                    key={index}>
                    <a href={item.path}>
                    <div className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex==index ? 'bg-blue-100 text-blue-900' : null}`}>
                    <item.icon />
                    <h2>{item.name}</h2>
                    </div>
                    
                    </a>
                    </div>
                ))}
            
        </div>
    </div>
  )
}

export default SideBarNav