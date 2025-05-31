import React, { useState } from 'react'
import EntryCard from './EntryCard'
import SortButton from './SortButton'

export default function ListDisplay() {

  const [entryArray, setEntryArray] = useState([1,1,1,1,])
  return (
<div className='w-full flex items-center justify-center'>
  {entryArray.length < 1 ? 
  <div className=''>
    <div className="badge badge-xl">You have no entries yet</div>
  </div>:
    <div className='md:px-5 w-full flex justify-end '>
      <SortButton/>
      <div className='md:grid gap-4 md:grid-cols-3 md:gap-12 align-center pl-[150px] md:h-[calc(100vh-108px)] pt-[120px]'>
      {entryArray.map(entry => entry = <EntryCard/>)}
    </div>
</div>
  }
</div>
  )
}
