import React from 'react'

const Plan = ({ title, icon, price }) => {
  return (
    <div className='grid place-items-center w-68 h-72 bg-[linear-gradient(to_bottom,#2F80E8,#1A2B94)] rounded-2xl border-4 border-[#d9d9d9] text-white  p-6'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <img src={icon} alt="img not loading" className='justify-self-center' />
        <h3 className='text-lg font-semibold'>{price}</h3>
        <button className='bg-blue rounded-3xl border-4 border-skyblue px-10 py-2 font-bold text-md'>Get Started</button>
    </div>
  )
}

export default Plan