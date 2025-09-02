import React from 'react'
import Form  from './productpage_components/Form'

const pricing_form = ({title}) => {
  return (
    <div className='flex flex-col mt-24 mb-24 items-center'>
        <div className='w-1/2  h-auto bg-gradient-to-r from-skyblue to-blue rounded-t-3xl p-4 text-white'>
         <h2>{title}</h2>
        </div>
        <Form/>
    </div>
  )
}

export default pricing_form