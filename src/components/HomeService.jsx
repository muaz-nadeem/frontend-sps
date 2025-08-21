import React from 'react';
import { Plus, Minus } from 'lucide-react';

const HomeService = ({ title, desc, isOpen, onClick }) => {
  const radius = isOpen ? 'rounded-t-xl' : 'rounded-xl';
  const shadowClass = isOpen 
    ? 'shadow-[5px_5px_15px_rgb(18.43%_50.2%_90.98%)]' 
    : 'shadow-[5px_5px_15px_rgb(7.45%_5.49%_46.67%)]';
  const bgGradient = isOpen 
    ? 'bg-gradient-to-r from-skyblue to-blue text-white ' 
    : 'bg-white text-black';
  
  return (
    <li className="w-full list-none">
      <div 
        className={`w-full border border-blue-500 ${shadowClass} mt-4 p-4 flex items-center ${radius} ${bgGradient} cursor-pointer transition-all duration-300`}
        onClick={onClick}
      >
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        <h3 className="ml-3 font-semibold">{title}</h3>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`${shadowClass} rounded-b-xl w-full border border-t-0 border-gray-300 p-4 bg-white`}>
          {desc}
        </div>
      </div>
    </li>
  );
};

export default HomeService;