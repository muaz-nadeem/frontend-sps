import React from 'react'
import Description_box from './Description_box'

const Section2 = () => {
    return (


        <div className="m-4 md:m-32 bg-white border-white rounded-2xl lg:rounded-4xl p-3 lg:px-32 lg:py-16 min-h-96 shadow-[3px_3px_7px_2px_rgba(0,0,0,0.3)]">

            {/* THE LEFT TWO BOXES */}
            <div className="flex flex-col lg:flex-row justify-center">

                <div className="flex flex-col gap-10 ml-10 mt-5">

                    <Description_box description="Real time monitoring and anomaly detection for OT 
                environments with comprehensive asset inventory"  
                classes="w-md h-auto shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]"/>

                    <Description_box description="Protects critical Infrastructure through detailed 
                risk assessments"   classes="w-md h-auto shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]"/>
                </div>

                
                <div className="hidden lg:flex flex-col gap-32 items-center mt-16 ml-2">
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                </div>

                <div class="hidden lg:block mt-20 ml-2 w-32 h-40 border-t-2 border-b-2 border-r-2 rounded-tr-4xl rounded-br-4xl border-blue"></div>

                <div className="relative flex items-center mt-4 lg:mt-0">
                    <div className="w-20 lg:w-40 h-[1px] bg-blue"></div> {/* horizontal line */}
                    <h1 className="ml-2 lg:ml-5text-xl font-semibold text-blue-900">Tenable.ot</h1>
                </div>

            </div>



            {/* THE RIGHT TWO BOXES */}

            <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-0">

                <div className="flex gap-10 ml-10 mt-5">

                    <div className="relative flex items-center">
                        <h1 className="ml-2 lg:ml-5 mt-2 lg:mt-5 text-xl font-semibold text-blue-900">Tenable.io</h1>
                        <div className="w-20 lg:w-44 ml-2 -mr-4 lg:-mr-9 mt-2 lg:mt-7 h-[1px] bg-blue"></div> {/* horizontal line */}
                    </div>

                    <div class="hidden lg:block mt-24 -mr-9 w-32 h-40 border-t-2 border-b-2 border-l-2 rounded-tl-4xl rounded-bl-4xl border-blue"></div>

                    <div className="hidden lg:flex flex-col gap-32 items-center mt-20 ml-2 -mr-7">
                        <div className="w-7 h-7 rounded-full border-3 border-skyblue bg-transparent "></div> {/* circle */}
                        <div className="w-7 h-7 rounded-full border-3 border-skyblue bg-transparent "></div> {/* circle */}
                    </div>

                    <div className='flex flex-col gap-10 mt-10'>
                        <Description_box description="Real time monitoring and anomaly detection for OT 
                        environments with comprehensive asset inventory"  classes="w-md h-auto shadow-[0px_0px_15px_5px_skyblue]"/ >

                        <Description_box description="Protects critical Infrastructure through detailed 
                        risk assessments"  classes="w-md h-auto shadow-[0px_0px_15px_5px_skyblue] "/>
                    </div>

                </div>

            </div>


            {/* THE LEFT TWO BOXES */}
            <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-0">

                <div className="flex flex-col gap-10 ml-10 mt-10">

                    <Description_box description="Real time monitoring and anomaly detection for OT 
                        environments with comprehensive asset inventory"  classes="w-md h-auto shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]"/>

                    <Description_box description="Protects critical Infrastructure through detailed 
                      risk assessments"   classes="w-md h-auto shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]"/>
                </div>

                <div className="hidden lg:flex flex-col gap-30 items-center mt-22 ml-2">
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                </div>

                <div class="hidden lg:block mt-25 ml-2 w-32 h-38 border-t-2 border-b-2 border-r-2 rounded-tr-4xl rounded-br-4xl border-blue"></div>

                <div className="relative flex items-center mt-4 lg:mt-0">
                    <div className="w-20 lg:w-40 h-[1px] bg-blue"></div> {/* horizontal line */}
                    <h1 className="ml-2 lg:ml-5 text-xl font-semibold text-blue-900">Tenable.ot</h1>
                </div>

            </div>



        </div>

    )
}

export default Section2