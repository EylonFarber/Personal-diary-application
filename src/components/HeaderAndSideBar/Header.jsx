import React from 'react'
import NewEntryButton from './NewEntryButton'

export default function Header() {


  return (
   <div className="navbar flex-1 gap-2 bg-base-100 shadow-sm h-[66px]">
    <img
        alt="Tailwind CSS Navbar component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="btn btn-ghost btn-circle avatar" />    
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
<NewEntryButton/>
  </div>
  )
}
