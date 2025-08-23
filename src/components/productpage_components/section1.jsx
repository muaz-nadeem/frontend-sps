import React from 'react'
import tenableLogo from "../../assets/tenable logo 3.webp";
import trendMicroLogo from "../../assets/Trend micro logo white.webp";

const Section1 = () => {
  return (

    <div className='flex w-full flex-shrink-0 h-screen'>
      <div className="mt-25 bg-white py-7 border rounded-4xl mx-50 my-10 w-1/2 flex flex-col shadow-[0_0_5px_7px_rgba(0,0,150,0.3),0_0_20px_10px_rgba(0,0,0,0.3)]">
          <img className="max-w-[300px] mx-auto" src={tenableLogo} alt="tenable logo" />

          <div className="h-[4px] bg-blue-700 mt-5 shadow-[0_4px_7px_rgba(0,0,255,0.4)]"></div>

          <h1 className="text-2xl font-bold text-center mt-5 text-[#130E77]">Why Tenable for IT & OT Secuirty?</h1>
          <p className='px-10 mt-3 font-normal text-lg'>
            Tenable's solutions are designed to provide 
            unparalleled visibility and control over your IT and OT environments, 
            enabling organizations in the power
            sector <br/>to:</p>

          <ul className="list-disc list-inside px-10 py-5">
              <li >
                  <span className="text-[#130E77] text-xl font-bold font-poppins">Identify Vulnerabilities Proactively</span>  
                  <p className="text-gray-700 text-xl font-poppins">Discover, assess, and remediate vulnerabilities across all environments</p>
              </li>

              <li className='mt-5'>
                  <span className="text-[#130E77] text-xl font-bold font-poppins">Streamline Compliance</span>  
                  <p className="text-gray-700 text-xl font-poppins">Simplify NEPRA compliance with tools that map directly to regulatory frameworks</p>
              </li>

              <li className='mt-5'>
                  <span className="text-[#130E77] text-xl font-bold font-poppins">Mitigate Cyber Risks</span>  
                  <p className="text-gray-700 text-xl font-poppins">Prioritize remediation efforts based on risk to your critical assets</p>
              </li>
              
              <li className='mt-5'>
                  <span className="text-[#130E77] text-xl font-bold font-poppins">Gain Unified Visibility</span>  
                  <p className="text-gray-700 text-xl font-poppins">Monitor all assets-from IT endpoints to OT systems-in a single pane<br/> of glass</p>
              </li>

              <li className='mt-5'>
                  <span className="text-[#130E77] text-xl font-bold font-poppins">Ensure Operational Continuity</span>  
                  <p className="text-gray-700 text-xl font-poppins">Protect IT and OT systems against threats without disrupting operations</p>
              </li>
          </ul>

      </div>


      <div 
        className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 flex items-center justify-center"
        style={{clipPath: "circle(55% at 100% 50%)"}}
        >
      
         <img className="ml-70 max-w-[500px]" src={trendMicroLogo} alt="logo" />
      </div>

    </div>
  )
}

export default Section1