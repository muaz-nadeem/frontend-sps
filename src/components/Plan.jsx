import React from 'react'

const Plan = ({ title, icon, price }) => {
  return (
    <div className='grid place-items-center w-68 h-72 bg-[linear-gradient(to_bottom,#2F80E8,#1A2B94)] rounded-2xl border-4 border-[#d9d9d9] text-white  p-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <figure>
        <img src={icon} alt="img not loading" className='justify-self-center' />
        </figure>
        <h3 className='text-lg font-semibold'>{price}</h3>
        <button className='bg-blue rounded-3xl border-4 border-skyblue px-8 py-1 font-bold text-md  transition-colors duration-300 ease-in-out hover:bg-white hover:text-skyblue'>Get Started</button>
    </div>
  )
}

export default Plan