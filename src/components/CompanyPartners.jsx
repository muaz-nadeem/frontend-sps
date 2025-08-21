import React from 'react'
import tenable from '../assets/Tenable logo.webp'
import microsoft from '../assets/microsoft logo.webp'
import Kaspersky  from '../assets/Kapersky logo.webp'
import Fortinet from '../assets/Fortinet logo.webp'
import TrendMicro from '../assets/Trend micro logo.webp'
const CompanyPartners = () => {
  return (
    <section className='my-24'>
        <p className='my-6 justify-self-center text-blue font-bold text-xl'>Our Partners</p>
    <div class="flex justify-center items-center ">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-7">
            <div class="w-80 lg:w-108 h-32 border-2 border-[#d9d9d9] bg-white shadow-sm flex justify-center items-center">
                <figure >
                    <img src={tenable} alt="" className='mt-6'/>
                </figure>
            </div>
            <div class="w-80 lg:w-108 h-32 border-2 border-[#d9d9d9] bg-white shadow-sm flex justify-center items-center">
                 <figure className=' w-96'>
                    <img src={microsoft} alt="image not loading"/>
                </figure>
            </div>
            <div class="w-80 lg:w-108 h-32 border-2 border-[#d9d9d9] bg-white shadow-sm flex justify-center items-center">
                 <figure className='w-96'>
                    <img src={Kaspersky} alt="image not loading"/>
                </figure>
            </div>
            <div class="w-80 lg:w-108 h-32 border-2 border-[#d9d9d9] bg-white shadow-sm flex justify-center items-center">
                 <figure >
                    <img src={Fortinet} alt="image not loading"/>
                </figure>
            </div>
            <div class="w-80 lg:w-108 h-32 border-2 border-[#d9d9d9] bg-white shadow-sm flex justify-center items-center ">
                 <figure className='w-88'>
                    <img src={TrendMicro} alt="image not loading"/>
                </figure>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CompanyPartners