import React, { useState } from 'react'
import EntryCard from './EntryCard'

export default function ListDisplay() {

  const [entryArray, setEntryArray] = useState([1,1,1,1,1,1,1,1,1,1,])
  return (
<div className='w-full flex items-center justify-center md:w-[calc(100vw-150px)]'>
  {entryArray.length < 1 ? 
  <div className=''>
    <div className="badge badge-xl">You have no entries yet</div>
  </div>:
   
    <div className='absolute top-[108px] md:left-[150px]'>
      <div className='flex flex-col justify-center md:grid gap-4 md:grid-cols-3 align-center my-4 md:px-4'>
        {entryArray.map(entry => entry = <EntryCard/>)}
      </div>
    </div>
}
</div>
  )
}
