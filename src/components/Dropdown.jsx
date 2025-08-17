import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <li 
      className="relative px-3 hover:bg-skyblue hover:text-white rounded-2xl flex items-center transition-all cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      aria-haspopup="true"
      aria-expanded={isOpen}
      tabIndex={0}
      ref={dropdownRef}
    >
      {title}
      <i className="ri-arrow-drop-down-line text-2xl align-middle"></i>
      {isOpen && (
        <ul className="absolute left-0 top-full mt-2 min-w-[160px] bg-white text-blue rounded shadow-lg z-10">
          {items.map((item, index) => (
            <li 
              key={index}
              className="px-4 py-2 hover:bg-skyblue hover:text-white cursor-pointer"
            >
              {item}
            </li>
            
          ))}
        </ul>
        
      )}
    </li>
    
  );
};

export default Dropdown;