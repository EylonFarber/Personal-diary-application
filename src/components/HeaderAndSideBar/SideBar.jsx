import React from 'react'
import NewEntryButton from './NewEntryButton'

export default function SideBar() {
  return (
   <div className="h-[100% - 66px] w-[100px] flex flex-col justify-end gap-2 bg-green-400 shadow-sm">
<NewEntryButton/>
  </div>
  )
}
