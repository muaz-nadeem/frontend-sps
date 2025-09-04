import React from 'react'

const AboutWriter = () => {
  return (
        <section className='container flex flex-row gap-3 h-auto bg-white shadow-md shadow-skyblue p-4 rounded-3xl mx-auto my-4'>
            <div className="flex flex-col">
            <h5 className='text-blue font-bold text-xl'>About Writer : </h5>
                 <p className='bg-transparent '>
                    Muhammad Shahwar Khan is a seasoned cybersecurity professional and the Director of NEPRA Compliance at SPS. Shahwar specializes in guiding power sector entities to achieve regulatory compliance under the NEPRA Cybersecurity Guidelines. His expertise spans in aligning cybersecurity strategies with evolving regulations. As a trusted NEPRA Compliance Advisor, Shahwar is committed to helping organizations strengthen their cybersecurity posture, ensuring resilient and secure operations in an increasingly complex threat landscape. You may reach out at
                    <span className='underline px-1 text-skyblue'>  Shahwar.khan@spsnet.com </span>or through <span className='underline text-skyblue'> +92 345 5777769</span>
                </p>
                </div>
        </section>
  )
}

export default AboutWriter