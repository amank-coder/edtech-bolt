"use client"
import React, { useState } from 'react'

const CategoryFilter = () => {
    const filterOptions =[
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'physics',
            value:'physics'
        },
        {
            id:3,
            name:'economics',
            value:'economics'
        }
    ]

    const [activeIndex, setActiveIndex] = useState();
    return (
    <div className='flex gap-5 -ml-56 md:ml-8'>
        {filterOptions.map((item,index)=>(
            <button key={index} onClick={()=>setActiveIndex(index)}>
                <h2 className={`border p-2 px-4 text-sm rounded-md hover:border-blue-800 ${activeIndex==index ? 'bg-blue-100 text-blue-800 border-blue-800':null}`}>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter