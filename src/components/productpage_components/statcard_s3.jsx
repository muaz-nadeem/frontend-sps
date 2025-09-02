import React from 'react'

const Statcard_s3 = ({ shadow,title, description }) => {
    return (
        <div class="flex flex-col">
        <div className='h-12 p-3 bg-gradient-to-r from-blue to-skyblue rounded-tr-4xl ${shadow} flex items-center justify-center'>
            <p className='text-white text-sm font-medium'>{title}</p>
        </div>
        <div className={` h-20 border-3 border-skyblue  rounded-bl-2xl lg:rounded-bl-4xl flex flex-col ${shadow} justify-center `}>
            {/* Right Part (White background) */}
                <p className="text-black font-poppins font-bold text-base text-center">
                    {description}
                </p>
        </div>
        </div>
    )
}

export default Statcard_s3