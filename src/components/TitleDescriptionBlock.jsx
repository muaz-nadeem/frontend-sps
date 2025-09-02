// src/components/TitleDescriptionBlock.jsx
import React from 'react';

const TitleDescriptionBlock = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='w-[800px] h-auto bg-gradient-to-r from-skyblue to-blue rounded-t-3xl p-4 text-white'>
        <h2>{title}</h2>
      </div>
      <div className='w-[800px] h-auto rounded-b-3xl p-4 border-2 border-skyblue shadow-xl shadow-skyblue'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TitleDescriptionBlock;