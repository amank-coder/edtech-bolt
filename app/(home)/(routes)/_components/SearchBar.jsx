import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-3 text-[14px] items-center border p-2 rounded-md'>
    <Search />
    <input type='text' placeholder='search course' className='bg-transparent outline-none'/>
    </div>
  )
}

export default SearchBar