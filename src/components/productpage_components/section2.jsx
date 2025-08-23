import React from 'react'
import Description_box from './Description_box'

const Section2 = () => {
    return (


        <div className="m-30 bg-white border-white rounded-4xl p-8 min-h-screen shadow-[3px_3px_7px_2px_rgba(0,0,0,0.3)]">

            {/* THE LEFT TWO BOXES */}
            <div className="flex justify-center">

                <div className="flex flex-col gap-10 ml-10 mt-5">

                    <Description_box description="Real time monitoring and anomaly detection for OT 
                environments with comprehensive asset inventory" shadow="shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]" width="2xl" height="28"/>

                    <Description_box description="Protects critical Infrastructure through detailed 
                risk assessments"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="2xl" height="28"/>
                </div>

                <div className="flex flex-col gap-30 items-center mt-15 ml-2">
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                </div>

                <div class="mt-18 ml-2 w-32 h-38 border-t-2 border-b-2 border-r-2 rounded-tr-4xl rounded-br-4xl border-blue"></div>

                <div className="relative flex items-center">
                    <div className="w-40 h-[1px] bg-blue"></div> {/* horizontal line */}
                    <h1 className="ml-5 text-4xl font-semibold text-blue-900">Tenable.ot</h1>
                </div>

            </div>



            {/* THE RIGHT TWO BOXES */}

            <div className="flex justify-center">

                <div className="flex gap-10 ml-10 mt-5">

                    <div className="relative flex items-center">
                        <h1 className="ml-5 mt-5 text-4xl font-semibold text-blue-900">Tenable.io</h1>
                        <div className="w-44 ml-2 -mr-9 mt-7 h-[1px] bg-blue"></div> {/* horizontal line */}
                    </div>

                    <div class="mt-23 -mr-9 w-32 h-38 border-t-2 border-b-2 border-l-2 rounded-tl-4xl rounded-bl-4xl border-blue"></div>


                    <div className="flex flex-col gap-30 items-center mt-20 ml-2 -mr-7">
                        <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                        <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                    </div>

                    <div className='flex flex-col gap-10 mt-10'>
                        <Description_box description="Real time monitoring and anomaly detection for OT 
                        environments with comprehensive asset inventory" shadow="shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]" width="2xl" height="28"/ >

                        <Description_box description="Protects critical Infrastructure through detailed 
                        risk assessments" shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="2xl" height="28"/>
                    </div>

                </div>

            </div>


            {/* THE LEFT TWO BOXES */}
            <div className="flex justify-center">

                <div className="flex flex-col gap-10 ml-10 mt-10">

                    <Description_box description="Real time monitoring and anomaly detection for OT 
                        environments with comprehensive asset inventory" shadow="shadow-[0px_0px_15px_5px_rgba(47,128,232,0.5)]" width="2xl" height="28"/>

                    <Description_box description="Protects critical Infrastructure through detailed 
                      risk assessments"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="2xl" height="28"/>
                </div>

                <div className="flex flex-col gap-30 items-center mt-20 ml-2">
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                    <div className="w-7 h-7 rounded-full border-3 border-blue-800 bg-transparent "></div> {/* circle */}
                </div>

                <div class="mt-23 ml-2 w-32 h-38 border-t-2 border-b-2 border-r-2 rounded-tr-4xl rounded-br-4xl border-blue"></div>

                <div className="relative flex items-center">
                    <div className="w-40 h-[1px] bg-blue"></div> {/* horizontal line */}
                    <h1 className="ml-5 text-4xl font-semibold text-blue-900">Tenable.ot</h1>
                </div>

            </div>



        </div>

    )
}

export default Section2