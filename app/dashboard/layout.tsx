import React from 'react'
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='bg-slate-100 h-screen'>
        {/* to hide sidebar when the screen is not medium or large size */}
        <div className='md:w-64 hidden md:block fixed'>
            <Sidebar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
        {children}
        </div>
    </div>
  )
}

export default layout