"use client"
import React from 'react'

import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(info)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import FormSection from '../_components/FormSection'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PROPS{
    params:{
        'template-slug':string
    }
}
function CreateNewContent(props:PROPS) {

        const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

        const GenerateAIContent=(formData:any)=>{

        }
    // console.log(props.params['template-slug'])
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
          userFormInput={(v:any)=>GenerateAIContent(v)} />
          {/* OutputSection */}
          <div className='col-span-2'>
          <OutputSection/>
          </div>
          </div>
     
    </div>
  )
}

export default CreateNewContent