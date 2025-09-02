import React from 'react'
import ContactImage from '../../assets/Contact image.webp'
import Form from './Form'
const Section4 = () => {
    return (
        <div className="mb-16 px-4 ">
            <h1 className="text-2xl  font-semibold font-poppins text-[#130E77] text-center mt-10 mb-8">Get Started with NEPRA Compliance: Schedule Your Consultation Today </h1>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4  mx-auto">
            {/* FORM */}
            <Form/>

            {/* IMAGE */}

            <div className="  -mr-32">
                <img src={ContactImage} alt="NEPRA Compliance" className="w-full h-full object-cover rounded-lg" />
            </div>

            </div>
        </div>
    )
}

export default Section4