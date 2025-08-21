import React from 'react'
import Plan from './Plan'
import BasicIcon from '../assets/BasicIcon.webp'
import StandardIcon from '../assets/StandardIcon.webp'
import PremiumIcon from '../assets/PremiumIcon.webp'
import { FaDoorOpen } from 'react-icons/fa';
const Plans = () => {
  return (
    <section>
        <div className='text-center'>
            <h4 className='text-blue font-bold text-xl md:text-2xl mb-4'>Choose a Plan</h4>
            <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
                <Plan title="Basic" icon={BasicIcon} price="$ 1k/month"/>
                <Plan title="Standard" icon={StandardIcon} price="$ 3k/month"/>
                <Plan title="Premium" icon={PremiumIcon} price="Custom"/>
            </div>
            <div className='rounded-3xl w-108  md:w-3xl h-16 md:h-12  border-b-4 border-2  border-[#d9d9d9] inline-flex justify-center items-center m-5 my-18 text-left'>
              <span className='text-blue flex  items-center gap-2 mx-2 font-bold'> <FaDoorOpen className='text-3xl sm:text-2xl'/> Join our webinar : </span>
              <h5>
              Achieving NEPRA Cybersecurity Compliance with Kaspersky
              </h5>
            </div>
        </div>
    </section>
  )
}

export default Plans