"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link';

function UsageTrack() {

    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    const {userSubscription, setUserSubscription}=useContext(UserSubscriptionContext)
    const [maxWords,setMaxWords]=useState(10000)
    const {UpdateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);
    
    
    useEffect(()=>{
        user&&GetData();
        user&&IsUserSubscribed();
    },[user])

    useEffect(()=>{
        user&&GetData();
    },[UpdateCreditUsage&&user])

    const GetData=async()=>{
    {/*@ts-ignore */}
        const result:HISTORY[]=await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress ?? ""));

        GetTotalUsage(result)
    }

    const IsUserSubscribed= async ()=>{
        const result=await db.select().from(UserSubscription)
        .where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress ?? ""));
        if(result){
            setUserSubscription(true)
            // subscribed users get 1000000 credits
            setMaxWords(1000000);
          }
           console.log(result)
    }


// using history to determine the no. of credits used

    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length)
        })

        setTotalUsage(total)
        console.log(total);
    }
  
  
    return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg flex flex-col md:flex-row items-center justify-between'>
            <h2 className='font-medium mb-1'>Credits</h2>
            <div className='h-2 bg-white w-full rounded-full mt-3 relative'>
            <div className='h-2 bg-[#d0eb06] rounded-full'
            style={{
                width:(totalUsage/maxWords)*100+"%" // to show percentaged used
            }}
            ></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credits utitlized </h2>
        </div>
        <Link href={'/dashboard/billing'}>
        <Button variant={'secondary'} className='w-full md:w-auto my-3 text-primary'>Upgrade
        </Button>
        </Link>
    </div>
  )
}

export default UsageTrack