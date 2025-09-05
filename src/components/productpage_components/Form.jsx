import React from 'react'

const Form = () => {
  return (
    
    <div className="bg-white shadow-[3px_3px_15px_7px_rgba(19,14,119,0.5)] rounded-b-lg p-6 w-full h-auto">
    
                <form className="space-y-5 mt-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full h-10 border-2 border-gray-300 rounded-md p-3 "
                            placeholder='Enter your name'
                        />
                    </div>

                    {/* Email + Phone */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your contact'
                            />
                        </div>
                    </div>

                    {/* Company + Job Title */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Company
                            </label>
                            <input
                                type="text"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your company'
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your job'
                            />
                        </div>
                    </div>

                    {/* Question */}
                    <div>
                        <label className="block text-md font-bold font-poppins text-gray-600 mb-1">
                            What date and time works best for you to meet with our consultant? 
                        </label>
                    </div>

                    {/* Date + Time */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                            />
                        </div>
                        <div className="w-1/2">
                                        <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Time
                            </label>
                            <input
                                type="time"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4 ">
                        <button
                            type="submit"
                            className=" bg-gradient-to-r from-skyblue to-blue hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 text-white font-bold font-poppins px-10 py-2 rounded-4xl"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
  )
}

export default Form