import React from 'react'

const ServicesForm = () => {
  return (
    
    <div className="bg-white shadow-[3px_3px_15px_7px_rgba(19,14,119,0.5)] rounded-b-lg p-6  my-8  w-4/5 mx-auto h-auto">
                <h5 className='text-2xl font-bold text-blue'>Check your Security Policy for NEPRA Compliance</h5>
                <form className="space-y-5 mt-5 ">

                    {/* Email + Phone */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your name'
                            />
                        </div>
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
                    </div>

                    {/* Company + Job Title */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Enter your company'
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md font-normal font-poppins text-gray-600 mb-1">
                                Choose a File
                            </label>
                            <input
                                type="text"
                                className="w-full h-10  border-2 border-gray-300 rounded-md p-3"
                                placeholder='Upload'
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

export default ServicesForm