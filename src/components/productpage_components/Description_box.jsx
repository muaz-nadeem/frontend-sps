import React from 'react'

const Description_box = ({ description, shadow, width, height, font }) => {
    return (
        <div 
            className={`${width} ${height} ${font} p-7 text-2xl rounded-tr-3xl border-4 border-blue-700 rounded-bl-3xl ${shadow} font-poppins`}
        >
            <p>{description}</p>
        </div>
    )
}

export default Description_box