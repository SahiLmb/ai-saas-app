"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Cog, File, FileClock, FolderCog, Home, Wallet, Wallet2, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
function Sidebar() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },{
            name:'Billing',
            icon:Wallet,
            path:'/dashboard/billing'
        },{
            name:'Setting',
            icon:FolderCog,
            path:'/dashboard/setting'
        },
    ]

    const path = usePathname();
    useEffect(() =>{
        console.log(path)
    },[])
  // Adding logo
    return (
    <div className='h-screen p-5 shadow-sm border bg-white '>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'}
        alt="logo"
        width={45}
        height={45}
        />
    </div>
    {/* sidebar config */}
        <hr className='my-5' />
    <div className='mt-7 border'>
        {MenuList.map((menu, index)=>(
            <div  className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg transition-all cursor-pointer items-center ${
                path == menu.path && "bg-primary text-white"
              }`}>
                <menu.icon className='h-6 w-7'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Sidebar