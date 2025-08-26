import React from 'react'
import tenableLogo from "../../assets/tenable logo 3.webp";
import trendMicroLogo from "../../assets/Trend micro logo white.webp";

const Section1 = () => {
  return (

    <div className='flex flex-col lg:flex-row w-full flex-shrink-0 min-h-screen'>
      <div className="mt-8 lg:mt-24 bg-white py-4 lg:py-7 border rounded-2xl lg:rounded-4xl mx-4 lg:mx-20 my-4 lg:my-10 w-full lg:w-1/2 flex flex-col shadow-[0_0_5px_7px_rgba(0,0,150,0.3),0_0_20px_10px_rgba(0,0,0,0.3)]">
          <img className="max-w-48 lg:max-w-xs mx-auto" src={tenableLogo} alt="tenable logo" />

          <div className="h-1 bg-blue-700 mt-3 lg:mt-5 shadow-[0_4px_7px_rgba(0,0,255,0.4)]"></div>

          <h1 className="text-xl lg:text-2xl font-bold text-center mt-3 lg:mt-5 text-[#130E77]">Why Tenable for IT & OT Secuirty?</h1>
          <p className='px-4 lg:px-10 mt-2 lg:mt-3 font-normal text-base lg:text-lg'>
            Tenable's solutions are designed to provide 
            unparalleled visibility and control over your IT and OT environments, 
            enabling organizations in the power
            sector <br/>to:</p>

          <ul className="list-disc list-inside px-4 lg:px-10 py-3 lg:py-5">
              <li >
                  <span className="text-[#130E77] text-lg lg:text-xl font-bold font-poppins">Identify Vulnerabilities Proactively</span>  
                  <p className="text-gray-700 text-base lg:text-xl font-poppins">Discover, assess, and remediate vulnerabilities across all environments</p>
              </li>

              <li className='mt-3 lg:mt-5'>
                  <span className="text-[#130E77] text-lg lg:text-xl font-bold font-poppins">Streamline Compliance</span>  
                  <p className="text-gray-700 text-base lg:text-xl font-poppins">Simplify NEPRA compliance with tools that map directly to regulatory frameworks</p>
              </li>

              <li className='mt-3 lg:mt-5'>
                  <span className="text-[#130E77] text-lg lg:text-xl font-bold font-poppins">Mitigate Cyber Risks</span>  
                  <p className="text-gray-700 text-base lg:text-xl font-poppins">Prioritize remediation efforts based on risk to your critical assets</p>
              </li>
              
              <li className='mt-3 lg:mt-5'>
                  <span className="text-[#130E77] text-lg lg:text-xl font-bold font-poppins">Gain Unified Visibility</span>  
                  <p className="text-gray-700 text-base lg:text-xl font-poppins">Monitor all assets-from IT endpoints to OT systems-in a single pane<br/> of glass</p>
              </li>

              <li className='mt-3 lg:mt-5'>
                  <span className="text-[#130E77] text-lg lg:text-xl font-bold font-poppins">Ensure Operational Continuity</span>  
                  <p className="text-gray-700 text-base lg:text-xl font-poppins">Protect IT and OT systems against threats without disrupting operations</p>
              </li>
          </ul>

      </div>


      <div 
        className="lg:block w-full lg:w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 flex items-center justify-center min-h-[300px] lg:min-h-screen"
        style={{clipPath: "circle(55% at 100% 50%)"}}
        >
      
         <img className="ml-8 lg:ml-96 max-w-48 lg:max-w-lg" src={trendMicroLogo} alt="logo" />
      </div>

    </div>
  )
}

export default Section1