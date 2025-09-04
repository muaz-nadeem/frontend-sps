import React from 'react';

const Card = ({ imgsrc, title, desc, layout }) => {
    // The width class is adjusted to handle different layouts
    const columnWidth = layout === 'two-col' ? 'w-full sm:w-1/2' : 'w-full sm:w-1/2 lg:w-1/3';

    return (
        // Increased padding to `p-6` for more spacing around the cards
        <div className={`${columnWidth} p-6`}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
                <figure>
                    <img className="rounded-t-lg w-full h-auto object-cover" src={imgsrc} alt={title} />
                </figure>
                <div className="p-4 flex flex-col flex-grow">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 flex-grow">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;