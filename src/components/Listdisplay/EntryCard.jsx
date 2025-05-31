import React from 'react'

export default function EntryCard() {
  return (
    <div className="card bg-base-100 w-full shadow-sm md:rounded-t-[82px]">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Entry title <span className='text-xs'>date of entry</span></h2>
    <p>fist few words of entry here</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View entry</button>
    </div>
  </div>
</div>
  )
}
