'use client'

import React, { useContext, useState } from 'react'
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // credits usage context
    const [totalUsage,setTotalUsage]=useState<Number>(0); 
    const [userSubscription,setUserSubscription]=useState<boolean>(false);
    const [UpdateCreditUsage, setUpdateCreditUsage] = useState<any>()

  return (
    <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UpdateCreditUsageContext.Provider value={{UpdateCreditUsage,setUpdateCreditUsage}}>
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
    </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
    </UserSubscriptionContext.Provider>
  )
}

export default layout