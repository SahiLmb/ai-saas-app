"use client"
import React, { useContext, useState } from 'react'

import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(info)/Template'
import { TEMPLATE } from '../../_components/TemplateListSection'
import FormSection from '../_components/FormSection'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import Template from '@/app/(info)/Template'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'


interface PROPS{
    params:{
        'slug-id':string
    }
}
function CreateNewContent(props:PROPS) {

        const selectedTemplate: TEMPLATE| undefined=Template?.find((item)=>item.slug==props.params['slug-id']);
        const [loading,setLoading]=useState(false);
        const [aiOutput,setAiOutput]=useState<string>('');
        const {user}=useUser();
        const router=useRouter();
        const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
        const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
        const {UpdateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
        
 /**
   * Used to generate content from AI
   * @param formData
   * @returns
   */

        const GenerateAIContent=async(formData:any)=>{
          if(totalUsage>=10000&&!userSubscription)
          {
            console.log("Please Upgrade")
            // once user has exhausted credits redirect to billing page
            router.push('/dashboard/billing')
            return;
          }
          setLoading(true);
          const SelectedPrompt=selectedTemplate?.aiPrompt;

          const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

          const result=await chatSession.sendMessage(FinalAIPrompt);

          // console.log(result.response.text());
          setAiOutput(result?.response.text());
          await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
          setLoading(false);

          setUpdateCreditUsage(Date.now())


        }
// Saving data in db

        const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
          try {
            // @ts-ignore
          const result =await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format("DD/MM/yyyy"),
          })
        console.log('Data saved successfully:', result);
      } catch (error) {
        console.error('Error saving data:', error);
      }};
    // console.log(props.params['slug-id'])
  return (
    // back btn
      <div className='p-10'>
        <Link href={"/dashboard"}>
        <Button><ArrowLeft/> Back </Button>
        </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {/* FormSection */}
          <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v:any)=>GenerateAIContent(v)} 
          loading={loading}
          />
          {/* OutputSection */}
          <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
          </div>
          </div>
     
    </div>
  )
}

export default CreateNewContent