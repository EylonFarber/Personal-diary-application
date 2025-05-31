import React from 'react'

export default function EntryDisplay() {
  return (
<div className="card md:card-side bg-base-100 shadow-sm md:w-224 md:h-92">
  <figure className='w-full md:w-1/2'>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie"
      className='w-full'
      />
  </figure>
  <div className="card-body md:w-1/2">
    <h2 className="card-title">Entry titel<span className='text-sm'>date of entry</span></h2>
    <p>Entry text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae explicabo deleniti expedita ipsum neque aut cum asperiores, impedit temporibus? Earum ad dolor ullam in corporis unde porro ipsam sunt?</p>
    <div className="card-actions justify-between">
      <button className="btn btn-primary">edit</button>
      <div className='flex gap-4'>
        <button className="btn">prev</button>
        <button className="btn">next</button>
      </div>
    </div>
  </div>
</div>  )
}
