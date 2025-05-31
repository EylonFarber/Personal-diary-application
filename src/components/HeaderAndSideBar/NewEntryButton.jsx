import React from 'react'

export default function NewEntryButton() {
    const date = new Date()

  return (
    <div className='w-full flex gap-2 justify-end items-center'>
        <p>{date.toLocaleDateString()}</p>
        <button className="btn">New entry</button>
    </div> 
     )
}
