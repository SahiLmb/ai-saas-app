import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import Template from '@/app/(info)/Template'


export interface TEMPLATE {
  name:string,
  desc:string,
  category:string,
  icon:string,
  aiPrompt: string,
  slug:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}
function TemplateListSection({userSearchInput}:any) {
  const[templateList,setTemplateList]=useState(Template)
  useEffect(()=>{
    // console.log(userSearchInput)
    if(userSearchInput)
    {
      const filterData=Template.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Template)
    }
  },[userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 py-4'>
      {templateList.map((item:TEMPLATE, index:number)=>(
          <TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection