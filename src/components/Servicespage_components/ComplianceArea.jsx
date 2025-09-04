import React from 'react';
import { CheckSquare } from 'lucide-react';

const ComplianceArea = ({ heading, li, lidata }) => {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 h-auto p-6 mx-auto border-2 border-grey'>
      <div className='w-full h-auto  bg-gradient-to-r from-skyblue to-blue rounded-t-3xl p-4 text-white'>
        <h2 className='text-white text-2xl font-bold'>{heading}</h2>
      </div>
      <div className='w-full h-auto rounded-b-3xl p-8 border-2 border-skyblue shadow-xl shadow-skyblue text-justify'>
        <ul className='list-disc'>
          {li.map((listItem, index) => (
            <li key={index} className='text-blue font-bold text-md mb-2'>
              {listItem}
              {lidata[index] && (
                <>
                  {Array.isArray(lidata[index]) ? (
                    <ul className='list-none pl-5 text-black font-normal mt-1'>
                      {lidata[index].map((subItem, subIndex) => (
                        <li key={subIndex} className='flex items-center text-black font-normal text-md p-2'>
                          <CheckSquare className="w-4 h-4 ml-8 mr-2 text-blue flex-shrink-0" />
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className='flex items-start text-black font-normal text-base mt-1'>
                      <CheckSquare className="w-4 h-4 ml-8 mr-2 text-blue flex-shrink-0" />
                      <p>{lidata[index]}</p>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplianceArea;