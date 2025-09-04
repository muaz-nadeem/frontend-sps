import React from 'react'
import Form from '../components/productpage_components/Form'
import Description_box from '../components/productpage_components/Description_box'
import { Twitter } from 'lucide-react'
import { Linkedin } from 'lucide-react'
const AboutUs = () => {
  return (
    <div className='flex justify-center my-10'>
        <Form/>
        <div className='flex flex-col m-10 gap-8'>
          
          <Description_box classes='w-64 h-24'>
              <p><span className='text-blue font-bold '>Call us : </span>+301-337-2290</p>
            </Description_box>
            <Description_box classes='w-64 h-24'>
              <p><span className='text-blue font-bold '>Call us : </span>+301-337-2290</p>
            </Description_box>
            <Description_box classes='w-64 h-24'>
              <p><span className='text-blue font-bold '>Call us : </span>+301-337-2290</p>
            </Description_box>
            <button className='flex justify-between w-64 p-4 rounded-4xl bg-gradient-to-r from-blue to-skyblue text-md text-white font-bold transition-all ease-in-out hover:bg-gradient-to-l'>
              Follow Us
              <div className='flex flex-row gap-3'>
                <Twitter color="#ffffff" absoluteStrokeWidth />
                <Linkedin color="#ffffff" absoluteStrokeWidth />
              </div>
            </button>
        </div>
            
            
    </div>
  )
}

export default AboutUs