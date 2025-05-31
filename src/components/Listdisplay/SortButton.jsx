import React from 'react'

export default function SortButton() {
  return (
  <select defaultValue="Sort by" className="fixed top-[66px] md:left-[150px] z-1 select max-md:w-full h-[42px] absolute top-0 left-0">
    <option disabled={true}>Sort by</option>
    <option>Newest first</option>
    <option>Oldest first</option>
</select>
  )
}
