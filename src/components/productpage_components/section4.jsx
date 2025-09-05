import React from 'react'
import ContactImage from '../../assets/Contact image.webp'
import Form from './Form'

const Section4 = ({ product }) => {
    return (
        <div className="mb-16 px-4 ">
            <h1 className="text-2xl font-semibold font-poppins text-[#130E77] text-center mt-10 mb-8">{product.contactInfo.title}</h1>
            <p className="text-center mb-8">{product.contactInfo.description}</p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 mx-auto">
                {/* FORM */}
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <Form />
                </div>
                
                {/* IMAGE */}
                <div className="lg:-ml-32 order-1 lg:order-2">
                    <img src={ContactImage} alt="NEPRA Compliance" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Section4