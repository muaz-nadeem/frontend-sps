import React from 'react'
import Plan from './Plan'
import BasicIcon from '../assets/BasicIcon.png'
import StandardIcon from '../assets/StandardIcon.png'
import PremiumIcon from '../assets/PremiumIcon.png'
const Plans = () => {
  return (
    <div className='text-center'>
        <h4 className='text-blue font-bold text-xl md:text-2xl'>Choose a Plan</h4>
        <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
            <Plan title="Basic" icon={BasicIcon} price="$ 1k/month"/>
            <Plan title="Standard" icon={StandardIcon} price="$ 3k/month"/>
            <Plan title="Premium" icon={PremiumIcon} price="Custom"/>
        </div>
    </div>
  )
}

export default Plans