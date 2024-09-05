import { Search } from 'lucide-react'
import React from 'react'
import UsageTrack from './UsageTrack'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        {/* <div className='flex gap-2 items-center p-2 border 
        rounded-md max-w-lg bg-white'>
           <Search/>
            <input type='text' placeholder='Search...' 
            className='outline-none flex-1'
            />
        </div> */}
        {/* Usage tracker */}
      <div className='flex-1 mx-5'>
        <UsageTrack />
      </div>
        <div className='flex gap-5 px-3 items-center'>
            <h2 className='bg-primary p-1 rounded-full text-xs hidden md:block text-white px-2 cursor-pointer whitespace-nowrap'>
              Join Membership just for 499Rs/Month</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header