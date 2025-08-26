import React from 'react'

const Statcard_s3 = ({ shadow, title, description }) => {
    return (
        <div className={`w-full lg:w-64 h-40 lg:h-52 border-3 border-blue-600 rounded-tr-2xl lg:rounded-tr-4xl rounded-bl-2xl lg:rounded-bl-4xl flex flex-col ${shadow}`}>

            {/* Left Part (Blue background) */}
            <div className="w-full lg:w-64 h-16 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-900 rounded-tr-2xl lg:rounded-tr-4xl text-white p-3 lg:p-4">
                <h2 className="font-poppins font-semibold text-lg lg:text-xl text-left -mt-1 lg:-mt-2">{title}</h2>
            </div>

            {/* Right Part (White background) */}
            <div className="bg-white mt-3 lg:mt-5 ml-2 lg:ml-3">
                <p className="text-black font-poppins font-bold text-base lg:text-xl">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Statcard_s3