import React from 'react'

const Section1 = ({ product }) => {
  return (

    <div className='flex flex-col lg:flex-row w-full flex-shrink-0 min-h-screen mt-8'>
      <div className="h-160 bg-white border rounded-2xl lg:rounded-4xl mx-auto md:ml-50 my-4 lg:my-10 w-100 md:w-220 flex flex-col shadow-[0_0_5px_7px_rgba(0,0,150,0.3),0_0_20px_10px_rgba(0,0,0,0.3)]">
          <img className="max-w-xl lg:max-w-48 mx-auto" src={product.logo} alt={`${product.name} logo`} />

          <div className="h-1 bg-blue-700 mt-3 lg:mt-5 shadow-[0_4px_7px_rgba(0,0,255,0.4)]"></div>

          <h1 className="text-lg mt-5 font-bold text-center text-[#130E77]">{product.banner.title}</h1>
          <p className='px-6 mt-2 lg:mt-3 font-normal text-base text-justify'>
            {product.banner.description}</p>

          <ul className="list-disc list-inside px-6">
              {product.banner.features.map((feature, index) => (
                <li key={index}>
                  <span className="text-[#130E77] mt-2 text-base font-bold font-poppins">{feature.title}</span>  
                  <p className="text-gray-700 text-base font-poppins">{feature.description}</p>
                </li>
              ))}
          </ul>

      </div>


      <div 
    className="lg:block bg-gradient-to-b w-full from-blue-500 to-blue-900 flex items-center justify-center min-h-screen animate-subtle-wave relative"
    style={{clipPath: "circle(90% at 100% 100%)"}}
>
    <img 
        className="absolute bottom-4 right-4 w-sm md:w-lg " 
        src={product.whiteLogo} 
        alt={`${product.name} white logo`} 
    />
</div>

    </div>
  
  )
}

export default Section1