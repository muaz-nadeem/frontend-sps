import React from 'react'
import tenableLogo from "../../assets/tenable logo 3.webp";
import Tenable from "../../assets/Tenable logo white.webp";

const Section1 = () => {
  return (

    <div className='flex flex-col lg:flex-row w-full flex-shrink-0 min-h-screen mt-8'>
      <div className="h-160 bg-white border rounded-2xl lg:rounded-4xl mx-auto md:ml-50 my-4 lg:my-10 w-100 md:w-220 flex flex-col shadow-[0_0_5px_7px_rgba(0,0,150,0.3),0_0_20px_10px_rgba(0,0,0,0.3)]">
          <img className="max-w-xl lg:max-w-48 mx-auto" src={tenableLogo} alt="tenable logo" />

          <div className="h-1 bg-blue-700 mt-3 lg:mt-5 shadow-[0_4px_7px_rgba(0,0,255,0.4)]"></div>

          <h1 className="text-lg mt-5 font-bold text-center  text-[#130E77]">Why Tenable for IT & OT Secuirty?</h1>
          <p className='px-6 mt-2 lg:mt-3 font-normal text-base text-justify'>
            Tenable's solutions are designed to provide 
            unparalleled visibility and control over your IT and OT environments, 
            enabling organizations in the power
            sector to:</p>

          <ul className="list-disc list-inside px-6  ">
              <li >
                  <span className="text-[#130E77]  mt-2 text-base font-bold font-poppins">Identify Vulnerabilities Proactively</span>  
                  <p className="text-gray-700 m text-base font-poppins">Discover, assess, and remediate vulnerabilities across all environments</p>
              </li>

              <li >
                  <span className="text-[#130E77] mt-2 text-base font-bold font-poppins">Streamline Compliance</span>  
                  <p className="text-gray-700 text-base  font-poppins">Simplify NEPRA compliance with tools that map directly to regulatory frameworks</p>
              </li>

              <li >
                  <span className="text-[#130E77] mt-2  text-base font-bold font-poppins">Mitigate Cyber Risks</span>  
                  <p className="text-gray-700 text-base  font-poppins">Prioritize remediation efforts based on risk to your critical assets</p>
              </li>
              
              <li >
                  <span className="text-[#130E77] mt-2  text-base font-bold font-poppins">Gain Unified Visibility</span>  
                  <p className="text-gray-700 text-base font-poppins">Monitor all assets-from IT endpoints to OT systems-in a single pane<br/> of glass</p>
              </li>

              <li >
                  <span className="text-[#130E77] mt-2  text-base font-bold font-poppins">Ensure Operational Continuity</span>  
                  <p className="text-gray-700 text-base  font-poppins">Protect IT and OT systems against threats without disrupting operations</p>
              </li>
          </ul>

      </div>


      <div 
    className="lg:block bg-gradient-to-b w-full from-blue-500 to-blue-900 flex items-center justify-center min-h-screen animate-subtle-wave relative"
    style={{clipPath: "circle(90% at 100% 100%)"}}
>
    <img 
        className="absolute bottom-4 right-4 w-sm md:w-lg " 
        src={Tenable} 
        alt="logo" 
    />
</div>

    </div>
  
  )
}

export default Section1