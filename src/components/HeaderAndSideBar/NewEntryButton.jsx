import React from 'react'

export default function NewEntryButton({newEntryFormModalOpener}) {


  return (
        <button onClick={newEntryFormModalOpener} className="btn w-[100px]">New entry</button>
     )
}
