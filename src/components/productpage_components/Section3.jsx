import React from 'react'
import Statcard_s3 from './statcard_s3'
import Description_box from './Description_box'
import { Check } from "lucide-react";

const Section3 = () => {
  return (
    <div className="m-30 bg-white border-white rounded-4xl p-8 min-h-screen shadow-[3px_3px_7px_2px_rgba(0,0,0,0.3)]">

        <h1 className="text-4xl font-semibold font-poppins text-[#130E77] text-center mt-10">How We Support NEPRA Compliance</h1>

        <div className = "flex justify-center gap-10 mt-15">

        <Statcard_s3 shadow = "shadow-[0px_0px_15px_7px_rgba(47,128,232,0.5)]" title = "Comprehensive Asset Discovery" description = "Identify and Catalog all IT and OT Assets"/>
        <Statcard_s3 shadow = "shadow-[0px_0px_15px_7px_rgba(35,159,212,0.5)]" title = "Blue" description = "This is the white section with description text."/>
        <Statcard_s3 shadow = "shadow-[0px_0px_15px_7px_rgba(47,128,232,0.5)]" title = "Blue" description = "This is the white section with description text."/>
        <Statcard_s3 shadow = "shadow-[0px_0px_15px_7px_rgba(35,159,212,0.5)]" title = "Blue" description = "This is the white section with description text."/>
        </div>

        <h2 className="text-4xl font-semibold font-poppins text-[#130E77] text-center mt-20">Who Can Benefit?</h2>
        <p className='text-center font-poppins text-xl mt-5'>This service is tailored for:</p>

        <div className='flex justify-center mt-15 gap-20'>
            <Description_box description="Power Generation Companies"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="200px" height="200px" font="bold"/>
            <Description_box description="Power Generation Companies"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="200px" height="200px" font="bold"/>
        </div>

        <div className='flex justify-center mt-10 gap-20'>
            <Description_box description="Power Generation Companies"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="200px" height="200px" font="bold"/>
            <Description_box description="Power Generation Companies"  shadow="shadow-[0px_0px_15px_5px_rgba(35,159,212,0.5)]" width="200px" height="200px" font="bold"/>
        </div>
 

    </div>
  )
}

export default Section3