// components/CardTwoCol.jsx
import React from 'react';

const CardTwoCol = ({ imgsrc, title, desc }) => {
    return (
        <div className="w-full sm:w-1/2 p-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
                <figure>
                    <img className="rounded-t-lg w-full h-auto object-cover" src={imgsrc} alt={title} />
                </figure>
                <div className="p-5 flex flex-col flex-grow">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 flex-grow">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default CardTwoCol;