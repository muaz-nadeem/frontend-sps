import React from 'react'
import ContactImage from '../../assets/Contact image.webp'

const Section4 = () => {
    return (
        <div className="mt-55 mb-15">
            <h1 className="mr-15 text-[45px] font-semibold font-poppins text-[#130E77] text-center mt-10">Get Started with NEPRA Compliance: Schedule Your Consultation Today </h1>
            
            <div className="flex items-center justify-center gap-25 ml-55 mt-5">
            {/* FORM */}

            <div className="bg-white mt-5 -ml-10 shadow-[3px_3px_15px_7px_rgba(19,14,119,0.5)] rounded-lg p-8 w-[75%] h-[800px]">
    
                <form className="space-y-10 mt-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                        />
                    </div>

                    {/* Email + Phone */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                    </div>

                    {/* Company + Job Title */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Company
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                    </div>

                    {/* Question */}
                    <div>
                        <label className="block text-xl font-bold font-poppins text-gray-600 mb-1">
                            What date and time works best for you to meet with our consultant? 
                        </label>
                    </div>

                    {/* Date + Time */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                        <div className="w-1/2">
                                        <label className="block text-xl font-normal font-poppins text-gray-600 mb-1">
                                Time
                            </label>
                            <input
                                type="time"
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 h-15"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4 ">
                        <button
                            type="submit"
                            className="w-1/4 h-14 bg-gradient-to-r from-blue-500 to-blue-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 text-white font-bold font-poppins px-6 py-2 rounded-4xl"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>


            {/* IMAGE */}

            <div className="w-1/2 h-[800px] mt-10">
                <img src={ContactImage} alt="NEPRA Compliance" className="w-full h-full object-cover" />
            </div>

            </div>
        </div>
    )
}

export default Section4