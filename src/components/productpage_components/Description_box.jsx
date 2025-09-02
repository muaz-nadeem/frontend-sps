import React from 'react'

const Description_box = ({ description, classes}) => {
    return (

        <div className={` ${classes} font-poppins  p-7 text-base rounded-tr-3xl border-3 border-skyblue rounded-bl-3xl`}>
            <p>
                {description}
            </p>
        </div>

    )
  }

export default Description_box