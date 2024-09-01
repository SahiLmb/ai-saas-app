import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-green-500 via-green-700 to-green-600
    flex flex-col justify-center items-center text-white'>
        <h2 className='text-2xl font-bold'>
        Access All-In-One Content Generation Templates!
        </h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
          <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[50%]'>
            <Search className='text-primary cursor-pointer'/>
            <input type="text" placeholder='Search'
            // Search logic
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black'/>
          </div>
        </div>
    </div>
  )
}

export default SearchSection