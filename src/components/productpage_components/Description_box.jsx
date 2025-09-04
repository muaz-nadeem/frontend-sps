import React from 'react'

const Description_box = ({ children, classes}) => {
    return (

        <div className={`flex items-center ${classes} font-poppins  p-7 text-base rounded-tr-3xl border-3 border-skyblue rounded-bl-3xl`}>
            <p className='text-center'>
                {children}
            </p>
        </div>
    )
  }

export default Description_box