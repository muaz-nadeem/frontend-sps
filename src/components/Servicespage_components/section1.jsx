import React from 'react'
const section1 = ({IMGsrc,desc}) => {
  return (
    <div className='flex items-center self-center flex-row w-4/5 h-auto p-6 mx-10 mt-5 gap-5 border-2 border-grey'>
       
          <img src={IMGsrc} alt="image is being loaded" className='size-36'/>
          <h1>
              {desc}
          </h1>
    </div>
  )
}

export default section1