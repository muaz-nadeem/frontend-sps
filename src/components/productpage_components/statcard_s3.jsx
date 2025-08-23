import React from 'react'

const Statcard_s3 = ({ shadow, title, description }) => {
    return (
        <div className={`w-[250px] h-[200px] border-3 border-blue-600 rounded-tr-4xl rounded-bl-4xl flex flex-col ${shadow}`}>

            {/* Left Part (Blue background) */}
            <div className="w-[247px] h-[70px] bg-gradient-to-r from-blue-500 to-blue-900 rounded-tr-4xl text-white p-4">
                <h2 className="font-poppins font-semibold text-xl text-left -mt-2">{title}</h2>
            </div>

            {/* Right Part (White background) */}
            <div className="bg-white mt-5 ml-3">
                <p className="text-black font-poppins font-bold text-xl">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Statcard_s3