import React from 'react'

const Description_box = ({ description, classes}) => {
    return (

        <div className={` ${classes} font-poppins  p-7 text-base rounded-tr-3xl border-4 border-blue-700 rounded-bl-3xl`}>
            <p>
                {description}
            </p>
        </div>

    )
  }

export default Description_box