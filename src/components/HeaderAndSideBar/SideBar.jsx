import React from 'react'
import NewEntryButton from './NewEntryButton'

export default function SideBar() {
  return (
   <div className="fixed top-0 left-0 z-1 w-[150px] flex flex-col justify-end items-center p-5 bg-base-100 shadow-sm h-full">
<NewEntryButton/>
  </div>
  )
}
