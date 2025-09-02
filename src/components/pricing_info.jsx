// src/components/pricing_info.jsx
import React from 'react';
import TitleDescriptionBlock from './TitleDescriptionBlock'; // Import the new component

const PricingInformation = ({ heading, title, desc }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-blue font-bold text-2xl'>{heading}</h1>
      
      {/* Map over the titles and descriptions together */}
      {title.map((itemTitle, index) => (
        <TitleDescriptionBlock 
          key={index}
          title={itemTitle}
          description={desc[index]} // Match the description by index
        />
      ))}
    </div>
  );
};

export default PricingInformation;